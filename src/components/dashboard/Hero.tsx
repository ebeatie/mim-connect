import Greeting from "./Greeting";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Greeting />
      </div>
    </section>
  );
}