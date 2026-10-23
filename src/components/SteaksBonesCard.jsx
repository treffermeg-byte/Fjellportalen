export default function SteaksBonesCard() {
  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-xl"
      style={{
        backgroundImage: "url('/SB.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative p-8 text-white">
        <h2 className="text-3xl font-bold mb-3">
          🥩 Steaks & Bones
        </h2>

        <p className="text-white/90 mb-2 font-semibold">
          Fantastisk mat og super service
        </p>

        <p className="text-white/80 mb-6">
          Perfekt avslutning etter en dag i fjellet, skiløypa eller på sykkel.
          Nyt saftige biffer, gode burgere og hyggelig atmosfære midt i
          Beitostølen.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://steaksandbones.no/meny.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-2xl bg-red-700 hover:bg-red-800 font-semibold transition"
          >
            🥩 Meny
          </a>

          <a
            href="https://steaksandbones.no/kontakt.html#book"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-2xl bg-green-700 hover:bg-green-800 font-semibold transition"
          >
            📅 Book bord
          </a>

          <a
            href="tel:90940500"
            className="px-4 py-3 rounded-2xl bg-slate-700 hover:bg-slate-800 font-semibold transition"
          >
            📞 909 40 500
          </a>
        </div>
      </div>
    </div>
  );
}
