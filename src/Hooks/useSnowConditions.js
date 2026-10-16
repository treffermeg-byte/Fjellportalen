import { useEffect, useState } from "react";

export default function useSnowConditions() {
  const [snowData, setSnowData] = useState({
    snowDepth: "--",
    newSnow: "--",
    lastUpdated: "",
    loading: true,
  });

  useEffect(() => {
    async function loadSnowData() {
      try {
        setSnowData({
          snowDepth: 65,
          newSnow: 5,
          lastUpdated: new Date().toLocaleTimeString(
            "nb-NO",
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          ),
          loading: false,
        });
      } catch (error) {
        console.error(
          "Feil ved henting av snødata:",
          error
        );

        setSnowData({
          snowDepth: "--",
          newSnow: "--",
          lastUpdated: "",
          loading: false,
        });
      }
    }

    loadSnowData();

    const interval = setInterval(
      loadSnowData,
      15 * 60 * 1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return snowData;
}
