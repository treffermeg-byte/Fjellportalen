export default function DrivstoffLadingCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        ⛽ Drivstoff & Lading
      </h2>

      <div className="space-y-3">
        <a
          href="https://maps.google.com/?q=Circle+K+Fagernes"
          target="_blank"
          rel="noopener noreferrer"
          className="block border rounded-xl p-4 hover:bg-slate-50"
        >
          ⛽ Circle K Fagernes
        </a>

        <a
          href="https://maps.google.com/?q=Circle+K+Lom"
          target="_blank"
          rel="noopener noreferrer"
          className="block border rounded-xl p-4 hover:bg-slate-50"
        >
          ⛽ Circle K Lom
        </a>

        <a
          href="https://maps.google.com/?q=Shell+Stryn"
          target="_blank"
          rel="noopener noreferrer"
          className="block border rounded-xl p-4 hover:bg-slate-50"
        >
          ⛽ Shell Stryn
        </a>
      </div>
    </div>
  );
}