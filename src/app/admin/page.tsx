import PageHeader from "@/components/layout/PageHeader";
import {
  Users,
  CheckCircle2,
  AlertTriangle,
  Megaphone,
  House,
  Ticket,
} from "lucide-react";

const stats = [
  {
    title: "Checked In",
    value: "187 / 241",
    icon: CheckCircle2,
    color: "bg-green-500",
  },
  {
    title: "Participants",
    value: "241",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    title: "Housing Issues",
    value: "2",
    icon: House,
    color: "bg-orange-500",
  },
  {
    title: "Urgent Alerts",
    value: "1",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
];

const recentCheckIns = [
  "Sarah Johnson • 8:42 AM",
  "Michael Davis • 8:38 AM",
  "Emily Carter • 8:31 AM",
  "James Wilson • 8:25 AM",
  "Olivia Smith • 8:17 AM",
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <PageHeader
          title="Festival Operations"
          subtitle="Administrative Dashboard"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="bg-white rounded-3xl shadow-md p-6"
              >
                <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5`}>
                  <Icon />
                </div>

                <p className="text-slate-500">
                  {stat.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {stat.value}
                </h2>
              </div>
            );
          })}

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-5">
              Recent Check-Ins
            </h2>

            <div className="space-y-4">

              {recentCheckIns.map((person) => (
                <div
                  key={person}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <span>{person}</span>

                  <CheckCircle2 className="text-green-600" />
                </div>
              ))}

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-5">
              Quick Actions
            </h2>

            <div className="grid gap-4">

              <button className="rounded-2xl bg-blue-900 text-white p-4 flex items-center gap-3 hover:bg-blue-800 transition">
                <Megaphone />
                Send Announcement
              </button>

              <button className="rounded-2xl bg-green-700 text-white p-4 flex items-center gap-3 hover:bg-green-600 transition">
                <Users />
                View Participants
              </button>

              <button className="rounded-2xl bg-amber-600 text-white p-4 flex items-center gap-3 hover:bg-amber-500 transition">
                <House />
                Housing Assignments
              </button>

              <button className="rounded-2xl bg-purple-700 text-white p-4 flex items-center gap-3 hover:bg-purple-600 transition">
                <Ticket />
                Ticket Dashboard
              </button>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}