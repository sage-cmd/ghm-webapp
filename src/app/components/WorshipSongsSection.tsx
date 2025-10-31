// src/app/components/WorshipSongsSection.tsx
import Image from 'next/image';

export default function WorshipSongsSection() {

  const songs = [
    {
      image: "/images/love1.png",
    },
    {
      image: "/images/love2.png",
    },
    {
      image: "/images/love3.png",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/images/worshipSong.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">From The Lovestate Singers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {songs.map((song, index) => (
            <div key={index} className="rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
              <Image
                src={song.image}
                alt={`Worship Song ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}