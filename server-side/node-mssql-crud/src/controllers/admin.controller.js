import { getConnection, sql,queries } from '../database';



/* __________________________________________________DASHBOARD API__________________________________________________ */



export const getPendingRequest = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.dashboardPendingRequest);
    res.json(result.recordset[0]['TOTAL']);
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
    res.json(result.recordset[0]['TOTAL']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getStudentOutCampus = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.dashboardStudentOutCampus);
    res.json(result.recordset[0]['TOTAL']);
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
    res.json(result.recordset[0]['TOTAL']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getProfileRequest = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.dashboardProfileRequest);
    res.json(result.recordset[0]['TOTAL']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTodayGatepass = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.dashboardTodayGatepass);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTotalPendingRequest = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.dashboardTotalPendingRequest);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

