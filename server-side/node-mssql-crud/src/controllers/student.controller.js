import { DateTime } from "mssql";
import { getConnection, sql, queries } from "../database";
const date = require("date-and-time");


export const gatepassCancel = async (req, res) => {
  try {
    const id = req.user.data.user_id;
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
    const id = req.user.data.user_id;
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
    const id = req.user.data.user_id;
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
    const email = req.user.data.email_id;
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

export const getBlacklistStudentBool = async (req, res) => {
  try {
    const id = req.user.data.user_id;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.VarChar, id)
      .query(queries.getBlackListStudents);
    if (result.rowsAffected[0] === 0) {
      return res.send({ blacklisted: false });
    }
    return res.send({ blacklisted: true });
  } catch (error) {
    res.send(error.message);
  }
};

export const getNumberOfLocalFixedConfig = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries.getNumberOfLocalFixedConfig);
    return res.send(result.recordset[0].value);
  } catch (error) {
    res.send(error.message);
  }
};

export const getLocalFixedOutTime = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getLocalFixedOutTime);
    return res.send(result.recordset[0].value);
  } catch (error) {
    res.send(error.message);
  }
};

export const getLocalFixedInTime = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getLocalFixedInTime);
    return res.send(result.recordset[0].value);
  } catch (error) {
    res.send(error.message);
  }
};

export const getNumberOfLocalFixedStudent = async (req, res) => {
  try {
    const { dateLowerBound, dateUpperBound } = req.params;
    const user_id = req.user.data.user_id;

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user_id", sql.VarChar, user_id)
      .input("dateLowerBound", sql.VarChar, dateLowerBound)
      .input("dateUpperBound", sql.VarChar, dateUpperBound)
      .query(queries.getNumberOfLocalFixedStudent);
    return res.json(result.recordset[0]["total"]);
  } catch (error) {
    res.send(error.message);
  }
};

export const applyLocalFixedGatepass = async (req, res) => {
  const { from_date, from_time, to_date, to_time } = req.body;
  const user_id = req.user.data.user_id;
  const punch_id = req.user.data.punch_id;
  const currentDate = new Date();
  let applied_date =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();
  let applied_time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  if (
    user_id == null ||
    from_date == null ||
    from_time == null ||
    to_date == null ||
    to_time == null
  ) {
    return res.send(400).json({ message: "Bad Request." });
  }
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user_id", sql.VarChar, user_id)
      .input("punch_id", sql.Int, punch_id)
      .input("from_date", sql.VarChar, from_date)
      .input("from_time", sql.VarChar, from_time)
      .input("to_date", sql.VarChar, to_date)
      .input("to_time", sql.VarChar, to_time)
      .input("applied_date", sql.VarChar, applied_date)
      .input("applied_time", sql.VarChar, applied_time)
      .query(queries.applyLocalFixedGatepass);

    return res.json({ Success: "Local fixed Gatepass Applied!" });
  } catch (error) {
    res.send(error.message);
  }
};

export const getStudentCheckedoutOrApproved = async (req, res) => {
  try {
    const user_id = req.user.data.user_id;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user_id", sql.VarChar, user_id)
      .query(queries.studentCheckedoutOrAutoapproved);
    return res.json({ row_affected: result.rowsAffected[0] });
  } catch (error) {
    res.send(error.message);
  }
};

export const applyLocalFlexibleGatepass = async (req, res) => {
  const { from_date, from_time, to_date, to_time, purpose, approval_to} = req.body;
  const user_id = req.user.data.user_id;
  const punch_id = req.user.data.punch_id;
  const currentDate = new Date();

  let applied_date =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();
  let applied_time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  // validating
  if (
    user_id == null ||
    from_date == null ||
    from_time == null ||
    to_date == null ||
    to_time == null ||
    purpose == null ||
    approval_to == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user_id", sql.VarChar, user_id)
      .input("punch_id", sql.Int, punch_id)
      .input("from_date", sql.VarChar, from_date)
      .input("from_time", sql.VarChar, from_time)
      .input("to_date", sql.VarChar, to_date)
      .input("to_time", sql.VarChar, to_time)
      .input("purpose", sql.VarChar, purpose)
      .input("approval_to", sql.VarChar, approval_to)
      .input("applied_date", sql.VarChar, applied_date)
      .input("applied_time", sql.VarChar, applied_time)
      .query(queries.applyLocalFlexibleGatepass);

    return res.status(200).json({ msg: "Local Flexible Gatepass Requested!" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
