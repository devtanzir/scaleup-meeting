import { findUserByProperty, findUsers } from "../services/ModelService.js";
import { meetingService, deleteMeeting } from "../services/MeetingService.js";
import error from "../utils/error.js";

/**
 * create meeting controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */

const createMeetingController = async (req, res, next) => {
  // get the data from req body
  const { meetingTopic, clientName, profileName, clientMeetingTime, myTime } =
    req.body;
  try {
    if (
      !meetingTopic ||
      !clientName ||
      !profileName ||
      !clientMeetingTime ||
      !myTime
    ) {
      return res.status(400).json({ message: "invalid data" });
    }
    // meeting service
    const meeting = await meetingService({
      meetingTopic,
      clientName,
      profileName,
      clientMeetingTime,
      myTime,
    });
    return res
      .status(201)
      .json({ message: "Meeting Created Successfully", meeting });
  } catch (e) {
    next(e);
  }
};

/**
 * Update meeting by id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const patchMeetingById = async (req, res, next) => {
  // get meeting id from req params
  const { meetingId } = req.params;

  const { meetingTopic, clientName, profileName, clientMeetingTime, myTime } =
    req.body;

  try {
    // find user service
    const meeting = await findUserByProperty("_id", meetingId);

    if (!meeting) {
      throw error("Meeting not found", 404);
    }

    meeting.meetingTopic = meetingTopic ?? meeting.meetingTopic;

    meeting.clientName = clientName ?? meeting.clientName;

    meeting.profileName = profileName ?? meeting.profileName;

    meeting.clientMeetingTime = clientMeetingTime ?? meeting.clientMeetingTime;

    meeting.myTime = myTime ?? meeting.myTime;

    await meeting.save();

    res.status(200).json(meeting);
  } catch (e) {
    next(e);
  }
};
/**
 * Delete meeting by id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const deleteMeetingById = async (req, res, next) => {
  const { meetingId } = req.params;

  try {
    // delete meeting service
    await deleteMeeting(meetingId);
    return res.status(203).send();
  } catch (e) {
    next(e);
  }
};
/**
 * get all meetings
 * @param {*} _req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const getMeetings = async (_req, res, next) => {
  try {
    const meetings = await findUsers();
    return res.status(200).json(meetings);
  } catch (e) {
    next(e);
  }
};

export {
  createMeetingController,
  patchMeetingById,
  deleteMeetingById,
  getMeetings,
};
