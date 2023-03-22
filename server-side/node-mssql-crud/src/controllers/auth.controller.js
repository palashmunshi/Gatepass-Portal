import { getConnection, sql, queries } from "../database";

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
