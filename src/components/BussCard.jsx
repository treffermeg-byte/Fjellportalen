import useBusDepartures from "../Hooks/useBusDepartures";

export default function BussCard() {
  const {
    departures: beitoTrips,
    loading: beitoLoading,
  } = useBusDepartures(
    59.9106,
    10.7530,
    61.249,
    8.906
  );

  const {
    departures: strynTrips,
    loading: strynLoading,
  } = useBusDepartures(
    59.9106,
    10.7530,
    61.9045,
    6.7223
  );

  function formatTime(dateTime) {
    if (!dateTime) return "--:--";

    return new Date(dateTime).toLocaleTimeString(
      "nb-NO",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  }

  function renderTrips(trips) {
    if (!trips || trips.length === 0) {
      return (
        <div className="text-gray-500">
          Ingen avganger funnet
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {trips.slice(0, 3).map((trip, index) => (
          <div
            key={index}
            className="border rounded-xl p-3"
          >
            <div>
              🕒 Avgang:{" "}
              {formatTime(trip.expectedStartTime)}
            </div>

            <div>
              🏁 Ankomst:{" "}
              {formatTime(trip.expectedEndTime)}
            </div>

            <div>
              ⏱️ Reisetid:{" "}
              {Math.round(
                (trip.duration || 0) / 60
              )} min
            </div>

            <div>
              🚌{" "}
              {trip.legs?.[0]?.line?.publicCode ||
                trip.legs?.[0]?.line?.name ||
                "Ukjent"}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        🚌 Bussavganger
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏔️ Beitostølen
          </h3>

          {beitoLoading ? (
            <div>Laster avganger...</div>
          ) : (
            renderTrips(beitoTrips)
          )}
        </div>

        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏞️ Stryn
          </h3>

          {strynLoading ? (
            <div>Laster avganger...</div>
          ) : (
            renderTrips(strynTrips)
          )}
        </div>
      </div>
    </div>
  );
}
