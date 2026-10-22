export default function BussCard() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-lg"
      style={{
        backgroundImage: "url('/Buss.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />

      <div className="relative z-10 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          🚌 Bussplanlegger
        </h2>

        <p className="text-slate-100 text-sm mb-4">
          Planlegg buss- og kollektivreiser til Beitostølen, Stryn og andre
          destinasjoner via Entur.
        </p>

        <a
          href="https://entur.no"
          target="_blank"
          rel="noopener noreferrer"
          className="
            block
            rounded-2xl
            bg-black/30
            backdrop-blur-sm
            border
            border-white/20
            px-4
            py-4
            text-lg
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-black/40
            hover:border-white/40
            md:hover:-translate-y-0.5
            md:hover:shadow-xl
          "
        >
          📍 Oslo → Beitostølen / Stryn
        </a>
      </div>
    </div>
  );
}
