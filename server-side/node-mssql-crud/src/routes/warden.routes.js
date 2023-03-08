import { Router } from "express";
import { 
    gatepassApproveOrReject, } from "../controllers/warden.controller"

const router = Router();

router.get('/warden/gatepass_approve_or_reject/:id/:flag', gatepassApproveOrReject);


export default router;