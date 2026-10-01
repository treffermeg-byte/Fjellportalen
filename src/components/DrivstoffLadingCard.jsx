export default function DrivstoffLadingCard() {
  const beitostolenStops = [
    {
      name: "⛽ Circle K Hønefoss",
      distance: "Ca. 190 km igjen",
      link: "https://maps.google.com/?q=Circle+K+Honefoss",
    },
    {
      name: "⚡ Tesla Supercharger Hønefoss",
      distance: "Ca. 180 km igjen",
      link: "https://maps.google.com/?q=Tesla+Supercharger+Honefoss",
    },
    {
      name: "⛽ Circle K Fagernes",
      distance: "Ca. 35 km igjen",
      link: "https://maps.google.com/?q=Circle+K+Fagernes",
    },
    {
      name: "⛽ YX Leira",
      distance: "Ca. 30 km igjen",
      link: "https://maps.google.com/?q=YX+Leira",
    },
  ];

  const loenStops = [
    {
      name: "⛽ Circle K Lom",
      distance: "Ca. 90 km igjen",
      link: "https://maps.google.com/?q=Circle+K+Lom",
    },
    {
      name: "⚡ Tesla Supercharger Lom",
      distance: "Ca. 90 km igjen",
      link: "https://maps.google.com/?q=Tesla+Supercharger+Lom",
    },
    {
      name: "⛽ Circle K Automat Hjelledalen",
      distance: "Ca. 30 km igjen",
      link: "https://www.google.com/maps/place/Circle+K+Automat+Hjelledalen/",
    },
    {
      name: "⛽ Shell Stryn",
      distance: "Ca. 15 km igjen",
      link: "https://maps.google.com/?q=Shell+Stryn",
    },
    {
      name: "⚡ Recharge Stryn",
      distance: "Ca. 15 km igjen",
      link: "https://maps.google.com/?q=Recharge+Stryn",
    },
  ];

  const StopCard = ({ stop }) => {
    return (
      <a
        href={stop.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border rounded-xl p-3 hover
          📏 {stop.distance}
        </div>

        <div className="text-blue-600 text-sm mt-2">
          Åpne i Google Maps →
        </div>
      </a>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ⛽ Drivstoff & Lading
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏔️ Mot Beitostølen
          </h3>

          <div className="space-y-3">
            {beitostolenStops.map((stop) => (
              <StopCard
                key={stop.name}
                stop={stop}
              />
            ))}
          </div>
        </div>

        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏞️ Mot Loen / Bødal
          </h3>

          <div className="space-y-3">
            {loenStops.map((stop) => (
              <StopCard
                key={stop.name}
                stop={stop}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}