import { useEffect, useState } from "react";
import useSunTimes from "../Hooks/useSunTimes";

function getWeatherEmoji(symbolCode) {
  if (!symbolCode) return "❔";

  if (symbolCode.includes("clearsky")) return "☀️";
  if (symbolCode.includes("fair")) return "🌤️";
  if (symbolCode.includes("partlycloudy")) return "⛅";
  if (symbolCode.includes("cloudy")) return "☁️";
  if (symbolCode.includes("rain")) return "🌧️";
  if (symbolCode.includes("snow")) return "❄️";
  if (symbolCode.includes("fog")) return "🌫️";

  return "🌤️";
}

export default function HytteklarCard({
  beitoWeather,
  loenWeather,
}) {
  const beitoSun = useSunTimes(
    61.25,
    8.92
  );

  const loenSun = useSunTimes(
    61.873,
    6.857
  );

  const [liftStatus, setLiftStatus] =
    useState(null);

  useEffect(() => {
    async function loadStatus() {
      try {
        const response = await fetch(
          "https://api.fnugg.no/get/resort/15"
        );

        const data =
          await response.json();

        setLiftStatus({
          resortOpen:
            data?._source?.resort_open,
          liftsOpen:
            data?._source?.lifts?.open ?? 0,
          liftsTotal:
            data?._source?.lifts?.count ?? 0,
          slopesOpen:
            data?._source?.slopes?.open ?? 0,
          slopesTotal:
            data?._source?.slopes?.count ?? 0,
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadStatus();
  }, []);

  const beitoStatusText =
    liftStatus?.resortOpen
      ? "🟢 Åpen"
      : "🔴 Stengt";

  const loenStatusText =
    "🟢 Åpen";

  return (
    <div className="grid lg:grid-cols-2 gap-6">

      {/* BEITOSTØLEN */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-6 shadow">

        <div className="flex justify-between items-start mb-6">

          <div>
            <h2 className="text-3xl font-bold">
              🎿 Beitostølen
            </h2>

            <div className="mt-2 font-semibold">
              🚠 Heiser {beitoStatusText}
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs opacity-75">
              Temperatur
            </div>

            <div className="text-7xl font-black leading-none">
              {beitoWeather?.temp ?? "--"}°
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌤️ Vær
            </div>

            <div className="text-3xl">
              {getWeatherEmoji(
                beitoWeather?.symbolCode
              )}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              💨 Vind
            </div>

            <div className="text-xl font-bold">
              {beitoWeather?.wind ?? "--"} m/s
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌅 Soloppgang
            </div>

            <div className="text-xl font-bold">
              {beitoSun?.sunrise ?? "--:--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌇 Solnedgang
            </div>

            <div className="text-xl font-bold">
              {beitoSun?.sunset ?? "--:--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🚠 Heiser åpne
            </div>

            <div className="text-xl font-bold">
              {liftStatus?.liftsOpen ?? "--"}
              /
              {liftStatus?.liftsTotal ?? "--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              ⛷️ Nedfarter åpne
            </div>

            <div className="text-xl font-bold">
              {liftStatus?.slopesOpen ?? "--"}
              /
              {liftStatus?.slopesTotal ?? "--"}
            </div>
          </div>

        </div>

      </div>

      {/* LOEN */}

      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow">

        <div className="flex justify-between items-start mb-6">

          <div>
            <h2 className="text-3xl font-bold">
              🏞️ Loen
            </h2>

            <div className="mt-2 font-semibold">
              🚠 Skylift {loenStatusText}
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs opacity-75">
              Temperatur
            </div>

            <div className="text-7xl font-black leading-none">
              {loenWeather?.temp ?? "--"}°
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌤️ Vær
            </div>

            <div className="text-3xl">
              {getWeatherEmoji(
                loenWeather?.symbolCode
              )}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              💨 Vind
            </div>

            <div className="text-xl font-bold">
              {loenWeather?.wind ?? "--"} m/s
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌅 Soloppgang
            </div>

            <div className="text-xl font-bold">
              {loenSun?.sunrise ?? "--:--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌇 Solnedgang
            </div>

            <div className="text-xl font-bold">
              {loenSun?.sunset ?? "--:--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🚠 Skylift
            </div>

            <div className="text-lg font-bold">
              {loenStatusText}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🕒 Siste retur
            </div>

            <div className="text-xl font-bold">
              22:30
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
