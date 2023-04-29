import { getConnection, sql, queries } from "../database";
import jwt_decode from "jwt-decode";
import jwt_encode from "jwt-encode";
import jsonwebtoken from "jsonwebtoken";

export const getUserInformation = async (req, res) => {
  try {
    const { email_id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email_id", sql.VarChar, email_id)
      .query(queries.getUserInformation);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const JWTgeneration = async (req, res) => {
  const { googleJWT } = req.body;
  const userObject = jwt_decode(googleJWT);
  const email_id = userObject.email;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("email_id", sql.VarChar, email_id)
    .query(queries.getUserInformation);
  const rowAffected = result.rowsAffected[0];
  if (rowAffected === 0) {
    res.status(403).json({ err: "NOT ALLOWED" });
  } else {
    const userInfo = result.recordset[0];
    // const sign = require("jwt-encode");
    const SERVER_SECRET = "secret";
    // const JWT = sign(userInfo, SERVER_SECRET);
    const jwt = require("jsonwebtoken");
    const token = jwt.sign(
      {
        // Assigning data value
        data: userInfo,
      },
      SERVER_SECRET,
      {
        expiresIn: "60m",
      }
    );
    res.json({ ACCESS_TOKEN: token });
  }
};
