import useSunTimes from "../Hooks/useSunTimes";

export default function HytteklarCard({
  beitoWeather,
  loenWeather,
}) {
  const beitoSun = useSunTimes(61.25, 8.92);
  const loenSun = useSunTimes(61.87, 6.85);

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ✅ Hytteklar?
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🎿 Beitostølen
          </h3>

          <div className="space-y-2">
            <div>
              🌦️ Temperatur: {beitoWeather?.temp ?? "--"}°C
            </div>

            <div>
              💨 Vind: {beitoWeather?.wind ?? "--"} m/s
            </div>

            <div>
              🌅 Soloppgang: {beitoSun.sunrise ?? "--:--"}
            </div>

            <div>
              🌇 Solnedgang: {beitoSun.sunset ?? "--:--"}
            </div>

            <div>
              🚠 Heiser: 0 / 7 åpne
            </div>

            <div>
              ⛷️ Nedfarter: 0 / 23 åpne
            </div>

            <div className="flex items-center gap-2">
              <span>🏔️ Valdresflye</span>
              <span className="text-green-600 font-semibold">
                🟢 Åpen
              </span>
            </div>
          </div>
        </div>

        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🏞️ Loen / Bødal
          </h3>

          <div className="space-y-2">
            <div>
              🌦️ Temperatur: {loenWeather?.temp ?? "--"}°C
            </div>

            <div>
              💨 Vind: {loenWeather?.wind ?? "--"} m/s
            </div>

            <div>
              🌅 Soloppgang: {loenSun.sunrise ?? "--:--"}
            </div>

            <div>
              🌇 Solnedgang: {loenSun.sunset ?? "--:--"}
            </div>

            <div>
              🚠 Loen Skylift: Åpen
            </div>

            <div className="flex items-center gap-2">
              <span>❄️ Strynefjellet</span>
              <span className="text-green-600 font-semibold">
                🟢 Åpen
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
