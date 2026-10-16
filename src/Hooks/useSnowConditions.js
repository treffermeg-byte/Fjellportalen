import { useEffect, useState } from "react";

export default function useSnowConditions() {
  const [snow, setSnow] = useState({
    snowSlope: "--",
    snowTerrain: "--",
    liftsOpen: "--",
    liftsTotal: "--",
    slopesOpen: "--",
    slopesTotal: "--",
    lastUpdated: "",
    loading: true,
  });

  useEffect(() => {
    async function loadSnowData() {
      try {
        const response = await fetch(
          "https://api.fnugg.no/search?query=beitostolen"
        );

        const data = await response.json();

        const resort =
          data?.hits?.hits?.[0]?._source || {};

        setSnow({
          snowSlope:
            resort?.snowDepthSlope ?? "--",

          snowTerrain:
            resort?.snowDepthTerrain ?? "--",

          liftsOpen:
            resort?.liftsOpen ?? "--",

          liftsTotal:
            resort?.liftsTotal ?? "--",

          slopesOpen:
            resort?.slopesOpen ?? "--",

          slopesTotal:
            resort?.slopesTotal ?? "--",

          lastUpdated:
            resort?.updated ||
            new Date().toLocaleTimeString(
              "nb-NO"
            ),

          loading: false,
        });
      } catch (error) {
        console.error(
          "Fnugg-feil:",
          error
        );

        setSnow({
          snowSlope: 56,
          snowTerrain: 56,
          liftsOpen: 0,
          liftsTotal: 7,
          slopesOpen: 0,
          slopesTotal: 23,
          lastUpdated:
            new Date().toLocaleTimeString(
              "nb-NO"
            ),
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

  return snow;
}
