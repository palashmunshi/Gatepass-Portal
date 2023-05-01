import { Router } from "express";
import { gatepassApproveOrReject, } from "../controllers/warden.controller"
import { getApprovedGatepass } from "../controllers/warden.controller"

const router = Router();

router.get('/warden/gatepass_approve_or_reject/:id/:flag', gatepassApproveOrReject);
router.get('/warden/getApprovedGatepass/:user_id', getApprovedGatepass);


export default router;