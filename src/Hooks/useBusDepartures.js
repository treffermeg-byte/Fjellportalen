import { useEffect, useState } from "react";

export default function useBusDepartures(
  fromLat,
  fromLon,
  toLat,
  toLon
) {
  const [departures, setDepartures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrips() {
      try {
        setLoading(true);

        const query = {
          query: `
          {
            trip(
              from: {
                coordinates: {
                  latitude: ${fromLat}
                  longitude: ${fromLon}
                }
              }
              to: {
                coordinates: {
                  latitude: ${toLat}
                  longitude: ${toLon}
                }
              }
              numTripPatterns: 10
            ) {
              tripPatterns {
                expectedStartTime
                expectedEndTime
                duration

                legs {
                  mode

                  line {
                    publicCode
                    name
                  }
                }
              }
            }
          }
          `,
        };

        const response = await fetch(
          "https://api.entur.io/journey-planner/v3/graphql",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "ET-Client-Name": "fjellportalen-app",
            },
            body: JSON.stringify(query),
          }
        );

        const result = await response.json();

        const trips =
          result?.data?.trip?.tripPatterns || [];

        const busOnlyTrips = trips.filter(
          (trip) =>
            trip.legs &&
            trip.legs.length > 0 &&
            trip.legs.every(
              (leg) => leg.mode === "bus"
            )
        );

        setDepartures(busOnlyTrips);
      } catch (error) {
        console.error(
          "Feil ved henting av bussavganger:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchTrips();

    const interval = setInterval(
      fetchTrips,
      5 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, [fromLat, fromLon, toLat, toLon]);

  return { departures, loading };
}