import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md">
      <div className="max-w-6xl mx-auto flex justify-around py-3">

        <Link href="/">Home</Link>

        <Link href="/schedule">Schedule</Link>

        <Link href="/profile">Profile</Link>

      </div>
    </nav>
  );
}