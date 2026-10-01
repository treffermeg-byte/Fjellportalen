import { useEffect, useState } from "react";

const weatherIcons = {
  clearsky_day: "☀️",
  clearsky_night: "🌙",
  fair_day: "🌤️",
  fair_night: "🌙",
  partlycloudy_day: "⛅",
  partlycloudy_night: "☁️",
  cloudy: "☁️",
  rain: "🌧️",
  lightrain: "🌦️",
  heavyrain: "🌧️",
  rainshowers_day: "🌦️",
  rainshowers_night: "🌧️",
  sleet: "🌨️",
  snow: "❄️",
  lightsnow: "🌨️",
  heavysnow: "❄️",
  fog: "🌫️",
  thunderstorm: "⛈️",
};

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
        const timeseries = data.properties.timeseries;

        const dailyForecasts = [];

        for (let day = 0; day < 4; day++) {
          const dayData = timeseries.slice(
            day * 24,
            day * 24 + 24
          );

          if (dayData.length === 0) {
            continue;
          }

          const temps = dayData.map(
            (item) =>
              item.data.instant.details.air_temperature
          );

          const winds = dayData.map(
            (item) =>
              item.data.instant.details.wind_speed
          );

          const precipitation = dayData.reduce(
            (sum, item) =>
              sum +
              (
                item.data.next_1_hours?.details
                  ?.precipitation_amount ?? 0
              ),
            0
          );

          const midday =
            dayData[
              Math.min(12, dayData.length - 1)
            ];

          const symbolCode =
            midday.data.next_1_hours?.summary
              ?.symbol_code ||
            midday.data.next_6_hours?.summary
              ?.symbol_code ||
            "cloudy";

          const maxTemp = Math.round(
            Math.max(...temps)
          );

          const minTemp = Math.round(
            Math.min(...temps)
          );

          const maxWind = Math.round(
            Math.max(...winds)
          );

          const estimatedSnow =
            maxTemp <= 0
              ? Math.round(precipitation)
              : 0;

          dailyForecasts.push({
            day: new Date(
              midday.time
            ).toLocaleDateString("no-NO", {
              weekday: "short",
            }),

            icon:
              weatherIcons[symbolCode] || "⛅",

            symbolCode,

            maxTemp,
            minTemp,

            wind: maxWind,

            precipitation:
              Math.round(
                precipitation * 10
              ) / 10,

            newSnow: estimatedSnow,
          });
        }

        setForecast(dailyForecasts);
      } catch (error) {
        console.error(
          "Feil ved henting av prognose:",
          error
        );

        setForecast([]);
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