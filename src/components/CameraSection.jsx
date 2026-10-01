export default function CameraSection() {
  const beitostolenCameras = [
    {
      title: "📸 Beitostølen Sentrum",
      image:
        "https://beito.com/bilde/bilde.jpg",
      link:
        "https://beito.com/bilde/bilde.jpg",
    },
    {
      title: "📸 Slettefjell",
      image:
        "https://beito.com/bilde/uppload/raudalenalpin.jpg",
      link:
        "https://beito.com/bilde/uppload/raudalenalpin.jpg",
    },
    {
      title: "📸 Valdresflye",
      image:
        "https://kamera.atlas.vegvesen.no/api/images/3000012_1",
      link:
        "https://www.vegvesen.no/trafikk/fjelloverganger/91146625",
    },
  ];

  const loenCameras = [
    {
      title: "📸 Fosnes",
      image:
        "https://kamera.atlas.vegvesen.no/api/images/3000010_1",
      link:
        "https://kamera.atlas.vegvesen.no/api/images/3000010_1",
    },
    {
      title: "📸 Ospeli",
      image:
        "https://kamera.atlas.vegvesen.no/api/images/3000864_1",
      link:
        "https://kamera.atlas.vegvesen.no/api/images/3000864_1",
    },
    {
      title: "📸 Kvitenova",
      image:
        "https://kamera.atlas.vegvesen.no/api/images/1429008_1",
      link:
        "https://kamera.atlas.vegvesen.no/api/images/1429008_1",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        📸 Kameraer
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">

        <div>
          <h3 className="font-bold text-lg mb-4">
            🏔️ Beitostølen
          </h3>

          <div className="grid gap-4">
            {beitostolenCameras.map((camera) => (
              <a
                key={camera.title}
                href={camera.link}
                target="_blank"
                rel="noreferrer"
                className
                />

                <div className="p-3">
                  <div className="font-semibold">
                    {camera.title}
                  </div>

                     </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">
            🏞️ Loen
          </h3>

          <div className="grid gap-4">
            {loenCameras.map((camera) => (
              <a
                key={camera.title}
                href={camera.link}
                target="_blank"
   
                  className="w-full h-48 object-cover"
                />

                <div className="p-3">
                  <div className="font-semibold">
                    {camera.title}
                  </div>

                     </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}