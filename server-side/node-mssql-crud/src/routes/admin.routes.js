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
    getAllRole,
    getUserRole,
    getAllStatus,
    getParameterConfig,


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
router.get('/admin/subgroup', getSubgroup);
router.get('/admin/all_role', getAllRole);
router.get('/admin/user_role', getUserRole);
router.get('/admin/all_status', getAllStatus);
router.get('/admin/parameter_config', getParameterConfig);



export default router;