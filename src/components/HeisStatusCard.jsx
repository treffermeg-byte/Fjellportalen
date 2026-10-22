import useHeisStatus from "../Hooks/useHeisStatus";

export default function HeisStatusCard() {
  const { status, lastUpdated } = useHeisStatus();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          🚠 Heisstatus
        </h2>

        {lastUpdated && (
          <div className="text-xs text-slate-500">
            🔄 {lastUpdated}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Beitostølen */}
        <div
          className="relative overflow-hidden rounded-2xl min-h-[240px]"
          style={{
            backgroundImage: "url('/Beitoheis.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/25" />

          <div className="relative z-10 p-5 text-white h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">
                  🎿 Beitostølen
                </h3>

                <span className="font-semibold">
                  {status?.resortOpen
                    ? "🟢 Åpent"
                    : "🔴 Stengt"}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  🚠 Heiser:
                  <strong>
                    {" "}
                    {status?.liftsOpen ?? "--"}/
                    {status?.liftsTotal ?? "--"}
                  </strong>
                </div>

                <div>
                  ⛷️ Nedfarter:
                  <strong>
                    {" "}
                    {status?.slopesOpen ?? "--"}/
                    {status?.slopesTotal ?? "--"}
                  </strong>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <a
                href="https://beito.skiperformance.com/no/Vinter/shopp#/no/Vinter/buy?skugroup_id=3966"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700"
              >
                🎟️ Billett
              </a>

              <a
                href="https://beito.com/apningstider-for-heisen/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                🕒 Åpningstider
              </a>
            </div>
          </div>
        </div>

        {/* Loen */}
        <div
          className="relative overflow-hidden rounded-2xl min-h-[240px]"
          style={{
            backgroundImage: "url('/Skylift.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/25" />

          <div className="relative z-10 p-5 text-white h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-3">
                🏞️ Loen Skylift
              </h3>

              <p className="text-sm text-slate-100">
                Billetter og åpningstider.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <a
                href="https://loenskylift.axess.shop/nb/Products/Tickets/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700"
              >
                🎟️ Billett
              </a>

              <a
                href="https://www.loenskylift.no/opningstider-og-prisar"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                🕒 Åpningstider
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-4 text-xs text-slate-500">
        🔄 Oppdateres automatisk hvert 5. minutt
        {lastUpdated && ` • Sist oppdatert ${lastUpdated}`}
      </div>
    </div>
  );
}
