export default function Schedule() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-white p-6">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold mt-8">
          My Schedule
        </h1>

        <p className="mt-2">
          Music in the Mountains Festival
        </p>

        <div className="mt-6 space-y-4">

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            <h2 className="font-bold">
              🎻 Tuesday
            </h2>
            <p>
              9:00 AM - Orchestra Rehearsal
            </p>
            <p>
              Harris Center
            </p>
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            <h2 className="font-bold">
              🎼 Wednesday
            </h2>
            <p>
              2:00 PM - Section Meeting
            </p>
            <p>
              Festival Hall
            </p>
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            <h2 className="font-bold">
              🎭 Friday
            </h2>
            <p>
              7:30 PM - Performance
            </p>
            <p>
              Veterans Memorial Auditorium
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}