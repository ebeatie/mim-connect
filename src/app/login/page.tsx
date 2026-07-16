"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Music in the Mountains
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to MIM Connect
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              className="w-full rounded-lg border border-slate-300 p-3"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              className="w-full rounded-lg border border-slate-300 p-3"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-900 py-3 text-white font-semibold hover:bg-blue-800 transition"
          >
            Sign In
          </button>

        </form>
      </div>
    </main>
  );
}