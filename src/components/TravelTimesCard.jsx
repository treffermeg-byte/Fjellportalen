import { useEffect, useState } from "react";

const LOCATIONS = {
  asker: [10.435, 59.835],
  oslo: [10.752, 59.913],
  tonsberg: [10.407, 59.267],
  beitostolen: [8.906, 61.249],
  loen: [6.857, 61.873],
};

async function getTravelTime(start, end) {
  const response = await fetch(
    `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=false`
  );

  const data = await response.json();

  if (!data.routes?.length) {
    return "Ukjent";
  }

  const seconds = data.routes[0].duration;

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.round((seconds % 3600) / 60);

  return `${hours} t ${minutes} min`;
}

export default function TravelTimesCard() {
  const [times, setTimes] = useState({
    askerBeito: "Laster...",
    osloBeito: "Laster...",
    tonsbergBeito: "Laster...",
    askerLoen: "Laster...",
    osloLoen: "Laster...",
    tonsbergLoen: "Laster...",
  });

  useEffect(() => {
    async function load() {
      const results = {
        askerBeito: await getTravelTime(
          LOCATIONS.asker,
          LOCATIONS.beitostolen
        ),

        osloBeito: await getTravelTime(
          LOCATIONS.oslo,
          LOCATIONS.beitostolen
        ),

        tonsbergBeito: await getTravelTime(
          LOCATIONS.tonsberg,
          LOCATIONS.beitostolen
        ),

        askerLoen: await getTravelTime(
          LOCATIONS.asker,
          LOCATIONS.loen
        ),

        osloLoen: await getTravelTime(
          LOCATIONS.oslo,
          LOCATIONS.loen
        ),

        tonsbergLoen: await getTravelTime(
          LOCATIONS.tonsberg,
          LOCATIONS.loen
        ),
      };

      setTimes(results);
    }

    load();
  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-xl mb-6">
        🚗 Estimerte kjøretider
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">
            🏔️ Beitostølen
          </h3>

          <div className="space-y-3">
            <div className="border rounded-xl p-3">
              📍 Asker
              <div className="font-bold">
                {times.askerBeito}
              </div>
            </div>

            <div className="border rounded-xl p-3">
              📍 Oslo
              <div className="font-bold">
                {times.osloBeito}
              </div>
            </div>

            <div className="border rounded-xl p-3">
              📍 Tønsberg
              <div className="font-bold">
                {times.tonsbergBeito}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            🏞️ Loen
          </h3>

          <div className="space-y-3">
            <div className="border rounded-xl p-3">
              📍 Asker
              <div className="font-bold">
                {times.askerLoen}
              </div>
            </div>

            <div className="border rounded-xl p-3">
              📍 Oslo
              <div className="font-bold">
                {times.osloLoen}
              </div>
            </div>

            <div className="border rounded-xl p-3">
              📍 Tønsberg
              <div className="font-bold">
                {times.tonsbergLoen}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}