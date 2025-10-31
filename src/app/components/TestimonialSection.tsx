// src/app/components/TestimonialSection.tsx
import Image from 'next/image';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: "/images/testimonial1.jpg", // Replace with actual path
      quote: "Being part of Heritage Ministries has been a journey with God which has led to my spiritual growth and enabled me to increase in my knowledge of God.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "/images/testimonial2.jpg",
      quote: "I'm grateful to God for bringing me to Heritage Ministries because I have a family now and Heritage Ministries has established me in my Christianity and has added to my zeal knowledge.",
    },
    {
      id: 3,
      name: "David Brown",
      image: "/images/testimonial3.jpg",
      quote: "It has been a life from glory to glory ever since I joined Glorious Heritage Ministries. I have come into the revealed knowledge of the person of Christ.",
    },
  ];

  return (
    <section className="py-20 bg-green-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 672">
          <path fill="#ffffff" fillOpacity="1" d="M0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320L1440,672L1392,672C1344,672,1248,672,1152,672C1056,672,960,672,864,672C768,672,672,672,576,672C480,672,384,672,288,672C192,672,96,672,48,672L0,672Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12"> Glorious Heritage Ministires Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto transform hover:scale-105 transition">
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <p className="text-sm italic text-center">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}