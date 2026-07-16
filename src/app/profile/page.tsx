import Link from "next/link";
export default function Profile() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-white p-6">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold mt-8">
          My Profile
        </h1>

        <div className="mt-6 bg-white text-green-900 rounded-2xl p-6 shadow">

          <div className="text-center">

            <div className="w-24 h-24 mx-auto rounded-full bg-green-200 flex items-center justify-center text-4xl">
              🎻
            </div>

            <h2 className="text-2xl font-bold mt-4">
              Erin Beatie
            </h2>

            <p className="text-gray-600">
              Production Manager • Staff
            </p>

          </div>

          <div className="mt-6 space-y-3">

            <p>📱 Phone: Add phone number</p>

            <p>✉️ Email: Add email</p>

            <p>🏠 Housing: N/A </p>

            <p>🎼 Emergency Contact: On File</p>
<Link href="/">
  <div className="mt-6 bg-white text-green-900 rounded-xl p-4 text-center shadow">
    ← Back to MIM Connect
  </div>
</Link>
          </div>

        </div>

      </div>
    </main>
  );
}