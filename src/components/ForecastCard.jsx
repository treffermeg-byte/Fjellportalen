export default function ForecastCard({
  title,
  forecast,
}) {
  const backgroundImage =
    title.includes("Beitostølen")
      ? "/Beitolenvær.jpg"
      : "/Loenvær.jpg";

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-xl"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">
          {title}
        </h2>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
          {forecast.map((day) => (
            <div
              key={day.day}
              className="
                bg-black/35
                backdrop-blur-md
                border
                border-white/20
                rounded-3xl
                p-5
                text-center
                shadow-lg
              "
            >
              <div className="text-5xl mb-3">
                {day.icon}
              </div>

              <div className="font-bold text-xl">
                {day.day}
              </div>

              <div className="mt-4">
                <div className="text-red-300 font-bold text-2xl">
                  ↑ {day.maxTemp}°
                </div>

                <div className="text-blue-300 font-bold text-2xl">
                  ↓ {day.minTemp}°
                </div>
              </div>

              <div className="mt-4 space-y-2 text-base">
                <div>
                  💨 {day.wind} m/s
                </div>

                <div>
                  🌧️ {day.precipitation} mm
                </div>

                <div>
                  ❄️ {day.newSnow} cm
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
