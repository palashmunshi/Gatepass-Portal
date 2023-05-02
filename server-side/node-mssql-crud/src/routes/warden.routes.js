import { Router } from "express";
import { 
    approveGatepass,
    gatepassApproveOrReject, } from "../controllers/warden.controller"

const router = Router();

router.get('/warden/gatepass_approve_or_reject/:id/:flag', gatepassApproveOrReject);
router.put('/warden/approve_gatepass', approveGatepass)


export default router;