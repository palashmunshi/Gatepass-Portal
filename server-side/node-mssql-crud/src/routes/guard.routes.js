import { Router } from "express";
import {
  getAllApproved,
  getAllCheckedOut,
  getApprovedToday,
  getBlacklistedStudent,
  getStudentInCampus,
  getStudentsReturning,
  studentCheckin,
  studentCheckout,
} from "../controllers/guard.controller";

const router = Router();

/* __________________________________________________CHECK OUT ROUTES__________________________________________________ */

router.get("/guard/approved_students", getAllApproved);
router.put("/guard/checkout_student", studentCheckout); //DO NOT USE THIS ROUTE RIGHT NOW

/* __________________________________________________CHECK IN ROUTES__________________________________________________ */
router.get("/guard/checked_out_students", getAllCheckedOut);
router.put("/guard/checkin_student", studentCheckin); //DO NOT USE THIS ROUTE RIGHT NOW

/* __________________________________________________DASHBOARD ROUTES__________________________________________________ */
router.get("/guard/approved_today",getApprovedToday);
router.get("/guard/returning_today",getStudentsReturning);
router.get("/guard/students_in_campus",getStudentInCampus);
router.get("/guard/blacklist_students",getBlacklistedStudent)

export default router;
