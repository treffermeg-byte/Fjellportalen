export default function WeatherCard({
  title,
  temp,
  wind,
  sunrise,
  sunset,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 rounded-2xl p-4">
          <div className="text-slate-500 text-sm">
            Temperatur
          </div>

          <div className="text-3xl font-bold mt-1">
            {temp ?? "--"}°C
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4">
          <div className="text-slate-500 text-sm">
            Vind
          </div>

          <div className="text-3xl font-bold mt-1">
            {wind ?? "--"} m/s
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-4">
          <div className="text-slate-500 text-sm">
            🌅 Soloppgang
          </div>

          <div className="text-xl font-semibold mt-1">
            {sunrise || "--:--"}
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-4">
          <div className="text-slate-500 text-sm">
            🌇 Solnedgang
          </div>

          <div className="text-xl font-semibold mt-1">
            {sunset || "--:--"}
          </div>
        </div>
      </div>
    </div>
  );
}