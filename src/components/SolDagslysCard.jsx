export default function SolDagslysCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-6">
        🌅 Sol & dagslys
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🏔️ Beitostølen
          </h3>

          <div className="space-y-2">
            <div>🌅 Soloppgang: 07:28</div>
            <div>🌇 Solnedgang: 18:43</div>
          </div>
        </div>

        <div className="border rounded-2xl p-5">
          <h3 className="font-bold text-xl mb-4">
            🏞️ Loen
          </h3>

          <div className="space-y-2">
            <div>🌅 Soloppgang: 07:32</div>
            <div>🌇 Solnedgang: 18:51</div>
          </div>
        </div>

      </div>
    </div>
  );
}