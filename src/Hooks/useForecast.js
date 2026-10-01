import { useEffect, useState } from "react";

export default function useForecast(lat, lon) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    async function fetchForecast() {
      try {
        const response = await fetch(
          `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
          {
            headers: {
              "User-Agent": "Fjellportalen/1.0",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Kunne ikke hente prognose");
        }

        const data = await response.json();

        const days = data.properties.timeseries
          .filter((_, index) => index % 24 === 0)
          .slice(0, 4)
          .map((item) => ({
            day: new Date(item.time).toLocaleDateString("no-NO", {
              weekday: "short",
            }),
            temp: Math.round(
              item.data.instant.details.air_temperature
            ),
            wind: Math.round(
              item.data.instant.details.wind_speed
            ),
            icon: "🌦️",
          }));

        setForecast(days);
      } catch (error) {
        console.error(
          "Feil ved henting av prognose:",
          error
        );
      }
    }

    fetchForecast();

    const interval = setInterval(
      fetchForecast,
      15 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, [lat, lon]);

  return forecast;
}