export default function BussCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-4">
        🚌 Bussplanlegger
      </h2>

      <a
        href="https://entur.no"
        target="_blank"
        rel="noopener noreferrer"
        className="
          block
          rounded-2xl
          bg-slate-100
          px-4
          py-4
          text-lg
          font-semibold
          text-blue-700
          hover:bg-slate-200
          hover:text-blue-900
          transition
        "
      >
        📍 Oslo → Beitostølen / Stryn
      </a>
    </div>
  );
}
