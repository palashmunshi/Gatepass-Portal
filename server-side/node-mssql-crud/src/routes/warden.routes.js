import { Router } from "express";
import { gatepassApproveOrReject, rejectGatepass } from "../controllers/warden.controller"

const router = Router();

router.get('/warden/gatepass_approve_or_reject/:id/:flag', gatepassApproveOrReject);
router.put('/warden/reject_Gatepass', rejectGatepass) // requires gatepass req_id and comments from the client


export default router;