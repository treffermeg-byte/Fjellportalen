import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import TravelTimesCard from "./components/TravelTimesCard";
import FjellovergangerCard from "./components/FjellovergangerCard";
import HeisStatusCard from "./components/HeisStatusCard";
import CameraSection from "./components/CameraSection";
import HytteklarCard from "./components/HytteklarCard";
import DrivstoffLadingCard from "./components/DrivstoffLadingCard";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-5xl font-bold mb-2">
          🏔️ Fjellportalen
        </h1>

        <p className="text-slate-600 mb-6">
          Vær, kjøretider, fjelloverganger, heisstatus og
          kameraer samlet på ett sted.
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
            temp={-2}
            wind={4}
          />

          <WeatherCard
            title="🏞️ Loen"
            temp={5}
            wind={2}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <ForecastCard
            title="📍 Beitostølen - 7 dagers prognose"
            forecast={[]}
          />

          <ForecastCard
            title="📍 Loen - 7 dagers prognose"
            forecast={[]}
          />
        </div>

        <div className="mb-6">
          <HeisStatusCard />
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