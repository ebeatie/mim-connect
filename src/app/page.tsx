import Header from "@/components/layout/Header";
import Hero from "@/components/dashboard/Hero";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import TodayCard from "@/components/dashboard/TodayCard";
import QuickActions from "@/components/dashboard/QuickActions";
import BottomNav from "@/components/layout/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 pb-24">
      <Header />

      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        <WelcomeCard />

        <TodayCard />

        <QuickActions />
      </section>

      <BottomNav />
    </main>
  );
}