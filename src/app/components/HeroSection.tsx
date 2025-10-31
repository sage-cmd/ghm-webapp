// src/app/components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <Image
    src="/images/bilson.webp"
    alt="Church Worship Service"
    fill
    className="object-cover"
    priority
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

  {/* Content */}
  <div className="relative text-center text-white px-4">
    <h1 className="text-5xl md:text-7xl font-bold mb-4">
      Glorious Heritage Ministries
    </h1>
    <p className="text-xl md:text-2xl">Welcome Home</p>
  </div>
</section>

  );
}