import { useEffect, useState } from "react";

export default function useBeitostolenStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function loadStatus() {
      try {
        const response = await fetch(
          "https://api.fnugg.no/get/resort/15"
        );

        const data = await response.json();

        setStatus({
          resortOpen:
            data?._source?.resort_open,

          liftsOpen:
            data?._source?.lifts?.open ?? 0,

          liftsTotal:
            data?._source?.lifts?.count ?? 0,

          slopesOpen:
            data?._source?.slopes?.open ?? 0,

          slopesTotal:
            data?._source?.slopes?.count ?? 0,
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadStatus();
  }, []);

  return status;
}
