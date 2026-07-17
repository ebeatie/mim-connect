import PageHeader from "@/components/layout/PageHeader";
import { Megaphone, Pin } from "lucide-react";

const announcements = [
  {
    title: "Welcome to Festival Week!",
    date: "Today",
    message:
      "We're excited to welcome everyone to Music in the Mountains. Check your schedule daily for updates.",
    pinned: true,
  },
  {
    title: "Parking Update",
    date: "Yesterday",
    message:
      "Overflow parking is available at Gunnison High School with shuttle service every 15 minutes.",
    pinned: false,
  },
  {
    title: "Volunteer Meeting",
    date: "Monday",
    message:
      "All volunteers should attend the orientation meeting at 4:00 PM in the Pavilion.",
    pinned: false,
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">

      <PageHeader
        title="Announcements"
        subtitle="Festival news and important updates"
      />

      <div className="space-y-5">

        {announcements.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="rounded-full bg-sky-100 p-3">
                  <Megaphone className="text-sky-700" />
                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    {item.title}
                  </h2>

                  <p className="text-sm text-slate-500">
                    {item.date}
                  </p>

                </div>

              </div>

              {item.pinned && (
                <div className="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                  <Pin size={14} />
                  Pinned
                </div>
              )}

            </div>

            <p className="mt-5 text-slate-600">
              {item.message}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}