export default function ButikkerCard() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-lg"
      style={{
        backgroundImage: "url('/Butikk.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />

      
      <div className="relative z-10 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          🛒 Butikker & Mat
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Loen / Stryn */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
            <h3 className="font-bold text-xl text-white mb-4">
              🌊 Loen / Stryn
            </h3>

            <div className="space-y-3">

              <a
                href="https://www.google.com/maps/place/Joker+Loen/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-black/30 border border-white/20 p-3 text-white transition-all duration-300 hover:bg-black/40 hover:border-white/40"
              >
                <div className="font-semibold">
                  🛒 Joker Loen
                </div>

                <div className="text-sm text-slate-200">
                  🕒 08:00–20:00
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/REMA+1000+STRYN/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-black/30 border border-white/20 p-3 text-white transition-all duration-300 hover:bg-black/40 hover:border-white/40"
              >
                <div className="font-semibold">
                  🛒 Rema 1000 Stryn
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/KIWI+Stryn/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-black/30 border border-white/20 p-3 text-white transition-all duration-300 hover:bg-black/40 hover:border-white/40"
              >
                <div className="font-semibold">
                  🛒 Kiwi Stryn
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/Isehaug+Kafeteria+AS/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-black/30 border border-white/20 p-3 text-white transition-all duration-300 hover:bg-black/40 hover:border-white/40"
              >
                <div className="font-semibold">
                  ☕ Isehaug Kafeteria
                </div>
              </a>

            </div>
          </div>

          {/* Beitostølen */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
            <h3 className="font-bold text-xl text-white mb-4">
              🏔️ Beitostølen
            </h3>

            <div className="space-y-3">

              <a
                href="https://www.google.com/maps/place/SPAR+Beitost%C3%B8len/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-black/30 border border-white/20 p-3 text-white transition-all duration-300 hover:bg-black/40 hover:border-white/40"
              >
                <div className="font-semibold">
                  🛒 Spar
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/Extra+Beitost%C3%B8len/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-black/30 border border-white/20 p-3 text-white transition-all duration-300 hover:bg-black/40 hover:border-white/40"
              >
                <div className="font-semibold">
                  🛒 Extra
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/KIWI+Beitost%C3%B8len/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-black/30 border border-white/20 p-3 text-white transition-all duration-300 hover:bg-black/40 hover:border-white/40"
              >
                <div className="font-semibold">
                  🛒 Kiwi
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/Vinmonopolet/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-black/30 border border-amber-400/40 p-3 text-white transition-all duration-300 hover:bg-black/40"
              >
                <div className="font-semibold">
                  🍷 Vinmonopolet
                </div>

                <div className="text-sm text-amber-200">
                  ⚠️ Stengt tirsdager
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
