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
export const cancelApprovedGatepass= async (req,res)=>{
    try {
        const d = new Date();
        let applied_date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
        const id = req.user.data.user_id;
        const {req_id,comments}= req.body;
        console.log(req_id);
        console.log(comments);
        const pool = await getConnection();
        const result = await pool
          .request()
          .input("user_id", sql.VarChar, id)
          .input("req_id",sql.Int,req_id)
          .input("comments",sql.VarChar,comments)
          .input("date",sql.VarChar,applied_date)
          .input("time",sql.Time,d)
          .query(queries.cancelApprovedGatepass);
        return res.send("Gatepass Cancelled!");
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
    };
