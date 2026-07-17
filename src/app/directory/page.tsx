import PageHeader from "@/components/layout/PageHeader";
import { Search, Phone, Mail, Building2 } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Erin Beatie",
    role: "Festival Administrator",
    department: "Administration",
    phone: "(555) 123-4567",
    email: "erin@mim.org",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Principal Violin",
    department: "Orchestra",
    phone: "(555) 234-5678",
    email: "sarah@example.com",
  },
  {
    id: 3,
    name: "Michael Davis",
    role: "Volunteer Coordinator",
    department: "Volunteers",
    phone: "(555) 345-6789",
    email: "michael@example.com",
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Patron Services",
    department: "Box Office",
    phone: "(555) 456-7890",
    email: "emily@example.com",
  },
];

export default function DirectoryPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <PageHeader
          title="Festival Directory"
          subtitle="Musicians, staff, volunteers, and festival contacts"
        />

        <div className="bg-white rounded-3xl shadow-md p-4 mb-8 flex items-center gap-3">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="Search people..."
            className="w-full outline-none"
          />

        </div>

        <div className="space-y-5">

          {people.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-3xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition"
            >
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold">
                  {person.name.charAt(0)}
                </div>

                <div className="flex-1">

                  <h2 className="text-xl font-bold">
                    {person.name}
                  </h2>

                  <p className="text-blue-900 font-medium">
                    {person.role}
                  </p>

                  <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-slate-600">

                    <div className="flex items-center gap-2">
                      <Building2 size={16} />
                      {person.department}
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      {person.phone}
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      {person.email}
                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}