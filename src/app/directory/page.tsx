import PageHeader from "@/components/layout/PageHeader";
import { Mail, Phone } from "lucide-react";

const people = [
  {
    name: "Erin Beatie",
    role: "Festival Administrator",
    email: "erin@mim.org",
    phone: "(970) 555-0101",
  },
  {
    name: "John Smith",
    role: "Music Director",
    email: "john@mim.org",
    phone: "(970) 555-0102",
  },
  {
    name: "Sarah Johnson",
    role: "Volunteer Coordinator",
    email: "sarah@mim.org",
    phone: "(970) 555-0103",
  },
];

export default function DirectoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <PageHeader
        title="Festival Directory"
        subtitle="Faculty, staff, volunteers, and performers"
      />

      <div className="space-y-5">
        {people.map((person) => (
          <div
            key={person.email}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-slate-800">
              {person.name}
            </h2>

            <p className="mt-1 text-sky-700 font-medium">
              {person.role}
            </p>

            <div className="mt-5 space-y-2 text-slate-600">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>{person.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>{person.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}