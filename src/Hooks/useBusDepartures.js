import { useState } from "react";

export default function useBusDepartures() {
  const [departures, setDepartures] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchTrips(destination) {
    try {
      setLoading(true);

      // Midlertidig eksempeldata
      if (destination === "beitostolen") {
        setDepartures([
          {
            departure: "08:15",
            arrival: "11:40",
            operator: "NOR-WAY NW150",
          },
          {
            departure: "12:15",
            arrival: "15:50",
            operator: "NOR-WAY NW150",
          },
        ]);
      } else {
        setDepartures([
          {
            departure: "09:00",
            arrival: "17:05",
            operator: "Vy Ekspress VY146",
          },
          {
            departure: "13:00",
            arrival: "21:10",
            operator: "Vy Ekspress VY146",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      setDepartures([]);
    } finally {
      setLoading(false);
    }
  }

  return {
    departures,
    loading,
    searchTrips,
  };
}
