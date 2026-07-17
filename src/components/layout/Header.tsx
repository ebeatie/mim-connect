"use client";

import Link from "next/link";
import Image from "next/image";
import { Bell, LogOut } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-4 transition hover:opacity-90"
        >
          <Image
            src="/images/logo.png"
            alt="Music in the Mountains"
            width={56}
            height={56}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              MIM Connect
            </h1>

            <p className="text-sm tracking-wide text-slate-500">
              Music in the Mountains
            </p>
          </div>
        </Link>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          <button className="rounded-full p-3 text-slate-600 transition hover:bg-slate-100 hover:text-sky-700">
            <Bell size={22} />
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-sky-700 px-4 py-2 text-white transition hover:bg-sky-800">
            <LogOut size={18} />
            Sign Out
          </button>

        </div>

      </div>
    </header>
  );
}