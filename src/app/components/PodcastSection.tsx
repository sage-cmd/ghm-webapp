// src/app/components/PodcastSection.tsx
export default function PodcastSection() {
  const podcasts = [
    { title: "Miracle Service 2021", id: 1 },
    { title: "The Spirit of Life", id: 2 },
    { title: "What God Wants", id: 3 },
    { title: "Jesus Sunday 4.0", id: 4 },
    { title: "Hearing From God", id: 5 },
    { title: "Matters Of The Spirit", id: 6 },
    { title: "Ways To Know Your Purpose", id: 7 },
    { title: "Growing Unto Maturity In God", id: 8 },
  ];

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Glorious Heritage Ministires Podcast</h2>
        <p className="text-black mb-12 max-w-3xl mx-auto">
          Listen to powerful teachings from our Man of God, Pastor Bilson on topics such as Christian Living, Faith, Healing and Health, The Holy Spirit, Prayer, Soul Winning and More.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-black">{podcast.title}</h3>
                <a href="#" className="text-black mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  Listen Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition">
          More Podcasts
        </button>
      </div>
    </section>
  );
}