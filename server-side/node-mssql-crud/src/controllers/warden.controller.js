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
export const rejectGatepass= async (req,res)=>{
    try {
        const currentDate = new Date();
        let applied_date =   currentDate.getFullYear() +"-" +String(currentDate.getMonth() + 1).padStart(2, "0") +"-" +String(currentDate.getDate() + 1).padStart(2, "0")
        const id = req.user.data.user_id;
        const {request_id,comments}= req.body;
        console.log(request_id);
        console.log(comments);
        const pool = await getConnection();
        const result = await pool
          .request()
          .input("user_id", sql.VarChar, id)
          .input("request_id",sql.Int,request_id)
          .input("comments",sql.VarChar,comments)
          .input("date",sql.VarChar,applied_date)
          .input("time",sql.Time,currentDate)
          .query(queries.cancelApprovedGatepass);
        return res.send("Gatepass rejected!");
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
    };


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

export const getApprovedGatepass = async (req, res) => {
    try {
      const user_id = req.user.data.user_id;
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("user_id", sql.VarChar, user_id)
        .query(queries.getApprovedGatepass);
      return res.send(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
