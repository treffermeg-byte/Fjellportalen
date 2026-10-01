import { useEffect, useState } from "react";

export default function useWeather(lat, lon) {
  const [weather, setWeather] = useState({
    temp: "--",
    wind: "--",
  });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
          {
            headers: {
              "User-Agent": "Fjellportalen/1.0",
            },
          }
        );

        const data = await response.json();

        const current =
          data.properties.timeseries[0].data.instant.details;

        setWeather({
          temp: Math.round(current.air_temperature),
          wind: Math.round(current.wind_speed),
        });
      } catch (error) {
        console.error("Feil ved henting av vær:", error);
      }
    }

    fetchWeather();

    const interval = setInterval(
      fetchWeather,
      15 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, [lat, lon]);

  return weather;
}