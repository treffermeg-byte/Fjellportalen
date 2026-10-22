import { ExternalLink, RefreshCw } from "lucide-react";
import useHeisStatus from "../hooks/useHeisStatus";

export default function HeisStatusCard() {
  const { status, lastUpdated } = useHeisStatus();

  return (
    <div className="bg-white/90 dark:bg-slate-800/90 rounded-2xl shadow-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          🚠 Heisstatus
        </h2>

        {lastUpdated && (
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <RefreshCw size={12} />
            {lastUpdated}
          </div>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">

        <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold">
              🎿 Beitostølen
            </h3>

            <span
              className={
                status?.resortOpen
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
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

        <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
          <h3 className="font-bold mb-3">
            🏞️ Loen Skylift
          </h3>

          <div className="text-sm space-y-2">
            <div>
              🎟️ Billetter og åpningstider
            </div>

            <div>
              Se informasjon via knappene under.
            </div>
          </div>
        </div>

      </div>

      <div className="mt-5 border-t border-slate-200 dark:border-slate-700 pt-4">
        <h3 className="font-semibold mb-3">
          🎿 Nyttige lenker
        </h3>

        <div className="flex flex-wrap gap-2">

          <a
            href="https://loenskylift.axess.shop/nb/Products/Tickets/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-sm text-white hover:bg-sky-700"
          >
            🎟️ Loen
            <ExternalLink size={14} />
          </a>

          <a
            href="https://beito.skiperformance.com/no/Vinter/shopp#/no/Vinter/buy?skugroup_id=3966"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-sm text-white hover:bg-sky-700"
          >
            🎟️ Beitostølen
            <ExternalLink size={14} />
          </a>

          <a
            href="https://beito.com/apningstider-for-heisen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-700"
          >
            🕒 Åpningstider
            <ExternalLink size={14} />
          </a>

        </div>
      </div>

      <div className="mt-4 text-xs text-slate-500">
        🔄 Oppdateres automatisk hvert 5. minutt
        {lastUpdated && ` • Sist oppdatert ${lastUpdated}`}
      </div>
    </div>
  );
}
