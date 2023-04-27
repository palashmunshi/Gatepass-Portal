import { getConnection, sql, queries } from "../database";
import jwt_decode from "jwt-decode";
import jwt_encode from "jwt-encode";

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
  const { googleJWT } = req.body
  const userObject = jwt_decode(googleJWT);
  const email_id = userObject.email
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("email_id", sql.VarChar, email_id)
    .query(queries.getUserInformation);
  const rowAffected = result.rowsAffected[0];
  if (rowAffected === 0) {
    res.status(403).json({ err: "NOT ALLOWED" })
  }
  else {
    const userInfo = result.recordset[0];
    const sign = require('jwt-encode')
    const secret = 'secret';
    const jwt = sign(userInfo, secret);
    // return res.send(jwt)
    return res
      .cookie("access_token", jwt, { secure: false, maxAge: 120000, httpOnly: true })
      .status(200)
      .json({ message: "Logged in successfully" });

  }


}