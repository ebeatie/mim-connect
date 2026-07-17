export default function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-900 via-slate-800 to-blue-700 text-white p-8 shadow-xl">

      <p className="text-blue-200 text-sm uppercase tracking-widest">
        Music in the Mountains
      </p>

      <h1 className="text-4xl font-bold mt-2">
        {greeting}, Erin! 👋
      </h1>

      <p className="mt-3 text-lg text-slate-200">
        Festival Administrator
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
          🎻 73rd Festival Season
        </span>

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
          📍 Gunnison, Colorado
        </span>

      </div>

    </section>
  );
}