import { useEffect, useState } from "react";

export default function useSunTimes(lat, lon) {
  const [sunTimes, setSunTimes] = useState({
    sunrise: "--:--",
    sunset: "--:--",
  });

  useEffect(() => {
    async function fetchSunTimes() {
      try {
        const today = new Date().toISOString().split("T")[0];

        const response = await fetch(
          `https://api.met.no/weatherapi/sunrise/3.0/sun?lat=${lat}&lon=${lon}&date=${today}`,
          {
            headers: {
              "User-Agent": "Fjellportalen/1.0",
            },
          }
        );

        const data = await response.json();

        const sunrise = new Date(
          data.properties.sunrise.time
        ).toLocaleTimeString("no-NO", {
          hour: "2-digit",
          minute: "2-digit",
        });

        const sunset = new Date(
          data.properties.sunset.time
        ).toLocaleTimeString("no-NO", {
          hour: "2-digit",
          minute: "2-digit",
        });

        setSunTimes({
          sunrise,
          sunset,
        });
      } catch (error) {
        console.error("Feil ved henting av soltider:", error);
      }
    }

    fetchSunTimes();
  }, [lat, lon]);

  return sunTimes;
}