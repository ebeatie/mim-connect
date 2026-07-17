import PageHeader from "@/components/layout/PageHeader";
import { Mail, Phone, Shield, House } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8">

      <PageHeader
        title="My Profile"
        subtitle="Your Music in the Mountains information"
      />

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex items-center gap-6">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sky-700 text-4xl font-bold text-white">
            E
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Erin Beatie
            </h2>

            <p className="text-sky-700 font-semibold">
              Festival Administrator
            </p>
          </div>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-3">
            <Mail className="text-sky-700" />
            <span>erin@mim.org</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-sky-700" />
            <span>(970) 555-0101</span>
          </div>

          <div className="flex items-center gap-3">
            <House className="text-sky-700" />
            <span>Festival Housing Assigned</span>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="text-sky-700" />
            <span>Administrator Access</span>
          </div>

        </div>

      </div>

    </div>
  );
}