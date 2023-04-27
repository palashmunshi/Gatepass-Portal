import { Router } from "express";
import { JWTgeneration, getUserInformation } from "../controllers/auth.controller";

const router = Router();

router.get("/auth/user_information/:email_id", getUserInformation);
router.post("/auth/google_JWT", JWTgeneration)
export default router;
