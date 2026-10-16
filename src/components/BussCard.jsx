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
                (trip.duration || 0) / 
