export default function DrivstoffLadingCard() {
  const stations = [
    {
      name: "⛽ Circle K Fagernes",
      description: "Drivstoff og hurtiglading",
      url: "https://maps.google.com/?q=Circle+K+Fagernes",
    },
    {
      name: "⚡ Tesla Supercharger Gol",
      description: "Tesla Supercharger",
      url: "https://maps.google.com/?q=Tesla+Supercharger+Gol",
    },
    {
      name: "⚡ Mer Otta",
      description: "Hurtiglading for elbil",
      url: "https://maps.google.com/?q=Mer+Ladestasjon+Otta",
    },
    {
      name: "⛽ Shell Skei",
      description: "Drivstoff, mat og pause",
      url: "https://maps.google.com/?q=Shell+Skei",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ⛽ Drivstoff og lading
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {stations.map((station) => (
          <a
            key={station.name}
            href={station.url}
            target="_blank"
            rel="noreferrer       <div className="text-slate-500 text-sm mt-1">
              {station.description}
            </div>

            <div className="text-blue-600 text-sm mt-3">
              Åpne i Google Maps →
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}