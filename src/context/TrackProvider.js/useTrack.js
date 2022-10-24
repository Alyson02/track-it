import { useContext } from "react";
import { TrackContext } from ".";

export const useTrack = () => {
  const context = useContext(TrackContext);
  return context;
};
