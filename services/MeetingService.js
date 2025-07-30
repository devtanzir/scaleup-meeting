import { Meetings } from "../models/MeetingsModel.js";
import { findUserByProperty } from "./ModelService.js";

/**
 * meetings service
 * @param {*} param0
 * @returns
 */
export const meetingService = ({
  meetingTopic,
  clientName,
  profileName,
  clientMeetingTime,
  myTime,
  quotation,
}) => {
  let meeting = new Meetings({
    meetingTopic,
    clientName,
    profileName,
    clientMeetingTime,
    myTime,
    quotation,
  });
  // save in database
  return meeting.save();
};

/**
 * delete meeting and event service
 * @param {*} meetingId
 * @returns
 */
export const deleteMeeting = async (meetingId) => {
  // find user service
  const meeting = await findUserByProperty("_id", meetingId);
  if (!meeting) {
    throw error("Meeting Not Found", 404);
  }
  // delete one meeting
  await meeting.deleteOne(meeting);
};
