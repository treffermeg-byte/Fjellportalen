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
          className="relative h-56 rounded-3xl overflow-hidden block"
          style={{
            backgroundImage:
              "url('/images/valdresflye.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/45"></div>

          <div className="relative h-full p-6 flex flex-col justify-end text-white">
            <div className="font-bold text-3xl">
              🏔️ Valdresflye
            </div>

            <div className="font-bold text-green-300 mt-2">
              🟢 Åpen
            </div>

            <div className="text-white/80">
              FV51
            </div>
          </div>
        </a>

        <a
          href="https://www.vegvesen.no/trafikk/fjelloverganger/91163580?lat=61.98556&lng=7.53474&zoom=9"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-56 rounded-3xl overflow-hidden block"
          style={{
            backgroundImage:
              "url('/images/strynfjellet.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/45"></div>

          <div className="relative h-full p-6 flex flex-col justify-end text-white">
            <div className="font-bold text-3xl">
              ❄️ Strynfjellet
            </div>

            <div className="font-bold text-green-300 mt-2">
              🟢 Åpen
            </div>

            <div className="text-white/80">
              RV15
            </div>
          </div>
        </a>

      </div>
    </div>
  );
}
``
