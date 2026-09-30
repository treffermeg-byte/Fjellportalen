import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import TravelTimesCard from "./components/TravelTimesCard";
import FjellovergangerCard from "./components/FjellovergangerCard";
import HeisStatusCard from "./components/HeisStatusCard";
import CameraSection from "./components/CameraSection";
import HytteklarCard from "./components/HytteklarCard";
import DrivstoffLadingCard from "./components/DrivstoffLadingCard";
import LangrennCard from "./components/LangrennCard";

export default function App() {
  const beitoWeather = {
    temp: -2,
    wind: 4,
    sunrise: "07:28",
    sunset: "18:43",
  };

  const loenWeather = {
    temp: 5,
    wind: 2,
    sunrise: "07:32",
    sunset: "18:51",
  };

  const beitoForecast = [
    {
      day: "Man",
      icon: "☀️",
      temp: 3,
      wind: 4,
      rain: 0,
      snow: 0,
    },
    {
      day: "Tir",
      icon: "⛅",
      temp: 1,
      wind: 6,
      rain: 1,
      snow: 0,
    },
    {
      day: "Ons",
      icon: "❄️",
      temp: -2,
      wind: 7,
      rain: 0,
      snow: 5,
    },
    {
      day: "Tor",
      icon: "❄️",
      temp: -4,
      wind: 5,
      rain: 0,
      snow: 8,
    },
  ];

  const loenForecast = [
    {
      day: "Man",
      icon: "🌦️",
      temp: 8,
      wind: 2,
      rain: 5,
      snow: 0,
    },
    {
      day: "Tir",
      icon: "🌧️",
      temp: 7,
      wind: 3,
      rain: 10,
      snow: 0,
    },
    {
      day: "Ons",
      icon: "⛅",
      temp: 6,
      wind: 4,
      rain: 2,
      snow: 0,
    },
    {
      day: "Tor",
      icon: "☀️",
      temp: 9,
      wind: 2,
      rain: 0,
      snow: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-5xl font-bold mb-2">
          🏔️ Fjellportalen
        </h1>

        <p className="text-slate-600 mb-6">
          Vær, snøforhold, kjøretider, fjelloverganger,
          heisstatus og kameraer samlet på ett sted.
        </p>

        <div className="mb-6">
          <HytteklarCard />
        </div>

        <div className="mb-6">
          <DrivstoffLadingCard />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <WeatherCard
            title="🏔️ Beitostølen"
            temp={beitoWeather.temp}
            wind={beitoWeather.wind}
            sunrise={beitoWeather.sunrise}
            sunset={beitoWeather.sunset}
          />

          <WeatherCard
            title="🏞️ Loen"
            temp={loenWeather.temp}
            wind={loenWeather.wind}
            sunrise={loenWeather.sunrise}
            sunset={loenWeather.sunset}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <ForecastCard
            title="📍 Beitostølen - 4 dagers prognose"
            forecast={beitoForecast}
          />

          <ForecastCard
            title="📍 Loen - 4 dagers prognose"
            forecast={loenForecast}
          />
        </div>

        <div className="mb-6">
          <HeisStatusCard />
        </div>

        <div className="mb-6">
          <LangrennCard />
        </div>

        <div className="mb-6">
          <TravelTimesCard />
        </div>

        <div className="mb-6">
          <FjellovergangerCard />
        </div>

        <div className="mb-6">
          <CameraSection />
        </div>
      </div>
    </div>
  );
}
``