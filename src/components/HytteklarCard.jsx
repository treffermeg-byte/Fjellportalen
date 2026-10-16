import useSunTimes from "../Hooks/useSunTimes";

export default function HytteklarCard({
  beitoWeather,
  loenWeather,
}) {
  const beitoSun = useSunTimes(61.25, 8.92);

  const temp =
    beitoWeather?.temp ?? 0;

  const score =
    temp >= 5 ? 92 :
    temp >= 0 ? 84 :
    temp >= -10 ? 71 :
    55;

  const status =
    score >= 85
      ? {
          text: "🟢 Hytteklar",
          color: "bg-green-100 text-green-700",
        }
      : score >= 70
        ? {
            text: "🟡 Vurder forhold",
            color: "bg-yellow-100 text-yellow-700",
          }
        : {
            text: "🔴 Krevende forhold",
            color: "bg-red-100 text-red-700",
          };

  return (
    <div className="space-y-6">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow">

        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-100 text-sm">
              HOVEDDESTINASJON
            </p>

            <h2 className="text-4xl font-bold mt-1">
              🎿 Beitostølen
            </h2>

            <div
              className={`inline-block px-4 py-2 rounded-full mt-4 font-semibold ${status.color}`}
            >
              {status.text}
            </div>
          </div>

          <div className="text-right">
            <div className="text-blue-100">
              Temperatur
            </div>

            <div className="text-8xl font-black leading-none">
              {beitoWeather?.temp ?? "--"}°
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">

          <div className="bg-white/10 rounded-2xl p-4">
            <div className="text-sm text-blue-100">
              Vind
            </div>

            <div className="text-3xl font-bold">
              {beitoWeather?.wind ?? "--"}
              <span className="text-lg ml-1">
                m/s
              </span>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <div className="text-sm text-blue-100">
              Soloppgang
            </div>

            <div className="text-3xl font-bold">
              {beitoSun?.sunrise ?? "--:--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-4">
            <div className="text-sm text-blue-100">
              Solnedgang
            </div>

            <div className="text-3xl font-bold">
              {beitoSun?.sunset ?? "--:--"}
            </div>
          </div>

        </div>
      </div>

      {/* KPI-RAD */}
      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-white rounded-3xl p-6 shadow text-center">
          <div className="text-slate-500 text-sm">
            Hytteklar-score
          </div>

          <div className="text-6xl font-black mt-2">
            {score}
          </div>

          <div className="text-slate-500">
            /100
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow text-center">
          <div className="text-slate-500 text-sm">
            Snømengde
          </div>

          <div className="text-5xl font-black mt-2">
            65
          </div>

          <div className="text-slate-500">
            cm
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow text-center">
          <div className="text-slate-500 text-sm">
            Heiser åpne
          </div>

          <div className="text-5xl font-black mt-2">
            7
          </div>

          <div className="text-green-600 font-semibold">
            av 7
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow text-center">
          <div className="text-slate-500 text-sm">
            Nedfarter åpne
          </div>

          <div className="text-5xl font-black mt-2">
            23
          </div>

          <div className="text-green-600 font-semibold">
            av 23
          </div>
        </div>

      </div>

      {/* DESTINASJONER */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="text-2xl font-bold mb-4">
            🎿 Beitostølen
          </h3>

          <div className="space-y-2">
            <div>
              🌡️ Temperatur:
              {" "}
              {beitoWeather?.temp ?? "--"}°C
            </div>

            <div>
              💨 Vind:
              {" "}
              {beitoWeather?.wind ?? "--"} m/s
            </div>

            <div>
              🏔️ Valdresflye: 🟢 Åpen
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="text-2xl font-bold mb-4">
            🏞️ Bødal
          </h3>

          <div className="space-y-2">
            <div>
              🌡️ Temperatur:
              {" "}
              {loenWeather?.temp ?? "--"}°C
            </div>

            <div>
              💨 Vind:
              {" "}
              {loenWeather?.wind ?? "--"} m/s
            </div>

            <div>
              🚠 Loen Skylift: 🟢 Åpen
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
