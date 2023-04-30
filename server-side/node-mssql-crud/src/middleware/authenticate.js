import { jsonwebtoken } from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const access_token = req.headers.authorization;
  const jwt = require("jsonwebtoken");
  jwt.verify(access_token, "secret", function (err, decoded) {
    if (err) {
      res.json({ error: err });
    } else {
      next();
    }
  });
};
