import { jsonwebtoken } from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const access_token = req.headers.authorization;
  const jwt = require("jsonwebtoken");
  jwt.verify(access_token, "secret", function (err, decoded) {
    if (err) {
      console.log(err);
      res.json({ error: err });
    } else {
      console.log("Token Verified");
      next();
    }
  });
};
