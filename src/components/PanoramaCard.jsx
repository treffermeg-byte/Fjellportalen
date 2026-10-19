import { useState } from "react";

export default function PanoramaCard() {
  const [iframeFailed, setIframeFailed] =
    useState(false);

  return (
    <div className="bg-white rounded-3xl p-6 shadow">

      <h2 className="text-2xl font-bold mb-3">
        📹 Loen Skylift Panorama
      </h2>

      <p className="text-slate-600 mb-4">
        Live panoramautsikt fra Hoven.
      </p>

      {!iframeFailed ? (
        <div className="aspect-video rounded-2xl overflow-hidden border">

          <iframe
            src="https://loenskylift.panomax.com/"
            title="Loen Skylift Panorama"
            width="100%"
            height="100%"
            onError={() =>
              setIframeFailed(true)
            }
          />

        </div>
      ) : (
        <div className="border rounded-2xl p-6 bg-slate-50">

          <p className="text-slate-700 mb-3">
            Panoramaet kan dessverre ikke vises direkte i Fjellportalen.
          </p>

          <a
            href="https://loenskylift.panomax.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            ▶ Åpne panorama
          </a>

        </div>
      )}

      <div className="mt-4">
        <a
          href="https://loenskylift.panomax.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Åpne panorama i eget vindu
        </a>
      </div>

    </div>
  );
}
