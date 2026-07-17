import PageHeader from "@/components/layout/PageHeader";
import { Clock, MapPin, Music } from "lucide-react";

const events = [
  {
    time: "9:00 AM",
    title: "String Sectional",
    location: "Kincaid Hall",
  },
  {
    time: "2:00 PM",
    title: "Full Orchestra Rehearsal",
    location: "Kincaid Hall",
  },
  {
    time: "7:30 PM",
    title: "Beethoven Under the Stars",
    location: "Center for the Arts",
  },
];

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">

      <PageHeader
        title="Festival Schedule"
        subtitle="Today's rehearsals and performances"
      />

      <div className="space-y-5">

        {events.map((event) => (
          <div
            key={event.time}
            className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
          >

            <div className="flex items-center justify-between">

              <div>

                <div className="flex items-center gap-2 text-sky-700">
                  <Clock size={18} />
                  <span className="font-semibold">
                    {event.time}
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-bold">
                  {event.title}
                </h2>

                <div className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={18} />
                  {event.location}
                </div>

              </div>

              <div className="rounded-full bg-sky-100 p-4">
                <Music className="text-sky-700" />
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}