import { Plus, Pencil, Trash2 } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Parking Update",
    body: "Please use the north parking lot after 5 PM.",
    date: "Today",
  },
  {
    id: 2,
    title: "Rehearsal Change",
    body: "Brass rehearsal begins at 2:30 PM.",
    date: "Yesterday",
  },
];

export default function AdminAnnouncementsPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Announcement Manager
            </h1>

            <p className="text-slate-500 mt-2">
              Create and manage festival announcements.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-sky-700 text-white px-5 py-3 rounded-xl hover:bg-sky-800 transition">
            <Plus size={18} />
            New Announcement
          </button>

        </div>

        <div className="space-y-6">

          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white rounded-2xl shadow-md border border-slate-200 p-6"
            >
              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-xl font-bold">
                    {announcement.title}
                  </h2>

                  <p className="text-slate-500 text-sm mt-1">
                    {announcement.date}
                  </p>

                  <p className="mt-4">
                    {announcement.body}
                  </p>

                </div>

                <div className="flex gap-3">

                  <button className="p-2 rounded-lg hover:bg-slate-100">
                    <Pencil size={20} />
                  </button>

                  <button className="p-2 rounded-lg hover:bg-red-100 text-red-600">
                    <Trash2 size={20} />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}