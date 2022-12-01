import { DateTime } from "mssql";
import { getConnection, sql, queries } from "../database";
const date = require("date-and-time");

export const applyLocalFixedGatepass = async (req, res) => {
  const {
    user_id,
    from_date,
    from_time,
    to_date,
    to_time,
    purpose,
    destination,
    destination_contact,
    visit_to,
    send_approval_to,
  } = req.body;

  const d = new Date();
  let applied_date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
  let applied_time = d;

  // validating
  if (
    user_id == null ||
    from_date == null ||
    from_time == null ||
    to_date == null ||
    to_time == null ||
    purpose == null ||
    destination == null ||
    destination_contact == null ||
    visit_to == null ||
    send_approval_to == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user_id", sql.VarChar, user_id)
      .input("from_date", sql.Date, from_date)
      .input("from_time", sql.Time, from_time)
      .input("to_date", sql.Date, to_date)
      .input("to_time", sql.Time, to_time)
      .input("purpose", sql.VarChar, purpose)
      .input("destination", sql.VarChar, destination)
      .input("destination_contact", sql.VarChar, destination_contact)
      .input("visit_to", sql.VarChar, visit_to)
      .input("send_approval_to", sql.VarChar, send_approval_to)
      .input("applied_date", sql.Date, applied_date)
      .input("applied_time", sql.Time, applied_time)
      .query(queries.applyLocalFlexibleGatepass);

    return res.send("Local Fixed Gatepass Requested!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const applyLocalFlexibleGatepass = async (req, res) => {
  const {
    user_id,
    from_date,
    from_time,
    to_date,
    to_time,
    purpose,
    destination,
    destination_contact,
    visit_to,
    send_approval_to,
  } = req.body;

  const d = new Date();
  let applied_date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
  let applied_time = d;

  // validating
  if (
    user_id == null ||
    from_date == null ||
    from_time == null ||
    to_date == null ||
    to_time == null ||
    purpose == null ||
    destination == null ||
    destination_contact == null ||
    visit_to == null ||
    send_approval_to == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user_id", sql.VarChar, user_id)
      .input("from_date", sql.Date, from_date)
      .input("from_time", sql.Time, from_time)
      .input("to_date", sql.Date, to_date)
      .input("to_time", sql.Time, to_time)
      .input("purpose", sql.VarChar, purpose)
      .input("destination", sql.VarChar, destination)
      .input("destination_contact", sql.VarChar, destination_contact)
      .input("visit_to", sql.VarChar, visit_to)
      .input("send_approval_to", sql.VarChar, send_approval_to)
      .input("applied_date", sql.Date, applied_date)
      .input("applied_time", sql.Time, applied_time)
      .query(queries.applyLocalFlexibleGatepass);

    return res.status(200).json({msg: "Local Flexible Gatepass Requested!"});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const gatepassCancel = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.cancelGatepass);
    return res.send("Gatepass Cancelled!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const gatepassExpire = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.expireGatepass);
    return res.send("Gatepass Expired!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getRecentGatepass = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.VarChar, id)
      .query(queries.recentGatepass);
    return res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getDashboardDetails = async (req, res) => {
  try {
    const { email } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query(queries.getDashboardDetails);
    return res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
