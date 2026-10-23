export default function FjellturerCard() {
  const turer = [
    { navn: "🥾 Synshorn", bilde: "/Synshorn.jpg" },
    { navn: "🥾 Bitihorn", bilde: "/Bitihorn.jpg" },
    { navn: "🥾 Knutshøe", bilde: "/Knutshøe.jpg" },
    { navn: "🚵🥾 Slettefjellet", bilde: "/Slettefjell.jpg" },
    { navn: "🥾 Besseggen", bilde: "/Besseggen.jpg" },
    { navn: "🚵 Øyangen rundt", bilde: "/Øyangen.jpg" },
  ];

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-md text-white"
      style={{
        backgroundImage: "url('/Sko.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 p-5">
        <h2 className="mb-4 text-xl font-bold">
          🥾 Fjellturer ved Beitostølen
        </h2>

        <div className="space-y-2">
          {turer.map((tur) => (
            <a
              key={tur.navn}
              href={tur.bilde}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-white/10 px-3 py-2 transition hover:bg-white/20"
            >
              {tur.navn}
            </a>
          ))}
        </div>

        <p className="mt-3 text-sm text-slate-200">
          Klikk på en tur for å åpne turinformasjon.
        </p>
      </div>
    </div>
  );
}
