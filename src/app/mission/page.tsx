// src/app/mission/page.tsx
import Navbar from '@/app/components/Navbar';
import FooterSection from '@/app/components/FooterSection';

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white text-black-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-black mb-4">Our Mission</h1>
          <p className="text-gray-700 leading-7">
            We exist to proclaim Jesus and make disciples, building a community founded on love, service, and the Word of God.
          </p>
        </section>
        <FooterSection />
      </main>
    </>
  );
}


