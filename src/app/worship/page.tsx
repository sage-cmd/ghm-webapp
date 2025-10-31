// src/app/worship/page.tsx
import Navbar from '@/app/components/Navbar';
import FooterSection from '@/app/components/FooterSection';

export default function WorshipPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white text-gray-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-black mb-6">Worship With Us</h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-black">Venue</h2>
              <p className="text-gray-700">Elimor Event Centre, Community 11, Tema (near KFC/Shell)</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">Midweek Service</h2>
              <p className="text-gray-700">Fridays · 7:00 PM · In–Person and Online</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black">Sunday Services</h2>
              <p className="text-gray-700">First Service: 7:00 AM – 9:00 AM</p>
              <p className="text-gray-700">Second Service: 9:00 AM – 12:00 PM</p>
              <p className="text-gray-700">Join us in person or worship online via YouTube and Facebook.</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-black mb-4">Find Us on the Map</h2>
            <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                title="GHM Location Map"
                src="https://www.google.com/maps?q=Elimor%20Event%20Centre%2C%20Community%2011%2C%20Tema%20KFC%20Shell&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}


