import ForecastCard from "./components/ForecastCard";
import HytteklarCard from "./components/HytteklarCard";
import FjellovergangerCard from "./components/FjellovergangerCard";
import HeisStatusCard from "./components/HeisStatusCard";
import BussCard from "./components/BussCard";
import LangrennCard from "./components/LangrennCard";
import DrivstoffLadingCard from "./components/DrivstoffLadingCard";
import TravelTimesCard from "./components/TravelTimesCard";
import CameraSection from "./components/CameraSection";
import PanoramaCard from "./components/PanoramaCard";


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
          buss, kameraer og reiseinformasjon
          samlet på ett sted.
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
          <HeisStatusCard />
        </div>

        <div className="mb-6">
          <BussCard />
        </div>

        <div className="mb-6">
          <LangrennCard />
        </div>

        <div className="mb-6">
          <DrivstoffLadingCard />
        </div>

        <div className="mb-6">
          <TravelTimesCard />
        </div>

        <div className="mb-6">
          <div className="bg-white rounded-3xl p-6 shadow">

            <h2 className="text-2xl font-bold mb-3">
              💧 Stenging av vann i Bødal
            </h2>

            <p className="text-slate-600 mb-4">
              Informasjonsvideo som viser hvordan vannet
              stenges ved avreise fra hytta.
            </p>

            <a
              href="https://youtu.be/DSvmFjCCIcA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
            >
              ▶ Se video
            </a>

          </div>
        </div>

        <div className="mb-6">
          <CameraSection />
        </div>


        <div className="mb-6">
          <PanoramaCard />
        </div>

      </div>
    </div>
  );
}
