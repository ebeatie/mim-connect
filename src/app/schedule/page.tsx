import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import QuickActions from "@/components/dashboard/QuickActions";
import {
  CalendarDays,
  Megaphone,
  CloudSun,
  Music4,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 pb-24">

      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">

        <WelcomeCard />

        {/* Today's Festival */}

        <section className="bg-white rounded-3xl shadow-md p-8">

          <div className="flex items-center gap-3 mb-6">

            <CalendarDays className="text-blue-900" />

            <h2 className="text-2xl font-bold">
              Today's Festival
            </h2>

          </div>

          <div className="space-y-5">

            <div className="flex justify-between">

              <div>

                <h3 className="font-semibold text-lg">
                  Full Orchestra Rehearsal
                </h3>

                <p className="text-slate-500">
                  Kincaid Hall
                </p>

              </div>

              <span className="font-bold text-blue-900">
                2:00 PM
              </span>

            </div>

            <hr />

            <div className="flex justify-between">

              <div>

                <h3 className="font-semibold text-lg">
                  Beethoven Under the Stars
                </h3>

                <p className="text-slate-500">
                  Center for the Arts
                </p>

              </div>

              <span className="font-bold text-blue-900">
                7:30 PM
              </span>

            </div>

          </div>

        </section>

        {/* Festival Status */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white rounded-3xl p-6 shadow-lg">

            <CloudSun size={32} />

            <p className="mt-4 opacity-80">
              Weather
            </p>

            <h2 className="text-3xl font-bold">
              72°
            </h2>

            <p>Sunny</p>

          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-3xl p-6 shadow-lg">

            <Megaphone size={32} />

            <p className="mt-4 opacity-80">
              Announcements
            </p>

            <h2 className="text-3xl font-bold">
              3
            </h2>

            <p>New Updates</p>

          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-3xl p-6 shadow-lg">

            <Music4 size={32} />

            <p className="mt-4 opacity-80">
              Check-Ins
            </p>

            <h2 className="text-3xl font-bold">
              187
            </h2>

            <p>Participants</p>

          </div>

        </div>

        <QuickActions />

        {/* Tonight */}

        <section className="rounded-3xl bg-gradient-to-r from-blue-900 via-slate-800 to-blue-700 text-white p-8 shadow-xl">

          <p className="uppercase tracking-widest text-blue-200">
            Tonight's Performance
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Beethoven Under the Stars
          </h2>

          <p className="mt-4 text-lg text-slate-200">
            7:30 PM • Center for the Arts
          </p>

        </section>

      </div>

      <BottomNav />

    </main>
  );
}