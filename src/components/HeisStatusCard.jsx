import { useEffect, useState } from "react";

export default function HeisStatusCard() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function loadStatus() {
      try {
        const response = await fetch(
          "https://api.fnugg.no/get/resort/15"
        );

        const data = await response.json();

        setStatus({
          resortOpen: data?._source?.resort_open,
          liftsOpen: data?._source?.lifts?.open ?? "--",
          liftsTotal: data?._source?.lifts?.count ?? "--",
          slopesOpen: data?._source?.slopes?.open ?? "--",
          slopesTotal: data?._source?.slopes?.count ?? "--",
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadStatus();
  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        🚠 Heisstatus
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="border rounded-2xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">
              🎿 Beitostølen
            </h3>

            <span className="font-bold">
              {status?.resortOpen
                ? "🟢 Åpent"
                : "🔴 Stengt"}
            </span>
          </div>

          <div className="space-y-2">
            <div>
              🚠 Heiser: {status?.liftsOpen}/
              {status?.liftsTotal}
            </div>

            <div>
              ⛷️ Nedfarter: {status?.slopesOpen}/
              {status?.slopesTotal}
            </div>
          </div>
        </div>

        <div className="border rounded-2xl p-4">
          <h3 className="font-bold mb-3">
            🏞️ Loen Skylift
          </h3>

          <div className="space-y-2">
            <div>⏰ 09:00 - 22:00</div>

            <div>
              🚠 Siste retur: 22:30
            </div>

            <a
              href="https://www.loenskylift.no/opningstider-og-prisar"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              🔗 Åpningstider
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}