import { getConnection, sql, queries } from "../database";
const date = require("date-and-time");

export const gatepassApproveOrReject = async (req, res) => {
  try {
    const { id, flag } = req.params;
    const pool = await getConnection();
    if (flag == 0) {
      const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query(queries.acceptGatepass);
      return res.send("Gatepass Approved!");
    } else if (flag == 1) {
      const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query(queries.rejectGatepass);
      return res.send("Gatepass Rejected!");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const approveGatepass = async (req, res) => {
  let approved_or_rejected_date =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();
  let approved_or_rejected_time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  const approved_or_rejected_by = req.user.data.user_id;
  const { request_id, comments } = req.body;
  try {
    const pool = getConnection();
    const result = await pool
      .request()
      .input("approved_or_rejected_by", sql.VarChar, approved_or_rejected_by)
      .input(
        "approved_or_rejected_date",
        sql.VarChar,
        approved_or_rejected_date
      )
      .input(
        "approved_or_rejected_time",
        sql.VarChar,
        approved_or_rejected_time
      )
      .input("comments", sql.VarChar, comments)
      .query(queries.approveGatepass);
    return res.send("Gatepass Approved!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
