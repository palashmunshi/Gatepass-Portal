import { Router } from "express";
import {
    getAllApproved,
    getAllCheckedOut,
} from "../controllers/guard.controller";

const router = Router();

/* __________________________________________________CHECK OUT ROUTES__________________________________________________ */

router.get('/guard/approved_students',getAllApproved);

/* __________________________________________________CHECK IN ROUTES__________________________________________________ */
router.get('/guard/checked_out_students',getAllCheckedOut);

export default router;