import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[340px] overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="Music in the Mountains Orchestra"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-sky-950/60" />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-6xl mx-auto px-8 text-white">

          <h2 className="text-5xl font-bold mb-4">
            Welcome back, Erin
          </h2>

          <p className="text-2xl font-light">
            Music in the Mountains Connect
          </p>

          <p className="mt-6 max-w-xl text-lg text-sky-100">
            Everything you need for rehearsals, performances,
            housing, announcements, volunteers, and patrons—
            all in one place.
          </p>

        </div>

      </div>

    </section>
  );
}