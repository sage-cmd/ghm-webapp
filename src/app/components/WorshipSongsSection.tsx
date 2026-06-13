// src/app/components/WorshipSongsSection.tsx
import Image from 'next/image';

export default function WorshipSongsSection() {

  const songs = [
    {
      image: "/images/love1.png",
      title: "",
      description: "Worship and praise with uplifting melodies"
    },
    {
      image: "/images/love2.png",
      title: "", 
      description: "Inspiring worship music for your soul"
    },
    {
      image: "/images/love3.png",
      title: "",
      description: "Beautiful worship for every season"
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From The Lovestate Singers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience worship through beautiful music and inspiring melodies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {songs.map((song, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={song.image}
                  alt={song.title}
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{song.title}</h3>
                  <p className="text-gray-200">{song.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}