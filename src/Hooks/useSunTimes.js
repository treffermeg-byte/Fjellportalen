import { useEffect, useState } from "react";

export default function useSunTimes(lat, lon) {
  const [sunTimes, setSunTimes] = useState({
    sunrise: "--:--",
    sunset: "--:--",
    dayLength: "--",
  });

  const [loading, setLoading] = useState(true);

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

        const sunrise = new Intl.DateTimeFormat("nb-NO", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Oslo",
        }).format(new Date(data.results.sunrise));

        const sunset = new Intl.DateTimeFormat("nb-NO", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Oslo",
        }).format(new Date(data.results.sunset));

        const dayLengthSeconds =
          Number(data.results.day_length) || 0;

        const hours = Math.floor(dayLengthSeconds / 3600);
        const minutes = Math.floor(
          (dayLengthSeconds % 3600) / 60
        );

        setSunTimes({
          sunrise,
          sunset,
          dayLength: `${hours}t ${minutes}m`,
        });
      } catch (error) {
        console.error(
          "Feil ved henting av soldata:",
          error
        );

        setSunTimes({
          sunrise: "--:--",
          sunset: "--:--",
          dayLength: "--",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchSunTimes();

    const interval = setInterval(
      fetchSunTimes,
      60 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, [lat, lon]);

  return {
    ...sunTimes,
    loading,
  };
}
