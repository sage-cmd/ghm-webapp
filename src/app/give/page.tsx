// src/app/give/page.tsx
import Navbar from '@/app/components/Navbar';
import FooterSection from '@/app/components/FooterSection';

export default function GivePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white text-black-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-green-500 mb-4">Give</h1>
          <p className="text-gray-700 leading-7">
            Partner with GHM through your generous giving.
          </p>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-green-500">Mobile Money</h2>
              <p className="text-gray-700 leading-7">MTN MoMo: 024-000-0000</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-green-500">Bank Transfer</h2>
              <p className="text-gray-700 leading-7">Account Name: Glorious Heritage Ministries</p>
              <p className="text-gray-700 leading-7">Account Number: 0000000000</p>
              <p className="text-gray-700 leading-7">Bank: Example Bank</p>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}


