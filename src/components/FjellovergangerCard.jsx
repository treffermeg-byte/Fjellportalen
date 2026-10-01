export default function FjellovergangerCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-6">
        🚧 Fjelloverganger
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <a
          href="https://www.vegvesen.no/trafikk/fjelloverganger/91146625?lat=61.41104&lng=8.81768&zoom=10"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-2xl p-5 hover:bg-slate-50 transition"
        >
          <div className="font-bold text-lg">
            🏔️ Valdresflye
          </div>

          <div className="mt-3 text-green-600 font-bold">
            🟢 Åpen
          </div>

          <div className="text-sm text-slate-500 mt-2">
            FV51
          </div>
        </a>

        <a
          href="https://www.vegvesen.no/trafikk/fjelloverganger/91163580?lat=61.98556&lng=7.53474&zoom=9"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-2xl p-5 hover:bg-slate-50 transition"
        >
          <div className="font-bold text-lg">
            ❄️ Strynefjellet
          </div>

          <div className="mt-3 text-green-600 font-bold">
            🟢 Åpen
          </div>

          <div className="text-sm text-slate-500 mt-2">
            RV15
          </div>
        </a>
      </div>
    </div>
  );
}