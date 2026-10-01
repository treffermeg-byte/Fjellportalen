export default function CameraSection() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        📸 Kameraer
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-2xl overflow-hidden">
          <img
            src="https://beito.com/bilde/bilde.jpg"
            alt="Beitostølen Sentrum"
            className="w-full h-48 object-cover"
          />
          <div className="p-3 font-semibold">
            📸 Beitostølen Sentrum
          </div>
        </div>

        <div className="border rounded-2xl overflow-hidden">
          <img
            src="https://beito.com/bilde/uppload/raudalenalpin.jpg"
            alt="Slettefjell"
            className="w-full h-48 object-cover"
          />
          <div className="p-3 font-semibold">
            📸 Slettefjell
          </div>
        </div>

        <div className="border rounded-2xl overflow-hidden">
          <img
            src="https://kamera.atlas.vegvesen.no/api/images/3000012_1"
            alt="Valdresflye"
            className="w-full h-48 object-cover"
          />
          <div className="p-3 font-semibold">
            📸 Valdresflye
          </div>
        </div>

        <div className="border rounded-2xl overflow-hidden">
          <img
            src="https://kamera.atlas.vegvesen.no/api/images/3000010_1"
            alt="Fosnes"
            className="w-full h-48 object-cover"
          />
          <div className="p-3 font-semibold">
            📸 Fosnes
          </div>
        </div>

        <div className="border rounded-2xl overflow-hidden">
          <img
            src="https://kamera.atlas.vegvesen.no/api/images/3000864_1"
            alt="Ospeli bru"
            className="w-full h-48 object-cover"
          />
          <div className="p-3 font-semibold">
            📸 Ospeli bru
          </div>
        </div>

        <div className="border rounded-2xl overflow-hidden">
          <img
            src="https://kamera.atlas.vegvesen.no/api/images/1429008_1"
            alt="Kvitenova"
            className="w-full h-48 object-cover"
          />
          <div className="p-3 font-semibold">
            📸 Kvitenova
          </div>
        </div>

      </div>
    </div>
  );
}