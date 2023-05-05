import { Router } from "express";
import { 
    getPendingGatepass,gatepassApproveOrReject, gatepassCancelAndReject,rejectGatepass, getApprovedGatepass, approveGatepass, getDashboardOthers, getAutoApprovedBatches, getDashboardMy } from "../controllers/warden.controller"



const router = Router();

router.get("/warden/gatepass_approve_or_reject/:id/:flag", gatepassApproveOrReject);
router.put("/warden/approve_gatepass", approveGatepass);
router.put('/warden/reject_Gatepass', rejectGatepass) // requires gatepass req_id and comments from the client
router.get('/warden/cancelled_and_rejected_gatepass', gatepassCancelAndReject);
router.get("/warden/get_approved_gatepass", getApprovedGatepass);
router.get("/warden/get_dashboard_my", getDashboardMy);
router.get("/warden/get_dashboard_others", getDashboardOthers);
router.get("/warden/auto_approved_batches",getAutoApprovedBatches);

export default router;
