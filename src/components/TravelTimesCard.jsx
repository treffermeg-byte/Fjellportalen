import useDriveTimes from "../Hooks/useDriveTimes";

export default function TravelTimesCard() {
  const { times, lastUpdated } = useDriveTimes();

  function RouteCard({ place, route, mapsUrl }) {
    return (
      <div className="border rounded-xl p-4">
        <div className="font-semibold mb-2">
          📍 {place}
        </div>

        <div className="font-bold text-lg">
          🚗 {route?.duration ?? "--"}
        </div>

        <div className="text-slate-600 mb-3">
          📏 {route?.distance ?? "--"}
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
       lassName="font-bold text-2xl mb-6">
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
              mapsUrl="https://www.google.com/maps/dir/Asker/Beitostølen"
            />

            <RouteCard
              place="Oslo"
              route={times.osloBeito}
              mapsUrl="https://www.google.com/maps/dir/Oslo/Beitostølen"
            />

            <RouteCard
              place="Tønsberg"
              route={times.tonsbergBeito}
              mapsUrl="https://www.google.com/maps/dir/Tønsberg/Beitostølen"
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
              mapsUrl="https://www.google.com/maps/dir/Asker/Bødal"
            />

            <RouteCard
              place="Oslo"
              route={times.osloBodal}
              mapsUrl="https://www.google.com/maps/dir/Oslo/Bødal"
            />

            <RouteCard
              place="Tønsberg"
              route={times.tonsbergBodal}
              mapsUrl="https://www.google.com/maps/dir/Tønsberg/Bødal"
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
