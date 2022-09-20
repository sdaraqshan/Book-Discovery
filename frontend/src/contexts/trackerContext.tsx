import { createContext, useContext } from "react";

export type TrackerContent = {
  tracker: number;
  setTracker: (c: number) => void;
};

export const TrackerContext = createContext<TrackerContent>({
  tracker: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTracker: () => {},
});

export const useTrackerContext = () => useContext(TrackerContext);
