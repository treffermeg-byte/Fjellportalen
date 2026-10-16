import { useEffect, useState } from "react";

export default function useDriveTimes() {
  const [times, setTimes] = useState({
    askerBeito: "Laster...",
    osloBeito: "Laster...",
    tonsbergBeito: "Laster...",
    askerBodal: "Laster...",
    osloBodal: "Laster...",
    tonsbergBodal: "Laster...",
  });

  const [lastUpdated, setLastUpdated] =
    useState("");

  useEffect(() => {
    setLastUpdated(
      new Date().toLocaleTimeString("nb-NO")
    );

    setTimes({
      askerBeito: "3 t 39 min",
      osloBeito: "3 t 47 min",
      tonsbergBeito: "4 t 36 min",
      askerBodal: "7 t 41 min",
      osloBodal: "7 t 18 min",
      tonsbergBodal: "8 t 38 min",
    });
  }, []);

  return {
    times,
    lastUpdated,
  };
}
