import ForecastCard from "./components/ForecastCard";
import HytteklarCard from "./components/HytteklarCard";
import FjellovergangerCard from "./components/FjellovergangerCard";
import BussCard from "./components/BussCard";
import HeisStatusCard from "./components/HeisStatusCard";
import DrivstoffLadingCard from "./components/DrivstoffLadingCard";
import LangrennCard from "./components/LangrennCard";
import TravelTimesCard from "./components/TravelTimesCard";
import CameraSection from "./components/CameraSection";

import useWeather from "./Hooks/useWeather";
import useForecast from "./Hooks/useForecast";

export default function App() {
  const beitoWeather = useWeather(
    61.249,
    8.906
  );

  const loenWeather = useWeather(
    61.873,
    6.857
  );

  const beitoForecast = useForecast(
    61.249,
    8.906
  );

  const loenForecast = useForecast(
    61.873,
    6.857
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-5xl font-bold mb-2">
          🏔️ Fjellportalen
        </h1>

        <p className="text-slate-600 mb-6">
          Vær, kjøretider, fjelloverganger,
          heisstatus, langrenn, drivstoff,
          buss, kameraer og reiseinformasjon.
        </p>

        <div className="mb-6">
          <HytteklarCard
            beitoWeather={beitoWeather}
            loenWeather={loenWeather}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <ForecastCard
            title="📍 Beitostølen - 4 dagers prognose"
            forecast={beitoForecast}
          />

          <ForecastCard
            title="📍 Bødal - 4 dagers prognose"
            forecast={loenForecast}
          />
        </div>

        <div className="mb-6">
          <FjellovergangerCard />
        </div>

        <div className="mb-6">
          <BussCard />
        </div>

        <div className="mb-6">
          <HeisStatusCard />
        </div>

        <div className="mb-6">
          <DrivstoffLadingCard />
        </div>

        <div className="mb-6">
          <LangrennCard />
        </div>

        <div className="mb-6">
          <TravelTimesCard />
        </div>

        <div className="mb-6">
          <CameraSection />
        </div>

      </div>
    </div>
  );
}
