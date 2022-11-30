import { Router } from "express";
import { applyLocalFixedGatepass } from "../controllers/student.controller"

const router = Router();

router.post('/student/fixed_gatepass', applyLocalFixedGatepass);

export default router;