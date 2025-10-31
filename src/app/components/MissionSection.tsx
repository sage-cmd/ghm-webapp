import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.webp"
        alt="Mission background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Living Our Inheritance In Christ</h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          When you worship with us, you learn more than just the letters of the Word; 
          you’re imparted and impacted by the Spirit of the Word.
        </p>
        <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition">
          Our Churches
        </button>
        <div className="mt-10 text-center">
          <span className="text-green-400 text-2xl font-bold">2</span>
          <p>Churches across the world</p>
        </div>
      </div>
    </section>
  );
}
