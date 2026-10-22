import useDriveTimes from "../Hooks/useDriveTimes";

function RouteCard({ place, route }) {
  return (
    <div
      className="
        rounded-xl
        bg-black/25
        backdrop-blur-sm
        border
        border-white/20
        p-3
        transition-all
        duration-300
        hover:border-white/40
        hover:bg-black/35
        md:hover:-translate-y-0.5
        md:hover:shadow-xl
      "
    >
      <div className="font-semibold text-white">
        📍 {place}
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-2 text-white">
        <span className="font-bold text-lg">
          🚗 {route?.duration ?? "--"}
        </span>

        <span className="text-slate-200">
          • 📏 {route?.distance ?? "--"}
        </span>
      </div>
    </div>
  );
}

export default function TravelTimesCard() {
  const { times, lastUpdated } = useDriveTimes();

  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-lg"
      style={{
        backgroundImage: "url('/Vei.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/15" />

      <div className="relative z-10 p-6">
        <h2 className="font-bold text-2xl text-white mb-6">
          🚗 Reisetider
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Beitostølen */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
            <h3 className="font-bold text-xl text-white mb-4">
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

          {/* Bødal */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
            <h3 className="font-bold text-xl text-white mb-4">
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

        <div className="text-xs text-slate-200 mt-6">
          🚗 Sist oppdatert: {lastUpdated}
        </div>
      </div>
    </div>
  );
}
