export default function DrivstoffLadingCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ⛽ Drivstoff & Lading
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🎿 Mot Beitostølen
          </h3>

          <div className="space-y-2">
            <div>⛽ Circle K Hønefoss</div>
            <div>⛽ YX Leira</div>
            <div>⚡ Tesla Supercharger Fagernes</div>
          </div>
        </div>

        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🏞️ Mot Loen / Bødal
          </h3>

          <div className="space-y-2">
            <div>⛽ Circle K Otta</div>
            <div>⛽ Shell Stryn</div>
            <div>⚡ Tesla Supercharger Otta</div>
            <div>⚡ Recharge Stryn</div>
          </div>
        </div>

      </div>
    </div>
  );
}