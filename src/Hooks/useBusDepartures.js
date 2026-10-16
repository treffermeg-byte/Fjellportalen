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

        if (!response.ok) {
          throw new Error(
            `HTTP-feil: ${response.status}`
          );
        }

        const result = await response.json();

        const trips =
          result?.data?.trip?.tripPatterns || [];

        console.log("Entur trips:", trips);

        const busTrips = trips.filter(
          (trip) =>
            trip.legs &&
            trip.legs.length > 0
        );

        setDepartures(
          busTrips.length > 0
            ? busTrips
            : trips
        );
      } catch (error) {
        console.error(
          "Feil ved henting av bussavganger:",
          error
        );

        setDepartures([]);
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

  return {
    departures,
    loading,
  };
}
