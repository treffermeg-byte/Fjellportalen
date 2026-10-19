export default function BussCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">

      <h2 className="font-bold text-2xl mb-4">
        🚌 Bussplanlegger
      </h2>

      <p className="text-slate-600 mb-6">
        Søk etter buss og kollektivtransport hos Entur.
      </p>

      <div className="grid md:grid-cols-2 gap-4">

        <a
          href="https://entur.no"
          target="_blank"
          rel="noopener noreferrer"
          className="block border rounded-2xl p-4 hover:bg-slate-50"
        >
          <div className="font-bold text-lg">
            🎿 Oslo → Beitostølen
          </div>

          <div className="text-slate-600 mt-1">
            Søk reise hos Entur
          </div>
        </a>

        <a
          href="https://entur.no"
          target="_blank"
          rel="noopener noreferrer"
          className="block border rounded-2xl p-4 hover:bg-slate-50"
        >
          <div className="font-bold text-lg">
            🏞️ Oslo → Loen / Stryn
          </div>

          <div className="text-slate-600 mt-1">
            Søk reise hos Entur
          </div>
        </a>

      </div>

    </div>
  );
}
