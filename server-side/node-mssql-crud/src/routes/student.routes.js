import { Router } from "express";
import { 
    applyLocalFixedGatepass,
    applyLocalFlexibleGatepass, 
    gatepassCancel,
    gatepassExpire,

    getRecentGatepass,
    getDashboardDetails,
} from "../controllers/student.controller"

const router = Router();

router.get('/student/recent_gatepass/:id', getRecentGatepass);
router.get('/student/dashboard_details/:email', getDashboardDetails);

router.post('/student/local_fixed_gatepass', applyLocalFixedGatepass);
router.post('/student/local_flexible_gatepass', applyLocalFlexibleGatepass);
router.get('/student/gatepass_cancel/:id', gatepassCancel);
router.get('/student/gatepass_expire/:id', gatepassExpire);

export default router;