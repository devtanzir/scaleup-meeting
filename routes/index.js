import { Router } from "express";
import meetingRoute from "./meetingRoute.js";

export const router = Router();

router.use("/api/v1/meetings", meetingRoute);

export default router;
