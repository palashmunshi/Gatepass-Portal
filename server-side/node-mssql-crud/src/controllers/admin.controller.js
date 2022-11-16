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

export const getAllPendingRequest = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.dashboardAllPendingRequest);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



/* __________________________________________________SETTINGS API__________________________________________________ */


/* ##################Groups/Subgroup API##################  */
export const getGroup = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.settingsGroup);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getSubgroup = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.settingsSubgroup);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


/* ##################Chnage Role API##################  */
export const getAllRole = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.settingsAllRole);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getUserRole = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.settingsUserRole);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getAllStatus = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.settingsAllStatus);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};





/* ##################Parameter Config API##################  */



export const getParameterConfig = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.settingsParameterConfig);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

