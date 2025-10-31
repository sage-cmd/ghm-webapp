// src/app/components/JoinSection.tsx
import Image from 'next/image';

export default function JoinSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/images/join.png"
              alt="Join a Department"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-16 text-black">
            <h2 className="text-4xl font-bold mb-6">Join A Team</h2>
            <p className="text-black mb-6">
              There's a place for you to serve in God's house. Join one of several service teams and join us as helpers of the church.
            </p>
            <p className="text-black mb-8">
              You can sing in the choir, be an usher, be part of the media team , welcome people to church, be in the soul winning team and more!
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition">
              Join a Department
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}