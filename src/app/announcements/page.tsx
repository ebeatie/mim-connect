export default function Announcements() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-white p-6">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold mt-8">
          Announcements
        </h1>

        <p className="mt-2">
          Festival updates and important information
        </p>

        <div className="mt-6 space-y-4">

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            <h2 className="font-bold">
              🎻 Welcome to Music in the Mountains
            </h2>
            <p>
              Check in at the theatre when you arrive.
            </p>
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            <h2 className="font-bold">
              🏠 Housing Reminder
            </h2>
            <p>
              Host family assignments are available in your profile.
            </p>
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            <h2 className="font-bold">
              📣 Festival Update
            </h2>
            <p>
              Check this page daily for schedule changes.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}