// src/app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-green-400 font-bold text-xl">
              GHM
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-green-400 transition font-medium">Home</Link>
            <Link href="/mission" className="text-white hover:text-green-400 transition font-medium">Mission</Link>
            <Link href="/contact" className="text-white hover:text-green-400 transition font-medium">Contact</Link>
          </div>
     
          {/* Give Button */}
          <div className="flex items-center">
            <Link href="/give" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition font-medium">
              GIVE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}