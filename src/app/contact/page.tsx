// src/app/contact/page.tsx
import Navbar from '@/app/components/Navbar';
import FooterSection from '@/app/components/FooterSection';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white text-gray-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Contact Us</h1>
          <p className="text-gray-700 leading-7 mb-6">
            We would love to hear from you. Reach out for prayer, support, or inquiries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">Visit Us</h2>
              <p className="text-gray-700">Elimor Event Centre, Community 11, Tema (near KFC/Shell)</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">Call</h2>
              <p className="text-gray-700">
                <a href="tel:+233240000000" className="text-green-700 hover:underline">024 000 0000</a>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">Email</h2>
              <p className="text-gray-700">info@ghm.org</p>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}


