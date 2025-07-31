import { Schema, model } from "mongoose";

const meetingSchema = new Schema(
  {
    meetingTopic: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    profileName: {
      type: String,
      required: true,
    },
    clientMeetingTime: {
      type: String,
      required: true,
    },
    myTime: {
      type: String,
      required: true,
    },
    quotation: {
      type: String,
    },
    notes: {
      type: String,
    },
    yourName: {
      type: String,
      required: true,
    },
    isPending: {
      type: Boolean,
      required: true,
    },
    clientTimezone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Meetings = model("Meetings", meetingSchema);
