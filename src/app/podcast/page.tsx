// src/app/podcast/page.tsx
import Navbar from '@/app/components/Navbar';
import FooterSection from '@/app/components/FooterSection';

export default function PodcastPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white text-black-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-green-500 mb-4">Podcast</h1>
          <p className="text-gray-700 leading-7">
            Listen to recent sermons and teachings. Subscribe to stay updated with new episodes.
          </p>
        </section>
        <FooterSection />
      </main>
    </>
  );
}


