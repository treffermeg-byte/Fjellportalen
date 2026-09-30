export default function WeatherCard({
  title,
  temp,
  wind,
  sunrise,
  sunset,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold mb-3">
        {title}
      </h2>

      <div className="text-4xl mb-2">
        🌦️
      </div>

      <p className="text-3xl font-bold">
        {temp}°C
      </p>

      <p className="mb-4">
        💨 {wind} m/s
      </p>

      <div className="border-t pt-3 text-sm">
        <div>🌅 Soloppgang: {sunrise}</div>
        <div>🌇 Solnedgang: {sunset}</div>
      </div>
    </div>
  );
}