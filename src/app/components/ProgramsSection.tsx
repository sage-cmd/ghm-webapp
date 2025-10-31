import Image from "next/image";

export default function ProgramsSection() {
  return (
    <section className="relative py-20 overflow-hidden min-h-[600px]">

      {/* Background Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/word.png"
          alt="Programs Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-6">UpComing Programs</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/sunday-service.png"
              alt="Sunday Service"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6">Sunday Service</h3>
            <p className="mb-6">
              Join us this and every Sunday at the Elimol Event Centre Tema
              Community 11
            </p>
            <p className="mb-8">
              You can also join us from around the world live on our YouTube
              Channel & Facebook Channel.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition">
              All Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
