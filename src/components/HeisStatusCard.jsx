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

        const conditions =
          data._source.conditions.combined.top;

        setStatus({
          liftsOpen: data._source.lifts.open,
          liftsTotal: data._source.lifts.count,

          slopesOpen: data._source.slopes.open,
          slopesTotal: data._source.slopes.count,

          resortOpen: data._source.resort_open,

          temperature:
            conditions.temperature?.value ?? "--",

          wind:
            conditions.wind?.mps ?? "--",

          condition:
            conditions.condition_description ??
            "Ingen status",

          openingDate:
            data._source.resort_opening_date,

          closingDate:
            data._source.resort_closing_date,
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

  const openingDate = status.openingDate
    ? new Date(status.openingDate).toLocaleDateString(
        "no-NO"
      )
    : "--";

  const closingDate = status.closingDate
    ? new Date(status.closingDate).toLocaleDateString(
        "no-NO"
      )
    : "--";

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-6">
        🚠 Heisstatus
      </h2>

      <div className="border rounded-2xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">
            🎿 Beitostølen
          </h3>

          <span
            className={
              status.resortOpen
                ? "text-green-600 font-bold"
                : "text-red-600 font-bold"
            }
          >
            {status.resortOpen
              ? "🟢 Åpent"
              : "🔴 Stengt"}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border rounded-xl p-3">
            🚠 Heiser
            <div className="font-bold text-xl">
              {status.liftsOpen}/{status.liftsTotal}
            </div>
          </div>

          <div className="border rounded-xl p-3">
            ⛷️ Nedfarter
            <div className="font-bold text-xl">
              {status.slopesOpen}/{status.slopesTotal}
            </div>
          </div>

          <div className="border rounded-xl p-3">
            🌡️ Temperatur
            <div className="font-bold text-xl">
              {status.temperature}°C
            </div>
          </div>

          <div className="border rounded-xl p-3">
            💨 Vind
            <div className="font-bold text-xl">
              {status.wind} m/s
            </div>
          </div>

        </div>

        <div className="border rounded-xl p-3 mt-4">
          <div className="font-semibold mb-1">
            ❄️ Forhold
          </div>

          <div className="text-slate-600">
            {status.condition}
          </div>
        </div>

        <div className="border rounded-xl p-3 mt-4">
          <div className="font-semibold mb-2">
            📅 Sesong
          </div>

          <div>
            Åpner: <strong>{openingDate}</strong>
          </div>

          <div>
            Stenger: <strong>{closingDate}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}import { useEffect, useState } from "react";

export default function HeisStatusCard() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function loadStatus() {
      try {
        const response = await fetch(
          "https://api.fnugg.no/get/resort/15"
        );

        const data = await response.json();

        const conditions =
          data._source.conditions.combined.top;

        setStatus({
          liftsOpen: data._source.lifts.open,
          liftsTotal: data._source.lifts.count,

          slopesOpen: data._source.slopes.open,
          slopesTotal: data._source.slopes.count,

          resortOpen: data._source.resort_open,

          temperature:
            conditions.temperature?.value ?? "--",

          wind:
            conditions.wind?.mps ?? "--",

          condition:
            conditions.condition_description ??
            "Ingen status",

          openingDate:
            data._source.resort_opening_date,

          closingDate:
            data._source.resort_closing_date,
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

  const openingDate = status.openingDate
    ? new Date(status.openingDate).toLocaleDateString(
        "no-NO"
      )
    : "--";

  const closingDate = status.closingDate
    ? new Date(status.closingDate).toLocaleDateString(
        "no-NO"
      )
    : "--";

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-6">
        🚠 Heisstatus
      </h2>

      <div className="border rounded-2xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">
            🎿 Beitostølen
          </h3>

          <span
            className={
              status.resortOpen
                ? "text-green-600 font-bold"
                : "text-red-600 font-bold"
            }
          >
            {status.resortOpen
              ? "🟢 Åpent"
              : "🔴 Stengt"}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border rounded-xl p-3">
            🚠 Heiser
            <div className="font-bold text-xl">
              {status.liftsOpen}/{status.liftsTotal}
            </div>
          </div>

          <div className="border rounded-xl p-3">
            ⛷️ Nedfarter
            <div className="font-bold text-xl">
              {status.slopesOpen}/{status.slopesTotal}
            </div>
          </div>

          <div className="border rounded-xl p-3">
            🌡️ Temperatur
            <div className="font-bold text-xl">
              {status.temperature}°C
            </div>
          </div>

          <div className="border rounded-xl p-3">
            💨 Vind
            <div className="font-bold text-xl">
              {status.wind} m/s
            </div>
          </div>

        </div>

        <div className="border rounded-xl p-3 mt-4">
          <div className="font-semibold mb-1">
            ❄️ Forhold
          </div>

          <div className="text-slate-600">
            {status.condition}
          </div>
        </div>

        <div className="border rounded-xl p-3 mt-4">
          <div className="font-semibold mb-2">
            📅 Sesong
          </div>

          <div>
            Åpner: <strong>{openingDate}</strong>
          </div>

          <div>
            Stenger: <strong>{closingDate}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}