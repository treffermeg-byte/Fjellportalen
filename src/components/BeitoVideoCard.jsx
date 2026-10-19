export default function BeitoVideoCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-3">
        📹 Beitostølen Video
      </h2>

      <p className="text-slate-600 mb-4">
        Video fra Beitostølen og området rundt.
      </p>

      <div className="aspect-video overflow-hidden rounded-2xl border mb-4">
        <iframe
          src="https://www.youtube.com/embed/FtIu4-7VYMs"
          title="Beitostølen Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web4 py-2 rounded-xl hover:bg-red-700"
      >
        Åpne på YouTube
      </a>
    </div>
  );
}
