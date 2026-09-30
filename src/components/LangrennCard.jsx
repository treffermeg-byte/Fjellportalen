export default function LangrennCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl">
          🎿 Langrennsløyper Beitostølen
        </h2>

        <a
          href="https://www.loyper.net/embed/beitostolen?lat=61.25127572377559&lng=8.908920312628425&zoom=13.19458271965597"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          Åpne i ny fane
        </a>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl border">
        <iframe
          title="Langrennsløyper Beitostølen"
          src="https://www.loyper.net/embed/beitostolen?lat=61.25127572377559&lng=8.908920312628425&zoom=13.19458271965597"
          className="w-full h-[450px] md:h-[600px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}