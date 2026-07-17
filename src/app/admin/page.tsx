import {
  Users,
  CalendarDays,
  House,
  Megaphone,
} from "lucide-react";

export default function AdminPage() {
  const stats = [
    {
      title: "Participants",
      value: "146",
      icon: Users,
    },
    {
      title: "Festival Events",
      value: "18",
      icon: CalendarDays,
    },
    {
      title: "Housing Filled",
      value: "92%",
      icon: House,
    },
    {
      title: "Announcements",
      value: "6",
      icon: Megaphone,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-slate-800">
          Festival Command Center
        </h1>

        <p className="text-slate-500 mt-2 mb-10">
          Music in the Mountains Festival Administration
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl bg-white p-6 shadow-md border border-slate-200"
              >
                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-slate-500">
                      {stat.title}
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-slate-800">
                      {stat.value}
                    </h2>
                  </div>

                  <div className="rounded-xl bg-sky-100 p-4">
                    <Icon className="text-sky-700" size={30} />
                  </div>

                </div>
              </div>
            );
          })}
                </div>

        <div className="mt-10 bg-white rounded-2xl shadow-md border border-slate-200 p-6">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="border-l-4 border-sky-600 pl-4 py-2">
              <p className="font-semibold">
                New participant registered
              </p>
              <p className="text-sm text-slate-500">
                Emily Carter joined the festival.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4 py-2">
              <p className="font-semibold">
                Housing assignment updated
              </p>
              <p className="text-sm text-slate-500">
                Room 214 assigned at Mountaineer Square.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <p className="font-semibold">
                New announcement published
              </p>
              <p className="text-sm text-slate-500">
                Parking information has been updated.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <p className="font-semibold">
                Performance schedule revised
              </p>
              <p className="text-sm text-slate-500">
                Friday rehearsal moved to 3:00 PM.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}