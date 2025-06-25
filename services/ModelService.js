import { Meetings } from "../models/MeetingsModel.js";
/**
 * get user service
 * @returns get all user from database
 */
const findUsers = () => {
  return Meetings.find();
};
const findUserByProperty = (key, value) => {
  if (key === "_id") {
    // find single data by id
    return Meetings.findById(value);
  }
  // find single data by property
  return Meetings.findOne({ [key]: value });
};
export { findUsers, findUserByProperty };
