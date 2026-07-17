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
    description: "Rehearsals & concerts",
    href: "/schedule",
    icon: CalendarDays,
  },
  {
    title: "Announcements",
    description: "Festival updates",
    href: "/announcements",
    icon: Megaphone,
  },
  {
    title: "Directory",
    description: "Faculty, staff & performers",
    href: "/directory",
    icon: Users,
  },
  {
    title: "Housing",
    description: "Accommodations",
    href: "/housing",
    icon: House,
  },
  {
    title: "Tickets",
    description: "Concert admission",
    href: "/tickets",
    icon: Ticket,
  },
  {
    title: "Profile",
    description: "Your account",
    href: "/profile",
    icon: UserCircle,
  },
];

export default function QuickActions() {
  return (
    <section>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Festival Dashboard
        </h2>

        <p className="mt-2 text-slate-500">
          Choose where you'd like to go.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-3xl bg-white border border-slate-200 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 transition-colors group-hover:bg-sky-700">

                <Icon className="h-7 w-7 text-sky-700 group-hover:text-white" />

              </div>

              <h3 className="text-xl font-semibold text-slate-800">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {action.description}
              </p>

            </Link>
          );
        })}

      </div>

    </section>
  );
}