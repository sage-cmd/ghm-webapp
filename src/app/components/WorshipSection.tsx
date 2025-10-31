// src/app/components/WorshipSection.tsx
import Image from 'next/image';

export default function WorshipSection() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">Experience The Lord</h2>
            <p className="text-lg mb-8">
              Heritage Ministries is a place of the word, heritage, and power. You can join us to worship in person or online via our YouTube Channel and Facebook Channel. Click the button below to get assistance.
            </p>
            <button className="bg-white text-green-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition">
              Worship With Us
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/worship.webp"
              alt="Glad to be here"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}