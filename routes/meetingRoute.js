import { Router } from "express";
import {
  createMeetingController,
  deleteMeetingById,
  getMeetings,
  patchMeetingById,
} from "../controller/meetingController.js";

const router = Router();

/**
 * Update meeting by id
 * @method PATCH
 * @route /api/v1/meetings/:meetingId
 */
router.patch("/:meetingId", patchMeetingById);

/**
 * Delete meeting by id
 * @method DELETE
 * @route /api/v1/meetings/:meetingId
 */
router.delete("/:meetingId", deleteMeetingById);

/**
 * @route /api/v1/meetings
 * @method GET
 */

router.get("/", getMeetings);

/**
 * Create clock
 * @method POST
 * @route /api/v1/meetings/meeting-create
 */
router.post("/meeting-create", createMeetingController);

export default router;
