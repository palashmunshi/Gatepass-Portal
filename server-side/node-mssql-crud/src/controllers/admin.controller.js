import { getConnection, sql,queries } from '../database';
const date = require('date-and-time');



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

export const createGroup = async (req, res) => {

    const { 
        gps_groupname,
        gps_group_mastergroup_id,
    } = req.body;
    

    // validating
    if (gps_groupname == null || gps_group_mastergroup_id === null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    };

    try {
    const pool =  await getConnection();
    let count = await pool
        .request()
        .query(queries.getGroupCount);

    const gps_groupid = count.recordset[0]['TOTAL']
    
    const result = await pool
        .request()
        .input("gps_groupid",sql.Int, gps_groupid)
        .input("gps_groupname",sql.VarChar, gps_groupname)
        .input("gps_group_mastergroup_id",sql.Int, gps_group_mastergroup_id)
        .query(queries.addGroup);

    res.json({count,gps_groupname,gps_group_mastergroup_id})

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const createSubgroup = async (req, res) => {

    const { 
        subgroup_name,
        subgroup_mastergroup_id,
    } = req.body;


    // validating
    if (subgroup_name == null || subgroup_mastergroup_id === null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    };

    try {
    const pool =  await getConnection();
    let count = await pool
        .request()
        .query(queries.getSubgroupCount);
    
    const subgroup_id = count.recordset[0]['TOTAL']

    const result = await pool
        .request()
        .input("subgroup_id",sql.Int, subgroup_id)
        .input("subgroup_name",sql.VarChar, subgroup_name)
        .input("subgroup_mastergroup_id",sql.Int, subgroup_mastergroup_id)
        .query(queries.addSubgroup);

    res.json({subgroup_id,subgroup_name,subgroup_mastergroup_id})

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




///////create user
export const createUser = async (req, res) => {

    const { 
        user_id,
        email_id,
        group_id,
        role_id,
        subgroup_id,
        name,
        address,
        p_number,
        status, 
    } = req.body;


    let {
        contact_number,
        room_no,
        punch_id,
        hostel,
        hostel_tower,
    } = req.body;

    const  ad_user_name  = "";
    const  change_flag  = "";
    const  photo  = "";

    // validating
    if (user_id ==null || email_id==null || group_id == null || role_id==null || subgroup_id==null || name == null || address == null || p_number == null || status == null ) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    };
    
    if (punch_id == null) punch_id = 0;

    try {
    const pool =  await getConnection();
    const result = await pool
        .request()
        .input("user_id",sql.VarChar, user_id)
        .input("ad_user_name",sql.VarChar, ad_user_name)
        .input("email_id",sql.VarChar, email_id)
        .input("contact_number",sql.VarChar, contact_number)
        .input("group_id",sql.Int, group_id)
        .input("role_id",sql.Int, role_id)
        .input("subgroup_id",sql.Int, subgroup_id)
        .input("name",sql.VarChar, name)
        .input("room_no",sql.VarChar, room_no)
        .input("address",sql.VarChar, address)
        .input("p_number",sql.VarChar, p_number)
        .input("punch_id",sql.Int, punch_id)
        .input("change_flag",sql.BigInt, change_flag)
        .input("hostel",sql.VarChar, hostel)
        .input("hostel_tower",sql.VarChar, hostel_tower)
        .input("status",sql.VarChar, status)
        .input("photo",sql.VarChar, photo)
        .query(queries.addUser);

    res.json({user_id,ad_user_name,email_id,contact_number,group_id,role_id,subgroup_id,name,room_no,address,p_number,punch_id,change_flag,hostel,hostel_tower,status,photo})

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const updateUserById = async (req, res) => {

    const { user_id } = req.params.id;
    const { 
        ad_user_name,
        email_id,
        group_id,
        role_id,
        subgroup_id,
        name,
        address,
        p_number,
        change_flag,
        status,
        photo,
    } = req.body;

    
    let {
        contact_number,
        room_no,
        punch_id,
        hostel,
        hostel_tower,
    } = req.body;

    // validating
    if (ad_user_name==null || email_id==null || contact_number==null || group_id == null || role_id==null || subgroup_id==null || name == null || room_no == null || address == null || p_number == null || punch_id == null || change_flag == null || hostel == null || hostel_tower == null || status == null || photo == null) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    };

    try {
        const pool = await getConnection();
        await pool
        .request()
        .input("ad_user_name",sql.VarChar, ad_user_name)
        .input("email_id",sql.VarChar, email_id)
        .input("contact_number",sql.VarChar, contact_number)
        .input("group_id",sql.Int, group_id)
        .input("role_id",sql.Int, role_id)
        .input("subgroup_id",sql.Int, subgroup_id)
        .input("name",sql.VarChar, name)
        .input("room_no",sql.VarChar, room_no)
        .input("address",sql.VarChar, address)
        .input("p_number",sql.VarChar, p_number)
        .input("punch_id",sql.Int, punch_id)
        .input("change_flag",sql.BigInt, change_flag)
        .input("hostel",sql.VarChar, hostel)
        .input("hostel_tower",sql.VarChar, hostel_tower)
        .input("status",sql.VarChar, status)
        .input("photo",sql.VarChar, photo)
        .input("user_id",sql.VarChar, user_id)
        .query(queries.updateUserById)
    
        
       

        res.json({user_id,ad_user_name,email_id,contact_number,group_id,role_id,subgroup_id,name,room_no,address,p_number,punch_id,change_flag,hostel,hostel_tower,status,photo})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



/* __________________________________________________SETTINGS API__________________________________________________ */



export const getStudentTenureWise = async (req, res) => {
    try {
        const { id, sd, ed } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('user_id', id)
            .input('date_start', sd)
            .input('date_end', ed)
            .query(queries.reportStudentTenureWise);
    
        return res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getStudentStatusWise = async (req, res) => {
    try {
        const { statuslist, sd, ed } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('statuslist', statuslist)
            .input('date_start', sd)
            .input('date_end', ed)
            .query(queries.reportStundentStatusWise);
    
        return res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getStudentStatusTenureWise = async (req, res) => {
    try {
        const { id, statuslist, sd, ed } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('user_id', id)
            .input('statuslist', statuslist)
            .input('date_start', sd)
            .input('date_end', ed)
            .query(queries.reportStundentStatusTenureWise);
    
        return res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getGatepassTypeWise = async (req, res) => {
    try {
        const { gpt, sd, ed } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('gpt', gpt)
            .input('date_start', sd)
            .input('date_end', ed)
            .query(queries.reportGatepassTypeWise);
    
        return res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getBlacklistedStudentDateWise = async (req, res) => {
    try {
        const { sd, ed } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('date_start', sd)
            .input('date_end', ed)
            .query(queries.reportBlacklistedStudentDateWise);
    
        return res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getBlacklistedGroupDateWise = async (req, res) => {
    try {
        const { sd, ed } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('date_start', sd)
            .input('date_end', ed)
            .query(queries.reportBlacklistedGroupDateWise);
    
        return res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getDefaulterDateWise = async (req, res) => {
    try {
        const { sd, ed } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('date_start', sd)
            .input('date_end', ed)
            .query(queries.reportDefaulterDateWise);
    
        return res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEOD = async (req, res) => {
    try {
        const { date } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('date', date)
            .query(queries.reportEOD);
    
        return res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getWarden = async (req, res) => {
    try {
        const { id, sd, ed } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('user_id', id)
            .input('date_start', sd)
            .input('date_end', ed)
            .query(queries.reportWarden);
    
        return res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};