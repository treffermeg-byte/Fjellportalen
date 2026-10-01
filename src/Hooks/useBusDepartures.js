import { useEffect, useState } from "react";

export default function useBusDepartures() {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    async function fetchTrips() {
      try {
        const query = {
          query: `
          {
            trip(
              from: {
                coordinates: {
                  latitude: 59.2675
                  longitude: 10.4076
                }
              }
              to: {
                coordinates: {
                  latitude: 61.249
                  longitude: 8.906
                }
              }
              numTripPatterns: 3
            ) {
              tripPatterns {
                duration
                expectedStartTime
                expectedEndTime
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

        const data = await response.json();

        setJourneys(
          data.data.trip.tripPatterns || []
        );
      } catch (err) {
        console.error(err);
      }
    }

    fetchTrips();

    const interval = setInterval(
      fetchTrips,
      300000
    );

    return () => clearInterval(interval);
  }, []);

  return journeys;
}