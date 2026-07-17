"use client";

import Image from "next/image";
import { Bell, LogOut } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Music in the Mountains"
            width={60}
            height={60}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-sky-900">
              MIM Connect
            </h1>

            <p className="text-sm text-slate-500">
              Music in the Mountains Festival Portal
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-6">

          <button className="text-slate-600 hover:text-sky-700">
            <Bell size={22} />
          </button>

          <div className="text-right">
            <p className="font-semibold">Erin</p>
            <p className="text-sm text-slate-500">
              Festival Administrator
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 transition">
            <LogOut size={18} />
            Sign Out
          </button>

        </div>

      </div>
    </header>
  );
}