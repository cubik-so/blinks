import { EventStatusType } from "@/app/project";

import dayjs from "./dayjs";

export enum GRANT_ROUND_STATUS {
  NOT_STARTED = "not_started",
  LIVE = "live",
  ENDED = "ended",
}
type EventStatusTable = {
  id: string;
  isArchive: boolean;
  status: EventStatusType;
  startTime: Date;
  endTime: Date;
  eventId: string;
};

export enum EVENT_STATUS {
  BEFORE_REGISTRATION = "BEFORE_REGISTRATION",
  REGISTRATION = "REGISTRATION",
  REGISTRATION_ENDED = "REGISTRATION_ENDED",
  VOTING = "VOTING",
  ENDED = "ENDED",
}

export const calculateEventStatus: any = (
  event: Partial<EventStatusTable>[]
) => {
  const registrationTimings = event.find((e) => e.status === "REGISTRATION");
  const votingTimings = event.find((e) => e.status === "VOTING");
  const currentTime = dayjs.utc().unix();

  if (currentTime < dayjs.utc(registrationTimings?.startTime).unix()) {
    return "BEFORE_REGISTRATION";
  }

  // if (
  //   currentTime < dayjs.utc(registrationTimings?.endTime).unix() &&
  //   currentTime > dayjs.utc(registrationTimings?.startTime).unix()
  // ) {
  //   return 'REGISTRATION';
  // }

  // if (
  //   currentTime > dayjs.utc(registrationTimings?.endTime).unix() &&
  //   currentTime < dayjs.utc(votingTimings?.startTime).unix()
  // ) {
  //   return 'REGISTRATION_ENDED'; // @todo this status should not be shown as registration will never end
  // }
  if (
    currentTime > dayjs.utc(votingTimings?.startTime).unix() &&
    currentTime < dayjs.utc(votingTimings?.endTime).unix()
  ) {
    return "VOTING";
  }

  if (currentTime > dayjs.utc(votingTimings?.endTime).unix()) {
    return "ENDED";
  }

  return "REGISTRATION";
};

export const wasPastEvent = (event: Partial<EventStatusTable>[]): boolean => {
  const votingTimings = event.find((e) => e.status === "VOTING");
  const currentTime = dayjs.utc().unix();

  if (currentTime > dayjs.utc(votingTimings?.endTime).unix()) {
    return true;
  }

  return false;
};
