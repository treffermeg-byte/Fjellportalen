export default function WeatherCard({
  title,
  temp,
  wind,
  sunrise,
  sunset,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-xl mb-4">
        {title}
      </h2>

      <div className="space-y-2">
        <div>🌦️ Temperatur: {temp}°C</div>
        <div>💨 Vind: {wind} m/s</div>
        <div>🌅 Soloppgang: {sunrise}</div>
        <div>🌇 Solnedgang: {sunset}</div>
      </div>
    </div>
  );
}