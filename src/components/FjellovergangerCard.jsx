export default function FjellovergangerCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        🚧 Fjelloverganger
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <a
          href="https://www.vegvesen.no/trafikk/fjelloverganger/91146625?lat=61.41104&lng=8.81768&zoom=10"
          target="_blank"
          rel="noreferrer"
          className="block border rounded-2xl p-4 hover:bg-slate-50 transition"
        >
          <div className="font-semibold text-lg">
            🏔️ Valdresflye
          </div>

          <div className="text-slate-500 mt-1">
            Åpne fjellovergang hos Vegvesenet →
          </div>
        </a>

        <a
          href="https://www.vegvesen.no/trafikk/fjelloverganger/91163580?lat=61.98556&lng=7.53474&zoom=9"
          target="_blank"
          rel="noreferrer"
          className="block border rounded-2xl p-4 hover:bg-slate-50 transition"
        >
          <div className="font-semibold text-lg">
            ❄️ Strynefjellet
          </div>

          <div className="text-slate-500 mt-1">
            Åpne fjellovergang hos Vegvesenet →
          </div>
        </a>

      </div>
    </div>
  );
}