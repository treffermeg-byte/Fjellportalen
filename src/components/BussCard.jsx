import useBusDepartures from "../Hooks/useBusDepartures";

export default function BussCard() {
  const journeys = useBusDepartures();

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        🚌 Buss til fjellet
      </h2>

      <div className="space-y-4">
        {journeys.map((trip, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4"
          >
            <div className="font-semibold">
              Tønsberg → Beitostølen
            </div>

            <div className="text-sm text-slate-600">
              Avgang:
              {" "}
              {new Date(
                trip.expectedStartTime
              ).toLocaleTimeString("no-NO", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>

            <div className="text-sm text-slate-600">
              Ankomst:
              {" "}
              {new Date(
                trip.expectedEndTime
              ).toLocaleTimeString("no-NO", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>

            <div className="text-sm text-slate-600">
              Reisetid:
              {" "}
              {Math.round(
                trip.duration / 60
              )}
              {" "}
              min
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}