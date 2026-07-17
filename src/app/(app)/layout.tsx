import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-100 pb-24">
      <Header />

      {children}

      <BottomNav />
    </main>
  );
}