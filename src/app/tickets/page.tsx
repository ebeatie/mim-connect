import PageHeader from "@/components/layout/PageHeader";
import { CalendarDays, MapPin, Ticket, QrCode } from "lucide-react";

export default function TicketsPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <PageHeader
          title="My Tickets"
          subtitle="Your upcoming performances"
        />

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="bg-gradient-to-r from-sky-800 to-sky-600 text-white p-8">

            <div className="flex items-center gap-3">
              <Ticket size={30} />
              <h2 className="text-3xl font-bold">
                Beethoven Under the Stars
              </h2>
            </div>

            <p className="mt-2 text-sky-100">
              Music in the Mountains Festival
            </p>

          </div>

          <div className="p-8 space-y-6">

            <div className="flex items-center gap-4">
              <CalendarDays className="text-sky-700" />
              <span>Saturday, July 18, 2026 • 7:30 PM</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-sky-700" />
              <span>Center for the Arts, Crested Butte</span>
            </div>

            <div className="border-t pt-8 text-center">

              <div className="inline-flex flex-col items-center">

                <div className="bg-slate-100 rounded-2xl p-8">
                  <QrCode size={120} className="text-slate-700" />
                </div>

                <p className="mt-4 font-semibold">
                  Seat A-14
                </p>

                <p className="text-slate-500">
                  Scan at the entrance
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}