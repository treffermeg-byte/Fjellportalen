export default function DrivstoffLadingCard() {
  const stations = [
    {
      name: "⛽ Circle K Fagernes",
      description: "Drivstoff og hurtiglading",
      url: "https://maps.google.com/?q=Circle+K+Fagernes",
    },
    {
      name: "⚡ Tesla Supercharger Fagernes",
      description: "Tesla hurtiglading",
      url: "https://maps.google.com/?q=Tesla+Supercharger+Fagernes",
    },
    {
      name: "⛽ Circle K Lom",
      description: "Drivstoff og pause",
      url: "https://maps.google.com/?q=Circle+K+Lom",
    },
    {
      name: "⚡ Tesla Supercharger Lom",
      description: "Tesla hurtiglading",
      url: "https://maps.google.com/?q=Tesla+Supercharger+Lom",
    },
    {
      name: "⛽ Shell Stryn",
      description: "Drivstoff, mat og pause",
      url: "https://maps.google.com/?q=Shell+Stryn",
    },
    {
      name: "⚡ Recharge Stryn",
      description: "Hurtiglading for elbil",
      url: "https://maps.google.com/?q=Recharge+Stryn",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ⛽ Drivstoff & Lading
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {stations.map((station) => (
          <a
            key={station.name}
            href={station.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-xl p-4 hovertation.description}
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