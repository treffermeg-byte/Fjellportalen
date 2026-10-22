function StoreLink({ name, url, icon = "🛒", note }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        bg-black/20
        backdrop-blur-sm
        border
        border-white/20
        p-4
        transition-all
        duration-300
        hover:bg-black/30
        hover:border-white/40
        md:hover:-translate-y-0.5
      "
    >
      <div>
        <div className="font-semibold text-white drop-shadow-md">
          {icon} {name}
        </div>

        {note && (
          <div className="text-sm text-amber-200 mt-1 drop-shadow-md">
            {note}
          </div>
        )}
      </div>

      <div className="font-medium text-white drop-shadow-md">
        🗺️ Kart
      </div>
    </a>
  );
}

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />

      <div className="relative z-10 p-6">
        <h2 className="text-2xl font-bold text-white drop-shadow-md mb-6">
          🛒 Butikker & Mat
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Loen / Stryn */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
            <h3 className="font-bold text-xl text-white drop-shadow-md mb-4">
              🌊 Loen / Stryn
            </h3>

            <div className="space-y-3">

              <StoreLink
                name="Joker Loen"
                note="🕒 08:00-20:00"
                url="https://www.google.com/maps/search/?api=1&query=Joker+Loen"
              />

              <StoreLink
                name="Rema 1000 Stryn"
                url="https://www.google.com/maps/search/?api=1&query=Rema+1000+Stryn"
              />

              <StoreLink
                name="Kiwi Stryn"
                url="https://www.google.com/maps/search/?api=1&query=Kiwi+Stryn"
              />

              <StoreLink
                name="Isehaug Kafeteria"
                icon="☕"
                url="https://www.google.com/maps/search/?api=1&query=Isehaug+Kafeteria+Stryn"
              />

            </div>
          </div>

          {/* Beitostølen */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
            <h3 className="font-bold text-xl text-white drop-shadow-md mb-4">
              🏔️ Beitostølen
            </h3>

            <div className="space-y-3">

              <StoreLink
                name="Spar"
                url="https://www.google.com/maps/search/?api=1&query=Spar+Beitostølen"
              />

              <StoreLink
                name="Extra"
                url="https://www.google.com/maps/search/?api=1&query=Extra+Beitostølen"
              />

              <StoreLink
                name="Kiwi"
                url="https://www.google.com/maps/search/?api=1&query=Kiwi+Beitostølen"
              />

              <StoreLink
                name="Vinmonopolet"
                icon="🍷"
                note="⚠️ Stengt tirsdager"
                url="https://www.google.com/maps/search/?api=1&query=Vinmonopolet+Beitostølen"
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
