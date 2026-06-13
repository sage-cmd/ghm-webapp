// src/app/components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Glorious Heritage Ministries
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Welcome Home - Where Faith Comes Alive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://chat.whatsapp.com/FCMj8kaaH2X0iFypWUm4wJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition inline-block"
            >
              Join Our Community
            </Link>
            <Link 
              href="https://web.facebook.com/gloriousheritageministries"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition inline-block"
            >
              Watch Live
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-white text-sm mb-2 animate-bounce">Scroll Down</p>
        <div className="text-white animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}