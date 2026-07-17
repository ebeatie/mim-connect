import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[250px] overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="Music in the Mountains Orchestra"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-slate-950/55" />

      <div className="absolute inset-0 flex items-center">

        <div className="mx-auto w-full max-w-6xl px-8 text-white">

          <h1 className="text-3xl md:text-5xl font-bold">
            Music in the Mountains Connect
          </h1>

          <p className="mt-3 text-xl md:text-2xl text-slate-100">
            Welcome, Erin
          </p>

        </div>

      </div>

    </section>
  );
}