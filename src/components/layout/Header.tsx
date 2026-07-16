export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Music in the Mountains
          </h1>

          <p className="text-sm text-slate-500">
            MIM Connect
          </p>
        </div>
      </div>
    </header>
  );
}