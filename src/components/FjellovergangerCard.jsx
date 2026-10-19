export default function FjellovergangerCard() {
  const crossings = [
    {
      name: "Valdresflye",
      road: "FV51",
      status: "Åpen",
      statusColor: "text-green-300",
      image: "/images/valdresflye.jpg",
      icon: "🏔️",
      url: "https://www.vegvesen.no/trafikk/fjelloverganger/91146625?lat=61.41104&lng=8.81768&zoom=10",
    },
    {
      name: "Strynfjellet",
      road: "RV15",
      status: "Åpen",
      statusColor: "text-green-300",
      image: "/images/strynfjellet.jpg",
      icon: "❄️",
      url: "https://www.vegvesen.no/trafikk/fjelloverganger/91163580?lat=61.98556&lng=7.53474&zoom=9",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-6">
        🚧 Fjelloverganger
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {crossings.map((crossing) => (
          <a
            key={crossing.name}
            href={crossing.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-64 rounded-3xl overflow-hidden shadowhover:scale-105"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative h-full p-6 flex flex-col justify-between text-white">
              <div className="self-start bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                {crossingg.icon}
                </div>

                <h3 className="text-3xl font-bold">
                  {crossing.name}
                </h3>

                <div className="mt-2 text-white/90">
                  {crossing.road}
                </div>

                <div
                  className={`font-bold mt-2 ${crossing.statusColor}`}
                >
                  {crossing.status}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
