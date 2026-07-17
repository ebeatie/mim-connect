export default function TodayCard() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-slate-800 text-white rounded-3xl shadow-xl p-8 mb-10">

      <p className="uppercase text-sm tracking-widest text-indigo-200">
        Today's Festival
      </p>

      <h2 className="text-3xl font-bold mt-2">
        Orchestra Rehearsal
      </h2>

      <p className="mt-2 text-lg text-slate-200">
        Today • 2:00 PM
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6">

        <div>
          <p className="text-indigo-200 text-sm">
            Venue
          </p>

          <p className="text-xl font-semibold">
            Kincaid Hall
          </p>
        </div>

        <div>
          <p className="text-indigo-200 text-sm">
            Check-Ins
          </p>

          <p className="text-xl font-semibold">
            43 / 51
          </p>
        </div>

      </div>

    </div>
  );
}