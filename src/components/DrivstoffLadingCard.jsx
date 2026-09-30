export default function DrivstoffLadingCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ⛽ Drivstoff & Lading
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏔️ Mot Beitostølen
          </h3>

          <div className="space-y-3">
            <a
              href="https://maps.google.com/?q=Circle+K+Honefoss"
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl p-3 hover:bg-slate-50"
            >
              <div className="font-semibold">
                ⛽ Circle K Hønefoss
              </div>
              <div className="text-sm text-slate-500">
                📏 Ca. 190 km igjen
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Tesla+Supercharger+Gol"
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl p-3 hover:bg-slate-50"
            >
              <div className="font-semibold">
                ⚡ Tesla Supercharger Gol
              </div>
              <div className="text-sm text-slate-500">
                📏 Ca. 100 km igjen
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Circle+K+Fagernes"
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl p-3 hover:bg-slate-50"
            >
              <div className="font-semibold">
                ⛽ Circle K Fagernes
              </div>
              <div className="text-sm text-slate-500">
                📏 Ca. 35 km igjen
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=YX+Leira"
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl p-3 hover:bg-slate-50"
            >
              <div className="font-semibold">
                ⛽ YX Leira
              </div>
              <div className="text-sm text-slate-500">
                📏 Ca. 30 km igjen
              </div>
            </a>
          </div>
        </div>

        <div className="border rounded-2xl p-4">
          <h3 className="font-bold text-lg mb-4">
            🏞️ Mot Loen / Bødal
          </h3>

          <div className="space-y-3">
            <a
              href="https://maps.google.com/?q=Circle+K+Lom"
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl p-3 hover:bg-slate-50"
            >
              <div className="font-semibold">
                ⛽ Circle K Lom
              </div>
              <div className="text-sm text-slate-500">
                📏 Ca. 90 km igjen
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Tesla+Supercharger+Lom"
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl p-3 hover:bg-slate-50"
            >
              <div className="font-semibold">
                ⚡ Tesla Supercharger Lom
              </div>
              <div className="text-sm text-slate-500">
                📏 Ca. 90 km igjen
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Shell+Stryn"
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl p-3 hover:bg-slate-50"
            >
              <div className="font-semibold">
                ⛽ Shell Stryn
              </div>
              <div className="text-sm text-slate-500">
                📏 Ca. 15 km igjen
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Recharge+Stryn"
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl p-3 hover:bg-slate-50"
            >
              <div className="font-semibold">
                ⚡ Recharge Stryn
              </div>
              <div className="text-sm text-slate-500">
                📏 Ca. 15 km igjen
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}