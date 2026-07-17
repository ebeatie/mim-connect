import Hero from "@/components/dashboard/Hero";
import TodayCard from "@/components/dashboard/TodayCard";
import QuickActions from "@/components/dashboard/QuickActions";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-10 space-y-10">
        <TodayCard />

        <QuickActions />
      </section>
    </>
  );
}