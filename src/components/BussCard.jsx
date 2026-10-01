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
    departures: loenTrips,
    loading: loenLoading,
  } = useBusDepartures(
    59.9106,
    10.7530,
    61.873,
    6.857
  );

  function formatTime(dateTime) {
    return new Date(dateTime).toLocaleTimeString(
      "no-NO",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
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

          {beitoLoading && (
            <div>Laster avganger...</div>
          )}

          <div className="space-y-3">
            {beitoTrips.slice(0, 3).map((trip, index) => (
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
                    trip.duration / 60
                  )} min
                </div>

                <div>
                  🚌
                  {" "}
                  {trip.legs?.[0]?.line?.publicCode}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏞️ Loen
          </h3>

          {loenLoading && (
            <div>Laster avganger...</div>
          )}

          <div className="space-y-3">
            {loenTrips.slice(0, 3).map((trip, index) => (
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
                    trip.duration / 60
                  )} min
                </div>

                <div>
                  🚌
                  {" "}
                  {trip.legs?.[0]?.line?.publicCode}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}