export default function ForecastCard({
  title,
  forecast = [],
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-xl mb-4">
        {title}
      </h2>

      {forecast.length === 0 ? (
        <p className="text-slate-500">
          Laster prognose...
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {forecast.map((day, index) => (
            <div
              key={`${day.day}-${index}`}
              className="border rounded-2xl p-4 text-center"
            >
              <div className="text-4xl mb-2">
                {day.icon || "🌦️"}
              </div>

              <div className="font-semibold">
                {day.day}
              </div>

              <div className="text-lg font-bold text-red-600 mt-2">
                ↑ {day.maxTemp}°
              </div>

              <div className="text-lg font-bold text-blue-600">
                ↓ {day.minTemp}°
              </div>

              <div className="text-slate-600 mt-2">
                💨 {day.wind} m/s
              </div>

              <div className="text-blue-600 mt-1">
                🌧️ {day.precipitation ?? 0} mm
              </div>

              <div className="text-cyan-600 font-semibold mt-1">
                ❄️ {day.newSnow ?? 0} cm
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}