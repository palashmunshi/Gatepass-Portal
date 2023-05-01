import { Router } from "express";
import { gatepassApproveOrReject, cancelApprovedGatepass } from "../controllers/warden.controller"

const router = Router();

router.get('/warden/gatepass_approve_or_reject/:id/:flag', gatepassApproveOrReject);
router.put('/warden/cancelApprovedGatepass', cancelApprovedGatepass) // requires gatepass req_id and comments from the client


export default router;