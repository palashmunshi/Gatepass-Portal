import { Router } from "express";
import { 
    gatepassApproveOrReject, gatepassCancelAndReject, getApprovedGatepass } from "../controllers/warden.controller"



const router = Router();

router.get('/warden/gatepass_approve_or_reject/:id/:flag', gatepassApproveOrReject);
router.get('/warden/cancelled_and_rejected_gatepass', gatepassCancelAndReject);
router.get('/warden/getApprovedGatepass', getApprovedGatepass);


export default router;