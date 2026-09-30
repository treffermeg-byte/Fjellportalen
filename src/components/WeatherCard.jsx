export default function WeatherCard({
  title,
  temp,
  wind,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold mb-3">
        {title}
      </h2>

      <div className="text-4xl mb-2">
        🌦️
      </div>

      <p className="text-xl font-bold">
        {temp}°C
      </p>

      <p>
        💨 {wind} m/s
      </p>
    </div>
  );
}