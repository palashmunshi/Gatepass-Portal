import { getConnection, sql, queries } from "../database";
const date = require("date-and-time");
const xl = require("excel4node");

export const getAllApproved = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getApprovedStudents);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getAllCheckedOut = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getCheckedOutStudents);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


// DO NOT USE THE BELOW 2 FUNCTIONS.... THEY ARE NOT WORKING RIGHT NOW
export const studentCheckin = async (req, res) => {
  const { check_in_by, user_id } = req.body;
  const currentDate = new Date();
  let actual_in_date = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate();
  let actual_in_time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  if (check_in_by == null) {
    return res.status(400).json({ msg: "Bad Request" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user_id", sql.VarChar, user_id)
      .input("check_in_by", sql.VarChar, check_in_by)
      .input("actual_in_date", sql.VarChar, actual_in_date)
      .input("actual_in_time", sql.VarChar, actual_in_time)
      .query(queries.studentCheckin);

    return res.send("Student in now Checkedin");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const studentCheckout = async (req, res) => {
  const { check_out_by, user_id } = req.body;
  const currentDate = new Date();
  let actual_out_date = currentDate.getFullYear() + "-" +currentDate.getMonth() + "-" + currentDate.getDate() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  let actual_out_time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  if (check_out_by == null) {
    return res.status(400).json({ msg: "Bad Request" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user_id", sql.VarChar, user_id)
      .input("check_out_by", sql.VarChar, check_out_by)
      .input("actual_out_date", sql.VarChar, actual_out_date)
      .input("actual_out_time", sql.VarChar, actual_out_time)
      .query(queries.studentCheckout);

    return res.send("Student is now Checkedout");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// YOU CAN START WRITING CODE FROM HERE
//

/* __________________________________________________DASHBOARD API__________________________________________________ */
export const getApprovedToday = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.dashboardApprovedToday);
    return res.json(result.recordset[0]['TOTAL']);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getStudentsReturning = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.dashboardStudentsReturning);
    return res.json(result.recordset[0]['TOTAL']);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getStudentInCampus = async (req, res) => {
  try {
  const pool = await getConnection();
  const result = await pool
      .request()
      .query(queries.dashboardStudentInCampus);
  return res.json(result.recordset[0]['TOTAL']);
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};

export const getBlacklistedStudent = async (req, res) => {
  try {
  const pool = await getConnection();
  const result = await pool
      .request()
      .query(queries.dashboardBlacklistStudent);
  return res.json(result.recordset[0]['TOTAL']);
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};