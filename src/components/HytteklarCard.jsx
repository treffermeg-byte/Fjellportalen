export default function HytteklarCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ✅ Hytteklar?
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Beitostølen */}
        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🎿 Beitostølen
          </h3>

          <div className="space-y-2">
            <div>🌦️ Temperatur: -2°C</div>
            <div>💨 Vind: 4 m/s</div>
            <div>🚠 Heiser: 0 / 7 åpne</div>
            <div>⛷️ Nedfarter: 0 / 23 åpne</div>
            <div>❄️ Snødybde: 56 cm</div>
            <div>🏔️ Valdresflye: Se Vegvesenet</div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="font-semibold mb-2">
              🚗 Kjøretider
            </div>

            <div>Asker → Beitostølen: 3 t 05 m</div>
            <div>Oslo → Beitostølen: 3 t 20 m</div>
            <div>Tønsberg → Beitostølen: 3 t 45 m</div>
          </div>
        </div>

        {/* Loen */}
        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🏞️ Loen / Bødal
          </h3>

          <div className="space-y-2">
            <div>🌦️ Temperatur: 5°C</div>
            <div>💨 Vind: 2 m/s</div>
            <div>🚠 Loen Skylift: Åpen</div>
            <div>❄️ Strynefjellet: Se Vegvesenet</div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="font-semibold mb-2">
              🚗 Kjøretider
            </div>

            <div>Asker → Loen: 5 t 25 m</div>
            <div>Oslo → Loen: 5 t 45 m</div>
            <div>Tønsberg → Loen: 6 t 15 m</div>
          </div>
        </div>

      </div>
    </div>
  );
}