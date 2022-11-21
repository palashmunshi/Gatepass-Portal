import { Router } from "express";
import {
    getPendingRequest,
    getStudentInCampus,
    getStudentOutCampus,
    getBlacklistedStudent,
    getProfileRequest,
    getTodayGatepass,
    getAllPendingRequest,

    getGroup,
    getSubgroup,
    createGroup,
    createSubgroup,
    getAllRole,
    getUserRole,
    getAllStatus,
    getParameterConfig,

    createUser,
    updateUserById,

    getStudentTenureWise,
    getStudentStatusWise,
    getStudentStatusTenureWise,
    getGatepassTypeWise,
    getBlacklistedStudentDateWise,
    getBlacklistedGroupDateWise,
    getDefaulterDateWise,
    getEOD,
    getWarden,

} from "../controllers/admin.controller"

const router = Router();

/* __________________________________________________DASHBOARD ROUTES__________________________________________________ */

router.get('/admin/pending_request', getPendingRequest);
router.get('/admin/student_in_campus', getStudentInCampus);
router.get('/admin/student_out_campus', getStudentOutCampus);
router.get('/admin/blacklist_student', getBlacklistedStudent);
router.get('/admin/profile_request', getProfileRequest);
router.get('/admin/today_gatepass', getTodayGatepass);
router.get('/admin/all_pending_request', getAllPendingRequest);





/* __________________________________________________SETTINGS ROUTES__________________________________________________ */




router.get('/admin/group', getGroup);
router.post('/admin/create_group', createGroup);
router.get('/admin/subgroup', getSubgroup);
router.post('/admin/create_subgroup', createSubgroup);
router.get('/admin/all_role', getAllRole);
router.get('/admin/user_role', getUserRole);
router.get('/admin/all_status', getAllStatus);
router.get('/admin/parameter_config', getParameterConfig);



router.post('/admin/create_user', createUser);
router.put('/admin/update_user/:id', updateUserById);



router.get('/admin/tenure_wise_student_report/:id/:sd/:ed', getStudentTenureWise);
router.get('/admin/status_wise_student_report/:statuslist/:sd/:ed', getStudentStatusWise);
router.get('/admin/status_wise_student_report/:statuslist/:id/:sd/:ed', getStudentStatusTenureWise);
router.get('/admin/gatepass_type_report/:gpt/:sd/:ed', getGatepassTypeWise);
router.get('/admin/blacklisted_student_date_wise_report/:sd/:ed',getBlacklistedStudentDateWise);
router.get('/admin/blacklisted_group_date_wise_report/:sd/:ed',getBlacklistedGroupDateWise);
router.get('/admin/defaulter_date_wise_report/:sd/:ed',getDefaulterDateWise);
router.get('/admin/eod_report/:date',getEOD);
router.get('/admin/warden_report/:id/:sd/:ed', getWarden);


export default router;