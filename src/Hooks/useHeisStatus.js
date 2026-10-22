import { useEffect, useState } from "react";

export default function useHeisStatus() {
  const [status, setStatus] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const response = await fetch(
          "https://api.fnugg.no/get/resort/15"
        );

        const data = await response.json();

        setStatus({
          resortOpen: data?._source?.resort_open,
          liftsOpen: data?._source?.lifts?.open ?? "--",
          liftsTotal: data?._source?.lifts?.count ?? "--",
          slopesOpen: data?._source?.slopes?.open ?? "--",
          slopesTotal: data?._source?.slopes?.count ?? "--",
        });

        setLastUpdated(
          new Date().toLocaleTimeString("nb-NO", {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      } catch (error) {
        console.error("Kunne ikke hente heisstatus:", error);
      }
    };

    loadStatus();

    const interval = setInterval(
      loadStatus,
      5 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, []);

  return {
    status,
    lastUpdated,
  };
}
