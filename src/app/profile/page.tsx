import PageHeader from "@/components/layout/PageHeader";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <PageHeader
          title="My Profile"
          subtitle="Your Music in the Mountains information"
        />

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-[var(--mim-blue)] text-white flex items-center justify-center text-4xl shadow-lg">
  🎻
</div>

            <div>
              <h2 className="text-2xl font-bold">
                Erin Beatie
              </h2>

              <p className="text-slate-500">
                Festival Administrator
              </p>
            </div>

          </div>

          <hr className="my-8" />

          <div className="grid md:grid-cols-2 gap-6">

            <InfoCard
              title="Email"
              value="erin@example.com"
            />

            <InfoCard
              title="Phone"
              value="(555) 555-5555"
            />

            <InfoCard
              title="Housing"
              value="TBD"
            />

            <InfoCard
              title="Department"
              value="Administration"
            />

          </div>

        </div>

      </div>
    </main>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 border">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="text-lg font-semibold mt-1">
        {value}
      </p>

    </div>
  );
}