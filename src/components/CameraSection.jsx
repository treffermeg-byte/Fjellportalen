export default function CameraSection() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        📸 Kameraer
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-2xl overflow-hidden">
          <img
            src="https://kamera.atlas.vegvesen.no/api/images/3000012_1"
            alt="Valdresflye"
            className="w-full h-64 object-cover"
          />

          <div className="p-4">
            <h3 className="font-semibold">
              📸 Valdresflye
            </h3>

            <p className="text-sm text-slate-500">
              Webkamera fra Statens vegvesen
            </p>

            <a
              href="https://www.vegvesen.no/trafikk"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 text-sm mt-2 inline-block hover:underline"
            >
              Åpne hos Vegvesenet →
            </a>
          </div>
        </div>

        <a
          href="https://loenskylift.panomax.com/mt-hoven"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl p-6 hover:bg-slate-50 transition block"
        >
          <div className="text-6xl text-center mb-4">
            🏞️
          </div>

          <h3 className="font-semibold text-center">
            Loen Skylift
          </h3>

          <p className="text-sm text-slate-500 text-center mt-2">
            Åpne panorama-kamera
          </p>

          <p className="text-blue-600 text-center text-sm mt-3">
            Åpne kamera →
          </p>
        </a>

      </div>
    </div>
  );
}