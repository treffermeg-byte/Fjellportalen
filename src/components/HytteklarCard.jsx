import useSunTimes from "../Hooks/useSunTimes";
import useSnowConditions from "../Hooks/useSnowConditions";

export default function HytteklarCard({
  beitoWeather,
  loenWeather,
}) {
  const beitoSun = useSunTimes(61.25, 8.92);
  const loenSun = useSunTimes(61.87, 6.85);

  const snow = useSnowConditions();

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 rounded-3xl p-8 shadow-lg">
      <h2 className="font-bold text-4xl mb-8">
        ✅ Hytteklar?
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-3xl p-6 shadow">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🟢</span>

            <div>
              <h3 className="font-bold text-3xl">
                🎿 Beitostølen
              </h3>

              <div className="text-green-700 font-semibold text-lg">
                Gode forhold
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">

            <div className="bg-blue-50 rounded-2xl p-4">
              <div className="text-gray-500">
                Temperatur
              </div>

              <div className="text-5xl font-bold">
                {beitoWeather?.temp ?? "--"}°
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4">
              <div className="text-gray-500">
                Vind
              </div>

              <div className="text-5xl font-bold">
                {beitoWeather?.wind ?? "--"}
              </div>

              <div className="text-lg">
                m/s
              </div>
            </div>

          </div>

          <div className="space-y-3 text-xl">

            <div>
              ❄️ Snødybde: {snow.snowDepth} cm
            </div>

            <div>
              🌨️ Nysnø siste døgn: {snow.newSnow} cm
            </div>

            <div>
              🌅 Soloppgang: {beitoSun?.sunrise ?? "--:--"}
            </div>

            <div>
              🌇 Solnedgang: {beitoSun?.sunset ?? "--:--"}
            </div>

            <div>
              🚠 Heiser: 0 / 7 åpne
            </div>

            <div>
              ⛷️ Nedfarter: 0 / 23 åpne
            </div>

            <div className="font-semibold text-green-700">
              🏔️ Valdresflye • Åpen
            </div>

          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🟢</span>

            <div>
              <h3 className="font-bold text-3xl">
                🏞️ Bødal
              </h3>

              <div className="text-green-700 font-semibold text-lg">
                Fine forhold
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">

            <div className="bg-blue-50 rounded-2xl p-4">
              <div className="text-gray-500">
                Temperatur
              </div>

              <div className="text-5xl font-bold">
                {loenWeather?.temp ?? "--"}°
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4">
              <div className="text-gray-500">
                Vind
              </div>

              <div className="text-5xl font-bold">
                {loenWeather?.wind ?? "--"}
              </div>

              <div className="text-lg">
                m/s
              </div>
            </div>

          </div>

          <div className="space-y-3 text-xl">

            <div>
              🌅 Soloppgang: {loenSun?.sunrise ?? "--:--"}
            </div>

            <div>
              🌇 Solnedgang: {loenSun?.sunset ?? "--:--"}
            </div>

            <div>
              🚠 Loen Skylift: Åpen
            </div>

            <div className="font-semibold text-green-700">
              ❄️ Strynefjellet • Åpen
            </div>

          </div>
        </div>

      </div>

      <div className="text-sm text-gray-600 mt-6">
        Snødata sist oppdatert: {snow.lastUpdated}
      </div>
    </div>
  );
}
