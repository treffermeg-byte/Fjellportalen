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
          liftsOpen: data._source.lifts.open,
          liftsTotal: data._source.lifts.count,
          slopesOpen: data._source.slopes.open,
          slopesTotal: data._source.slopes.count,
          resortOpen: data._source.resort_open,
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadStatus();
  }, []);

  if (!status) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow">
        Laster heisstatus...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-6">
        🚠 Heisstatus
      </h2>

      <div className="border rounded-2xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">
            🎿 Beitostølen
          </h3>

          <span
            className={
              status.resortOpen
                ? "text-green-600 font-bold"
                : "text-red-600 font-bold"
            }
          >
            {status.resortOpen ? "🟢 Åpent" : "🔴 Stengt"}
          </span>
        </div>

        <div className="space-y-2">
          <div>
            🚠 Heiser:{" "}
            <strong>
              {status.liftsOpen}/{status.liftsTotal}
            </strong>
          </div>

          <div>
            ⛷️ Nedfarter:{" "}
            <strong>
              {status.slopesOpen}/{status.slopesTotal}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}