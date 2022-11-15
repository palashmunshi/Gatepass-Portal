import { Router } from "express";
import {
    getPendingRequest,
    getStudentInCampus,
    getStudentOutCampus,
    getBlacklistedStudent,
    getProfileRequest,
    getTodayGatepass,
    getTotalPendingRequest,
} from "../controllers/admin.controller"

const router = Router();
router.get('/admin/pending_request', getPendingRequest);
router.get('/admin/student_in_campus', getStudentInCampus);
router.get('/admin/student_out_campus', getStudentOutCampus);
router.get('/admin/blacklist_student', getBlacklistedStudent);
router.get('/admin/profile_request', getProfileRequest);
router.get('/admin/today_gatepass', getTodayGatepass);
router.get('/admin/total_pending_request', getTotalPendingRequest);

export default router;