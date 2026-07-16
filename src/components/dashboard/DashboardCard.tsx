import Link from "next/link";

type DashboardCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function DashboardCard({
  title,
  description,
  href,
  icon,
}: DashboardCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-xl bg-white p-6 shadow hover:shadow-lg transition"
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-slate-600 mt-2">
        {description}
      </p>
    </Link>
  );
}