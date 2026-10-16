import { useEffect, useState } from "react";

export default function useSunTimes(lat, lon) {
  const [sunTimes, setSunTimes] = useState({
    sunrise: "--:--",
    sunset: "--:--",
    dayLength: "--",
    loading: true,
  });

  useEffect(() => {
    let mounted = true;

    async function fetchSunTimes() {
      try {
        const response = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`
        );

        if (!response.ok) {
          throw new Error("Kunne ikke hente soldata");
        }

        const data = await response.json();

        if (!data?.results) {
          throw new Error("Mangler data");
        }

        const sunriseDate = new Date(data.results.sunrise);
        const sunsetDate = new Date(data.results.sunset);

        const sunrise = sunriseDate.toLocaleTimeString("nb-NO", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Oslo",
        });

        const sunset = sunsetDate.toLocaleTimeString("nb-NO", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Oslo",
        });

        const diffMs = sunsetDate - sunriseDate;

        const hours = Math.floor(diffMs / 3600000);
        const minutes = Math.floor(
          (diffMs % 3600000) / 60000
        );

        if (mounted) {
          setSunTimes({
            sunrise,
            sunset,
            dayLength: `${hours}t ${minutes}m`,
            loading: false,
          });
        }
      } catch (error) {
        console.error("Feil ved henting av soldata:", error);

        if (mounted) {
          setSunTimes({
            sunrise: "--:--",
            sunset: "--:--",
            dayLength: "--",
            loading: false,
          });
        }
      }
    }

    fetchSunTimes();

    const interval = setInterval(
      fetchSunTimes,
      60 * 60 * 1000
    );

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [lat, lon]);

  return sunTimes;
}
