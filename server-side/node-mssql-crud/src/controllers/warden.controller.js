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