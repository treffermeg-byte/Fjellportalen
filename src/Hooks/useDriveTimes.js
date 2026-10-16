import { useEffect, useState } from "react";

const LOCATIONS = {
  asker: [10.435, 59.835],
  oslo: [10.752, 59.913],
  tonsberg: [10.407, 59.267],

  beitostolen: [8.906, 61.249],

  bodal: [6.754, 61.846],
};

async function getTravelTime(start, end) {
  try {
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=false`
    );

    const data = await response.json();

    if (!data.routes || data.routes.length === 0) {
      return "Ukjent";
    }

    const seconds = data.routes[0].duration;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.round(
      (seconds % 3600) / 60
    );

    return `${hours} t ${minutes} min`;
  } catch (error) {
    console.error(
      "Feil ved henting av kjøretid:",
      error
    );

    return "Feil";
  }
}

export default function useDriveTimes() {
  const [lastUpdated, setLastUpdated] =
    useState("");

  const [times, setTimes] = useState({
    askerBeito: "Laster...",
    osloBeito: "Laster...",
    tonsbergBeito: "Laster...",

    askerBodal: "Laster...",
    osloBodal: "Laster...",
    tonsbergBodal: "Laster...",
  });

  useEffect(() => {
    async function loadTimes() {
      const results = {
        askerBeito: await getTravelTime(
          LOCATIONS.asker,
          LOCATIONS.beitostolen
        ),

        osloBeito: await getTravelTime(
          LOCATIONS.oslo,
          LOCATIONS.beitostolen
        ),

        tonsbergBeito: await getTravelTime(
          LOCATIONS.tonsberg,
          LOCATIONS.beitostolen
        ),

        askerBodal: await getTravelTime(
          LOCATIONS.asker,
          LOCATIONS.bodal
        ),

        osloBodal: await getTravelTime(
          LOCATIONS.oslo,
          LOCATIONS.bodal
        ),

        tonsbergBodal: await getTravelTime(
          LOCATIONS.tonsberg,
          LOCATIONS.bodal
        ),
      };

      setTimes(results);

      setLastUpdated(
        new Date().toLocaleTimeString(
          "nb-NO",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )
      );
    }

    loadTimes();

    const interval = setInterval(
      loadTimes,
      15 * 60 * 1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    times,
    lastUpdated,
  };
}
