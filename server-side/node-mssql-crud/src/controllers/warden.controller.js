import { getConnection, sql,queries } from '../database';
const date = require('date-and-time');

export const gatepassApproveOrReject = async (req, res) => {
    try {
        const { id,flag } = req.params;
        const pool = await getConnection();
        if (flag==0) {
            const result = await pool
            .request()
            .input("id",sql.Int, id)
            .query(queries.acceptGatepass);
            return res.send('Gatepass Approved!');
        } else if (flag==1) {
            const result = await pool
            .request()
            .input("id",sql.Int, id)
            .query(queries.rejectGatepass);
            return res.send('Gatepass Rejected!');
        }
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
}


export const gatepassCancelAndReject = async(req,res) => {
    const approval_to = req.user.data.user_id
    try{
        const pool= await getConnection();
        const result = await pool
        .request()
        .input("approval_to",sql.VarChar,approval_to)
        .query(queries.getRejectedAndCancelledGatepass)

    return res.json(result.recordset)
    }
    catch(error){
        res.send(error.message)
    }
}