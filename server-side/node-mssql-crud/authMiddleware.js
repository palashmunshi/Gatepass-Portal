const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
const { promisify } = require('util');
const User = require('../models/user');

const getUserInformation = async (email) => {
  const response = await fetch(`http://127.0.0.1:4000/gatepass/v2/auth/user_information/${email}`);
  const json = await response.json();
  return json;
};

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Authentication token is missing' });
    }
    const token = authHeader.split(' ')[1];
    const decodedToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const { email, timeout } = decodedToken;
    const userInformation = await getUserInformation(email);
    if (!userInformation) {
      return res.status(401).json({ message: 'User information not found' });
    }
    const { role_id } = userInformation;
    const user = await User.findOne({ email, role_id });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.user = user;
    req.token = token;
    next();   
  } catch (error) {
    return res.status(401).json({ message: 'Invalid authentication token' });
  }
};

module.exports = authMiddleware;
