import Header from "@/components/layout/Header";
import Hero from "@/components/dashboard/Hero";
import DashboardCard from "@/components/dashboard/DashboardCard";
import BottomNav from "@/components/layout/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <Header />
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <DashboardCard
            title="Schedule"
            description="View rehearsals, concerts and events."
            href="/schedule"
            icon="🎻"
          />

          <DashboardCard
            title="Announcements"
            description="Stay up to date with festival news."
            href="/announcements"
            icon="📣"
          />

          <DashboardCard
            title="Directory"
            description="Find musicians, staff and volunteers."
            href="/directory"
            icon="📖"
          />

          <DashboardCard
            title="Profile"
            description="Your housing, credentials and details."
            href="/profile"
            icon="👤"
          />

        </div>
      </section>

      <BottomNav />
    </main>
  );
}