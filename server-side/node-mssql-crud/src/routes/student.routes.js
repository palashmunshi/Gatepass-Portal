import { Router } from "express";
import {
  applyLocalFixedGatepass,
  applyLocalFlexibleGatepass,
  gatepassCancel,
  gatepassExpire,
  getRecentGatepass,
  getDashboardDetails,
  getBlacklistStudentBool,
  testQuery,
  getNumberOfLocalFixed,
  getNumberOfLocalFixedConfig,
  getLocalFixedOutTime,
  getLocalFixedInTime,
  getNumberOfLocalFixedStudent,
} from "../controllers/student.controller";

const router = Router();

router.get("/student/recent_gatepass/:id", getRecentGatepass);
router.get("/student/dashboard_details/:email", getDashboardDetails);

// router.post("/student/local_fixed_gatepass", applyLocalFixedGatepass);
router.post("/student/local_flexible_gatepass", applyLocalFlexibleGatepass);
router.get("/student/gatepass_cancel/:id", gatepassCancel);
router.get("/student/gatepass_expire/:id", gatepassExpire);
router.get("/student/blacklisted/:id", getBlacklistStudentBool);

router.get("/student/get_number_of_local_fixed_config/",getNumberOfLocalFixedConfig);
router.get("/student/get_local_fixed_outtime/", getLocalFixedOutTime);
router.get("/student/get_local_fixed_intime/", getLocalFixedInTime);
router.get("/student/get_number_of_local_fixed_student/:user_id/:dateLowerBound/:dateUpperBound",getNumberOfLocalFixedStudent);

router.post("/student/apply_local_fixed/", applyLocalFixedGatepass);

export default router;
