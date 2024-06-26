export type EventType = "ROUND" | "HACKATHON";
export type EventStatusType = "REGISTRATION" | "VOTING";

export type SuccessResponse<T> = {
  code: number;
  error: "";
  data: T;
};

export type ProjectFullInfo = {
  id: string;
  name: string;
  logo: string;
  slug: string;
  tags: { label: string; value: string }[];
  projectLink: string;
  shortDescription: string;
  isArchive: boolean;
  email: string;
  slides: string[];
  longDescription: string;
  createKey: string;
  isMigrated: boolean;
  github: string;
  telegram: string;
  discord: string;
  twitter: string;

  createdAt: Date;
  updatedAt: Date;
  creatorKey: string;
  isTipEnabled: boolean;
  status: string;
  projectJoinEvent: {
    amountRaisedUSD: number;
    communityContribution: number;
    uniqueContributors: number;
    id: string;
    event: {
      id: string;
      name: string;
      type: EventType;
      eventKey: string;
      isArchive: boolean;
      eventStatus: {
        id: string;
        isArchive: boolean;
        status: EventStatusType;
        startTime: Date;
        endTime: Date;
        eventId: string;
      };
    };
  }[];
  team: {
    select: {
      id: string;
      designation: string;
      user: {
        select: {
          id: string;
          username: string;
          avatar: string;
          mainWallet: string;
        };
      };
    };
  };
};
