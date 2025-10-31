// src/app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-green-500 font-bold text-xl">
              GHM
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white-900 hover:text-green-600 transition">Home</Link>
            <Link href="/worship" className="text-white-900 hover:text-green-600 transition">Worship With Us</Link>
            <Link href="/mission" className="text-white-900 hover:text-green-600 transition">Mission</Link>
            <Link href="/podcast" className="text-white-900 hover:text-green-600 transition">Podcast</Link>
            <Link href="/contact" className="text-white-900 hover:text-green-600 transition">Contact</Link>
          </div>
     
          {/* Give Button */}
          <div className="flex items-center">
            <Link href="/give" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
              GIVE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}