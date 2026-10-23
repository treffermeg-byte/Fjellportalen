import { useEffect, useState } from "react";

export default function useWeather(lat, lon) {
  const [weather, setWeather] = useState({
    temp: "--",
    wind: "--",
    symbolCode: null,
  });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`
        );

        if (!response.ok) {
          throw new Error(`HTTP-feil: ${response.status}`);
        }

        const data = await response.json();

        const current =
          data.properties.timeseries[0].data.instant.details;

        const symbolCode =
          data.properties.timeseries[0].data.next_1_hours?.summary
            ?.symbol_code || null;

        setWeather({
          temp: Math.round(current.air_temperature),
          wind: Math.round(current.wind_speed),
          symbolCode,
        });
      } catch (error) {
        console.error(
          "Feil ved henting av værdata:",
          error
        );

        setWeather({
          temp: "--",
          wind: "--",
          symbolCode: null,
        });
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
