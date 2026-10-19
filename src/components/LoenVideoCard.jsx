export default function LoenVideoCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-3">
        Loen Skylift Video
      </h2>

      <p className="text-slate-600 mb-4">
        Video fra Loen Skylift og området rundt.
      </p>

      <div className="bg-slate-100 rounded-2xl p-6 mb-4 text-center">
        <a
          href="https://www.youtube.com/watch?v=v7kOOs-Rx4Y"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
        >
          Åpne video på YouTube
        </a>
      </div>
    </div>
  );
}
