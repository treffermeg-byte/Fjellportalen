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
      className="relative rounded-3xl overflow-hidden shadow"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="relative p-6">
        <h2 className="text-2xl font-bold mb-6">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {forecast.map((day) => (
            <div
              key={day.day}
              className="bg-white/90 border rounded-3xl p-4 text-center backdrop-blur-sm"
            >
              <div className="text-4xl mb-2">
                {day.icon}
              </div>

              <div className="font-bold text-lg">
                {day.day}
              </div>

              <div className="mt-3">
                <div className="text-red-600 font-bold text-xl">
                  ↑ {day.maxTemp}°
                </div>

                <div className="text-blue-600 font-bold text-xl">
                  ↓ {day.minTemp}°
                </div>
              </div>

              <div className="mt-4 space-y-1 text-sm">
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
