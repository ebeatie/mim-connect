import PageHeader from "@/components/layout/PageHeader";
import {
  House,
  MapPin,
  CalendarDays,
  Users,
  Phone,
} from "lucide-react";

export default function HousingPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <PageHeader
          title="My Housing"
          subtitle="Your festival accommodations"
        />

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200">

          <div className="flex items-center gap-4 mb-8">
            <div className="bg-sky-100 p-4 rounded-2xl">
              <House className="text-sky-700" size={32} />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                The Lodge at Mountaineer Square
              </h2>

              <p className="text-slate-500">
                Deluxe Queen Room
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex items-start gap-3">
              <CalendarDays className="text-sky-700 mt-1" />
              <div>
                <p className="font-semibold">Check-In</p>
                <p>July 12, 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CalendarDays className="text-sky-700 mt-1" />
              <div>
                <p className="font-semibold">Check-Out</p>
                <p>July 28, 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="text-sky-700 mt-1" />
              <div>
                <p className="font-semibold">Roommate</p>
                <p>Sarah Johnson</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-sky-700 mt-1" />
              <div>
                <p className="font-semibold">Hotel Phone</p>
                <p>(970) 555-1234</p>
              </div>
            </div>

          </div>

          <div className="mt-8 flex items-start gap-3">
            <MapPin className="text-sky-700 mt-1" />
            <div>
              <p className="font-semibold">Address</p>
              <p>
                620 Gothic Road
                <br />
                Mt. Crested Butte, CO 81225
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}