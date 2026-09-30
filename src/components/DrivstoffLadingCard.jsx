export default function DrivstoffLadingCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ⛽ Drivstoff & Lading
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <a
          href="https://maps.google.com/?q=Circle+K+Fagernes"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-xl p-4 hover:bg-slate-50 block"
        >
          <div className="font-semibold">
            ⛽ Circle K Fagernes
          </div>
          <div className="text-slate-500 text-sm">
            Drivstoff og hurtiglading
          </div>
        </a>

        <a
          href="https://maps.google.com/?q=Circle+K+Lom"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-xl p-4 hover:bg-slate-50 block"
        >
          <div className="font-semibold">
            ⛽ Circle K Lom
          </div>
          <div className="text-slate-500 text-sm">
            Drivstoff og pause
          </div>
        </a>
      </div>
    </div>
  );
}