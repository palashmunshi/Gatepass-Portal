import { getConnection, sql,queries } from '../database';
const date = require('date-and-time');
const xl = require('excel4node');



export const getAllApproved = async (req,res) => {
    try{
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getApprovedStudents);
        return res.json(result.recordset);
    }
    catch (error){
        res.status(500);
        res.send(error.message)
    }
}


export const getAllCheckedOut = async (req,res) => {
    try{
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(queries.getCheckedOutStudents);
        return res.json(result.recordset);
    }
    catch(error){
        res.status(500);
        res.send(error.message)
    }
}