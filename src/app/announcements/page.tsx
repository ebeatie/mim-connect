import PageHeader from "@/components/layout/PageHeader";
import { Megaphone, Pin } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Welcome to the 73rd Festival!",
    date: "Today • 8:00 AM",
    priority: "Important",
    body:
      "We are thrilled to welcome everyone to Music in the Mountains. Please check your schedules daily for updates.",
  },
  {
    id: 2,
    title: "Parking Update",
    date: "Yesterday",
    priority: "Info",
    body:
      "Parking at Center for the Arts has been moved to the east lot. Shuttle service begins at 6:00 PM.",
  },
  {
    id: 3,
    title: "Weather Advisory",
    date: "Yesterday",
    priority: "Alert",
    body:
      "Afternoon thunderstorms are possible. Outdoor rehearsals may move indoors if necessary.",
  },
];

function badgeColor(priority: string) {
  switch (priority) {
    case "Important":
      return "bg-blue-700";
    case "Alert":
      return "bg-red-600";
    default:
      return "bg-slate-500";
  }
}

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <PageHeader
          title="Announcements"
          subtitle="Festival news and updates"
        />

        <div className="space-y-6">

          {announcements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-md p-6 border border-slate-200"
            >
              <div className="flex justify-between items-start">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center">
                    <Megaphone />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-slate-500 text-sm">
                      {item.date}
                    </p>
                  </div>

                </div>

                <span
                  className={`${badgeColor(
                    item.priority
                  )} text-white rounded-full px-4 py-1 text-sm`}
                >
                  {item.priority}
                </span>

              </div>

              <p className="mt-6 text-slate-700 leading-7">
                {item.body}
              </p>

              {item.priority === "Important" && (
                <div className="flex items-center gap-2 mt-5 text-blue-700 font-medium">
                  <Pin size={16} />
                  Pinned Announcement
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}