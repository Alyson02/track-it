import { createContext, useEffect, useState } from "react";
import { Api } from "services/api";

export const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const [completedHabito, setCompletedHabito] = useState(null);
  const [sizeHabitos, setSizeHabitos] = useState(null);
  const [habitos, setHabitos] = useState(null);

  useEffect(() => {
    Api.get("/habits/today").then((r) => {
      const completed = r.data.filter((x) => x.done === true);
      setCompletedHabito(completed.length);
      setSizeHabitos(r.data.length);
    });
  }, [habitos]);

  return (
    <TrackContext.Provider
      value={{
        completedHabito,
        sizeHabitos,
        setCompletedHabito,
        habitos,
        setHabitos,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};
