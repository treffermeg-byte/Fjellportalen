export default function HytteklarCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ✅ Hytteklar?
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🎿 Beitostølen
          </h3>

          <div className="space-y-2">
            <div>🌦️ Temperatur: -2°C</div>
            <div>💨 Vind: 4 m/s</div>
            <div>🚠 Heiser: 0 / 7 åpne</div>
            <div>⛷️ Nedfarter: 0 / 23 åpne</div>
            <div>
              🏔️{" "}
              <a
                href="https://www.vegvesen.no/trafikk/fjelloverganger/91146625?lat=61.41104&lng=8.81768&zoom=10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Valdresflye
              </a>
            </div>
          </div>
        </div>

        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🏞️ Loen / Bødal
          </h3>

          <div className="space-y-2">
            <div>🌦️ Temperatur: 5°C</div>
            <div>💨 Vind: 2 m/s</div>
            <div>🚠 Loen Skylift: Åpen</div>
            <div>
              ❄️{" "}
              <a
                href="https://www.vegvesen.no/trafikk/fjelloverganger/91163580?lat=61.98556&lng=7.53474&zoom=9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Strynefjellet
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}