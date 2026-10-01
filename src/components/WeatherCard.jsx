export default function WeatherCard({
  title,
  temp,
  wind,
  sunrise,
  sunset,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow h-full">
      <h2 className="font-bold text-xl mb-6">
        {title}
      </h2>

      <div className="flex items-center gap-6">
        <div className="text-6xl">
          🌦️
        </div>

        <div>
          <div className="text-5xl font-bold">
            {temp}°C
          </div>

          <div className="text-slate-600 mt-2">
            💨 {wind} m/s
          </div>
        </div>
      </div>

      <div className="border-t mt-6 pt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          🌅 Soloppgang
          <div className="font-semibold">
            {sunrise}
          </div>
        </div>

        <div>
          🌇 Solnedgang
          <div className="font-semibold">
            {sunset}
          </div>
        </div>
      </div>
    </div>
  );
}