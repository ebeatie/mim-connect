import Link from "next/link";
import {
  CalendarDays,
  Megaphone,
  Users,
  House,
  Ticket,
  UserCircle,
} from "lucide-react";

const actions = [
  {
    title: "Schedule",
    description: "View rehearsals and performances",
    href: "/schedule",
    icon: CalendarDays,
  },
  {
    title: "Announcements",
    description: "Latest festival news",
    href: "/announcements",
    icon: Megaphone,
  },
  {
    title: "Directory",
    description: "Find musicians and staff",
    href: "/directory",
    icon: Users,
  },
  {
    title: "Housing",
    description: "View your accommodations",
    href: "/housing",
    icon: House,
  },
  {
    title: "Tickets",
    description: "Your concert tickets",
    href: "/tickets",
    icon: Ticket,
  },
  {
    title: "Profile",
    description: "Your festival profile",
    href: "/profile",
    icon: UserCircle,
  },
];

export default function QuickActions() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-sky-700" />
              </div>

              <h3 className="text-lg font-semibold text-slate-800">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}