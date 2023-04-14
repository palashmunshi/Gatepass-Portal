const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/rolecheck', authMiddleware, async (req, res) => {
  try {
    const { email } = req.user;

    const response = await fetch(`http://127.0.0.1:4000/gatepass/v2/auth/user_information/${email}`);
    const data = await response.json();
    const { role_id } = data.role_id;

    let role;
    switch (role_id) {
      case 1:
        role = 'student';
        break;
      case 2:
        role = 'warden';
        break;
      case 3:
        role = 'chief-warden';
        break;
      case 4:
        role = 'admin';
        break;
      case 5:
        role = 'guard';
        break;
      default:
        role = 'unknown';
        break;
    }

    res.json({ role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
