// src/app/components/FooterSection.tsx
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="mb-16 bg-gradient-to-r from-green-500 to-green-600 p-10 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
          <p className="text-green-100 mb-6 text-lg">Get the latest updates and messages from Glorious Heritage Ministries</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full border-2 border-transparent flex-1 w-full bg-white text-gray-900 placeholder-gray-500 shadow-inner focus:outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/40 transition"
            />
            <button className="bg-green-700 text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Church Info */}
          <div>
            <h4 className="text-2xl font-bold mb-6 text-green-400">GHM</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Glorious Heritage Ministries - A place where faith comes alive and community thrives.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/GloriousHeritageMinistries"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all shadow-md ring-1 ring-white/10"
                aria-label="Follow us on Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.983h-1.5c-1.482 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/GloriousHeritageMin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all shadow-md ring-1 ring-white/10"
                aria-label="Follow us on X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/gloriousheritageministries"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all shadow-md ring-1 ring-white/10"
                aria-label="Follow us on Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.017 11.989c-.011 6.61 5.346 11.97 11.988 11.97 6.61 0 11.988-5.349 11.976-11.97 0-6.623-5.347-11.989-11.977-11.989zm-.242 19.428c-4.254 0-7.29-3.035-7.29-7.29 0-4.254 3.036-7.289 7.29-7.289 4.253 0 7.289 3.035 7.289 7.289 0 4.255-3.036 7.29-7.289 7.29zm9.208-7.29c.001-5.081-4.102-9.184-9.184-9.184-5.081 0-9.184 4.103-9.184 9.184 0 5.082 4.103 9.185 9.184 9.185 5.082-.001 9.184-4.104 9.184-9.185zM17.819 6.111a1.214 1.214 0 11-2.428 0 1.214 1.214 0 012.428 0z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@gloriousheritageministries1193"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all shadow-md ring-1 ring-white/10"
                aria-label="Subscribe on YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45 0 5.048 0 8.009v7.982c0 2.966.484 4.561 4.385 4.815 3.6 0.245 11.626 0.246 15.23 0 3.897-.254 4.385-1.848 4.385-4.816V8.01c0-2.962-.484-4.556-4.385-4.81zm-10.615 13.112v-7.88l7.971 3.986-7.971 3.894z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-green-400 transition">Home</Link></li>
              <li><Link href="/mission" className="text-gray-300 hover:text-green-400 transition">Our Mission</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-green-400 transition">Contact Us</Link></li>
              <li><Link href="/give" className="text-gray-300 hover:text-green-400 transition">Give</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.54 1.06l-1.519.76a11.042 11.042 0 006.105 6.105l.76-1.519a1 1 0 011.06-.54l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+233 123 456 789</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">gloriousheretageministries@gmail.com</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Elimol Event Centre, Tema Community 11</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Glorious Heritage Ministries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}