export default function CameraSection() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        📸 Kameraer
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-3">
            🏔️ Beitostølen
          </h3>

          <a
            href="https://beito.com/bilde/bilde.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Åpne live-kamera →
          </a>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-3">
            📸 Valdresflye
          </h3>

          <a
            href="https://www.vegvesen.no/trafikk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Åpne kamera →
          </a>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-3">
            🌉 Ospeli bru
          </h3>

          <a
            href="https://www.vegvesen.no/trafikk/vaerveikamera/3000864?lng=7.26244&lat=61.93796&zoom=10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Åpne kamera →
          </a>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-3">
            📷 Fosnes
          </h3>

          <a
            href="https://www.vegvesen.no/trafikk/vaerveikamera/3000010?lng=7.05033&lat=61.91033&zoom=10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Åpne kamera →
          </a>
        </div>
      </div>
    </div>
  );
}