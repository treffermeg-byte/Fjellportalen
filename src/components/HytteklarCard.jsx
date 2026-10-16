import useSunTimes from "../Hooks/useSunTimes";

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

  return (
    <div className="grid lg:grid-cols-2 gap-6">

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-6 shadow">

        <div className="flex justify-between items-start mb-6">

          <div>
            <h2 className="text-3xl font-bold">
              🎿 Beitostølen
            </h2>
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
              💨 Vind
            </div>

            <div className="text-2xl font-bold">
              {beitoWeather?.wind ?? "--"} m/s
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌅 Soloppgang
            </div>

            <div className="text-2xl font-bold">
              {beitoSun?.sunrise ?? "--:--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌇 Solnedgang
            </div>

            <div className="text-2xl font-bold">
              {beitoSun?.sunset ?? "--:--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🚠 Heisstatus
            </div>

            <div className="text-lg font-bold">
              Se heisstatus under
            </div>
          </div>

        </div>

      </div>

      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow">

        <div className="flex justify-between items-start mb-6">

          <div>
            <h2 className="text-3xl font-bold">
              🏞️ Loen
            </h2>
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
              💨 Vind
            </div>

            <div className="text-2xl font-bold">
              {loenWeather?.wind ?? "--"} m/s
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌅 Soloppgang
            </div>

            <div className="text-2xl font-bold">
              {loenSun?.sunrise ?? "--:--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🌇 Solnedgang
            </div>

            <div className="text-2xl font-bold">
              {loenSun?.sunset ?? "--:--"}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-3">
            <div className="text-xs opacity-80">
              🚠 Loen Skylift
            </div>

            <div className="text-lg font-bold">
              Se heisstatus under
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
