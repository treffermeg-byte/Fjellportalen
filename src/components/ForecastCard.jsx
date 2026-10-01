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
          Laster prognosedata...
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {forecast.map((day) => (
            <div
              key={day.day}
              className="border rounded-2xl p-3 text-center"
            >
              <div className="text-3xl">
                {day.icon}
              </div>

              <div className="font-semibold mt-2">
                {day.day}
              </div>

              <div className="text-lg font-bold">
                {day.temp}°
              </div>

              <div>
                💨 {day.wind} m/s
              </div>

              {day.rain !== undefined && (
                <div>
                  🌧️ {day.rain} mm
                </div>
              )}

              {day.snow !== undefined && (
                <div className="text-cyan-600 font-semibold">
                  ❄️ {day.snow} cm
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}