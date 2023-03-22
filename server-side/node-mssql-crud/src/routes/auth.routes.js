import { Router } from "express";
import { getUserInformation } from "../controllers/auth.controller";

const router = Router();

router.get("/auth/user_information/:email_id", getUserInformation);

export default router;
