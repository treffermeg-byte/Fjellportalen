import { useEffect, useState } from "react";

export default function useSunTimes(lat, lon) {
  const [sunTimes, setSunTimes] = useState({
    sunrise: "--:--",
    sunset: "--:--",
  });

  useEffect(() => {
    async function fetchSunTimes() {
      try {
        const response = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`
        );

        if (!response.ok) {
          throw new Error(
            "Kunne ikke hente soloppgang og solnedgang"
          );
        }

        const data = await response.json();

        const sunrise = new Intl.DateTimeFormat("no-NO", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Oslo",
        }).format(new Date(data.results.sunrise));

        const sunset = new Intl.DateTimeFormat("no-NO", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Oslo",
        }).format(new Date(data.results.sunset));

        setSunTimes({
          sunrise,
          sunset,
        });
      } catch (error) {
        console.error(
          "Feil ved henting av soldata:",
          error
        );

        setSunTimes({
          sunrise: "--:--",
          sunset: "--:--",
        });
      }
    }

    fetchSunTimes();

    const interval = setInterval(
      fetchSunTimes,
      24 * 60 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, [lat, lon]);

  return sunTimes;
}