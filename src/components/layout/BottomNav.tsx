"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  CalendarDays,
  Megaphone,
  Users,
  UserCircle,
} from "lucide-react";

const links = [
  {
    href: "/",
    label: "Home",
    icon: House,
  },
  {
    href: "/schedule",
    label: "Schedule",
    icon: CalendarDays,
  },
  {
    href: "/announcements",
    label: "News",
    icon: Megaphone,
  },
  {
    href: "/directory",
    label: "Directory",
    icon: Users,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: UserCircle,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-around py-3">

        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center text-xs transition ${
                active
                  ? "text-sky-700 font-semibold"
                  : "text-slate-500 hover:text-sky-700"
              }`}
            >
              <Icon size={22} />
              <span className="mt-1">{link.label}</span>
            </Link>
          );
        })}

      </div>
    </nav>
  );
}