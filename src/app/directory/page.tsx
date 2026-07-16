export default function Directory() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-white p-6">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold mt-8">
          Festival Directory
        </h1>

        <p className="mt-2">
          Connect with the Music in the Mountains community
        </p>

        <div className="mt-6 space-y-4">

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            🎻 Musicians
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            🎤 Soloists
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            🎼 Conductors
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            🎹 Librarians
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            🙋 Volunteers
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            🏠 Host Families
          </div>

          <div className="bg-white text-green-900 rounded-xl p-4 shadow">
            🎭 Guest Artists
          </div>

        </div>

      </div>
    </main>
  );
}