import useSunTimes from "../hooks/useSunTimes";

export default function SolDagslysCard() {
  const beitostolen = useSunTimes(61.25, 8.92);
  const loen = useSunTimes(61.87, 6.85);

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        🌅 Sol & dagslys
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🏔️ Beitostølen
          </h3>

          {beitostolen.loading ? (
            <div className="text-gray-500">
              Henter soldata...
            </div>
          ) : (
            <div className="space-y-2">
              <div>
                🌅 Soloppgang: {beitostolen.sunrise}
              </div>

              <div>
                🌇 Solnedgang: {beitostolen.sunset}
              </div>

              <div>
                ☀️ Dagslys: {beitostolen.dayLength}
              </div>
            </div>
          )}
        </div>

        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🏞️ Loen
          </h3>

          {loen.loading ? (
            <div className="text-gray-500">
              Henter soldata...
            </div>
          ) : (
            <div className="space-y-2">
              <div>
                🌅 Soloppgang: {loen.sunrise}
              </div>

              <div>
                🌇 Solnedgang: {loen.sunset}
              </div>

              <div>
                ☀️ Dagslys: {loen.dayLength}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
