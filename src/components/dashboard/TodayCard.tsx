export default function TodayCard() {
  return (
    <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Today
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            Friday, July 17
          </h2>

          <p className="mt-2 text-slate-500">
            Festival Day 1
          </p>
        </div>

        <div className="text-5xl">
          🎻
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">

        <p className="text-sm uppercase tracking-wide text-slate-500">
          Next Event
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-slate-800">
          Orchestra Rehearsal
        </h3>

        <p className="mt-3 text-lg text-slate-600">
          2:00 PM • Kincaid Hall
        </p>

      </div>

    </div>
  );
}