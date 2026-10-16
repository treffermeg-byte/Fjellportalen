import useBusDepartures from "../Hooks/useBusDepartures";

export default function BussCard() {
  const {
    departures: osloBeitoTrips,
    loading: osloBeitoLoading,
  } = useBusDepartures(
    59.9127, // Oslo Bussterminal
    10.7600,
    61.249,
    8.906
  );

  const {
    departures: tonsbergBeitoTrips,
    loading: tonsbergBeitoLoading,
  } = useBusDepartures(
    59.2675, // Tønsberg rutebilstasjon
    10.4076,
    61.249,
    8.906
  );

  const {
    departures: tonsbergStrynTrips,
    loading: tonsbergStrynLoading,
  } = useBusDepartures(
    59.2675, // Tønsberg rutebilstasjon
    10.4076,
    61.9045, // Stryn rutebilstasjon
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

  function renderTrips(trips, loading) {
    if (loading) {
      return <div>Laster avganger...</div>;
    }

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
              {formatTime(
                trip.expectedStartTime
              )}
            </div>

            <div>
              🏁 Ankomst:{" "}
              {formatTime(
                trip.expectedEndTime
              )}
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
                "Ukjent linje"}
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

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏙️ Oslo Bussterminal → Beitostølen
          </h3>

          {renderTrips(
            osloBeitoTrips,
            osloBeitoLoading
          )}
        </div>

        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏔️ Tønsberg → Beitostølen
          </h3>

          {renderTrips(
            tonsbergBeitoTrips,
            tonsbergBeitoLoading
          )}
        </div>

        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏞️ Tønsberg → Stryn
          </h3>

          {renderTrips(
            tonsbergStrynTrips,
            tonsbergStrynLoading
          )}
        </div>
      </div>
    </div>
  );
}
``
