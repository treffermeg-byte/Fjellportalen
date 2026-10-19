import useDriveTimes from "../Hooks/useDriveTimes";

function RouteCard({ place, route }) {
  return (
    <div className="border rounded-xl p-4">
      <div className="font-semibold mb-2">
        📍 {place}
      </div>

      <div className="font-bold text-lg">
        🚗 {route?.duration ?? "--"}
      </div>

      <div className="text-slate-600">
        📏 {route?.distance ?? "--"}
      </div>
    </div>
  );
}

export default function TravelTimesCard() {
  const { times, lastUpdated } =
    useDriveTimes();

  return (
    <div className="bg-white rounded-3xl p-6 shadow">

      <h2 className="font-bold text-2xl mb-6">
        🚗 Reisetider
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <h3 className="font-bold text-lg mb-4">
            🏔️ Beitostølen
          </h3>

          <div className="space-y-3">

            <RouteCard
              place="Asker"
              route={times.askerBeito}
            />

            <RouteCard
              place="Oslo"
              route={times.osloBeito}
            />

            <RouteCard
              place="Tønsberg"
              route={times.tonsbergBeito}
            />

          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">
            🏞️ Bødal
          </h3>

          <div className="space-y-3">

            <RouteCard
              place="Asker"
              route={times.askerBodal}
            />

            <RouteCard
              place="Oslo"
              route={times.osloBodal}
            />

            <RouteCard
              place="Tønsberg"
              route={times.tonsbergBodal}
            />

          </div>
        </div>

      </div>

      <div className="text-xs text-gray-500 mt-6">
        Sist oppdatert: {lastUpdated}
      </div>

    </div>
  );
}
