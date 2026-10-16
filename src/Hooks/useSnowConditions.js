import { useEffect, useState } from "react";

export default function useSnowConditions() {
  const [snow, setSnow] = useState({
    snowSlope: 56,
    snowTerrain: 56,
    liftsOpen: 0,
    liftsTotal: 7,
    slopesOpen: 0,
    slopesTotal: 23,
    lastUpdated: "",
  });

  useEffect(() => {
    setSnow((prev) => ({
      ...prev,
      lastUpdated: new Date().toLocaleTimeString(
        "nb-NO",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      ),
    }));
  }, []);

  return snow;
}
