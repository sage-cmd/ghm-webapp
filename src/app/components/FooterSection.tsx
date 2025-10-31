// src/app/components/FooterSection.tsx
export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="mb-12 bg-green-500 rounded-full p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Get The Latest Updates</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="px-6 py-3 rounded-full border-none focus:outline-none w-full sm:w-80"
            />
            <button className="bg-green-700 text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Follow Us */}
          <div>
            <h4 className="text-xl font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/ceairportcity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition"
                aria-label="Follow us on Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.983h-1.5c-1.482 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com/ceairportcity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition"
                aria-label="Follow us on Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.564-2.005.954-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.66 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.219c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A10.01 10.01 0 0024 4.59z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/ceairportcity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition"
                aria-label="Follow us on Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.017 11.989c-.011 6.61 5.346 11.97 11.988 11.97 6.61 0 11.988-5.349 11.976-11.97 0-6.623-5.347-11.989-11.977-11.989zm-.242 19.428c-4.254 0-7.29-3.035-7.29-7.29 0-4.254 3.036-7.289 7.29-7.289 4.253 0 7.289 3.035 7.289 7.289 0 4.255-3.036 7.29-7.289 7.29zm9.208-7.29c.001-5.081-4.102-9.184-9.184-9.184-5.081 0-9.184 4.103-9.184 9.184 0 5.082 4.103 9.185 9.184 9.185 5.082-.001 9.184-4.104 9.184-9.185zM17.819 6.111a1.214 1.214 0 11-2.428 0 1.214 1.214 0 012.428 0z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@ceairportcity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition"
                aria-label="Subscribe on YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45 0 5.048 0 8.009v7.982c0 2.966.484 4.561 4.385 4.815 3.6 0.245 11.626 0.246 15.23 0 3.897-.254 4.385-1.848 4.385-4.816V8.01c0-2.962-.484-4.556-4.385-4.81zm-10.615 13.112v-7.88l7.971 3.986-7.971 3.894z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li><a href="#programs" className="hover:text-green-200 transition">Departments</a></li>
              <li><a href="#join" className="hover:text-green-200 transition">Join Us</a></li>
              <li><a href="/" className="hover:text-green-200 transition">Home</a></li>
              <li><a href="#give" className="hover:text-green-200 transition">Give</a></li>
              <li><a href="#podcasts" className="hover:text-green-200 transition">Podcasts</a></li>
              <li><a href="#worship" className="hover:text-green-200 transition">Worship With Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.54 1.06l-1.519.76a11.042 11.042 0 006.105 6.105l.76-1.519a1 1 0 011.06-.54l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+233 123 456 789</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@gloriousheritageministries.org</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}