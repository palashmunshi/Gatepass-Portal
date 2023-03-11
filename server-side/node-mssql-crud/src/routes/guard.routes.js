import { Router } from "express";
import {
    getAllApproved,
} from "../controllers/guard.controller";

const router = Router();

/* __________________________________________________CHECK OUT ROUTES__________________________________________________ */

router.get('/guard/approved_students',getAllApproved);


export default router;