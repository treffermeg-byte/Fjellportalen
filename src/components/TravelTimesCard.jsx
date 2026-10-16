import useDriveTimes from "../Hooks/useDriveTimes";

export default function TravelTimesCard() {
  const { times, lastUpdated } =
    useDriveTimes();

  function RouteCard({
    place,
    time,
  }) {
    return (
      <div className="border rounded-xl p-3">
        <div>📍 {place}</div>

        <div className="font-bold">
          {time}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        🚗 Estimerte kjøretider
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-4">
            🏔️ Beitostølen
          </h3>

          <div className="space-y-3">
            <RouteCard
              place="Asker"
              time={times.askerBeito}
            />

            <RouteCard
              place="Oslo"
              time={times.osloBeito}
            />

            <RouteCard
              place="Tønsberg"
              time={times.tonsbergBeito}
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
              time={times.askerBodal}
            />

            <RouteCard
              place="Oslo"
              time={times.osloBodal}
            />

            <RouteCard
              place="Tønsberg"
              time={times.tonsbergBodal}
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
