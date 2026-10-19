export default function LoenVideoCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">

      <h2 className="text-2xl font-bold mb-3">
        📹 Loen Skylift Video
      </h2>

      <p className="text-slate-600 mb-4">
        Video fra Loen Skylift.
      </p>

      <div className="aspect-video rounded-2xl overflow-hidden border mb-4">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/v7kOOs-Rx4Y"
          title="Loen Skylift Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ▶ Åpne på YouTube
      </a>

    </div>
  );
}
``
