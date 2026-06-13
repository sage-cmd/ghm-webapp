"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProgramsSection() {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
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

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming Programs
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for meaningful worship, fellowship, and spiritual growth
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-full">
                <Image
                  src="/images/sunday-service.png"
                  alt="Sunday Service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Sunday Service
              </h3>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Join us this Sunday and every Sunday at the Elimol Event Centre,
                Tema Community 11
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed">
                You can also join us from around the world live on our YouTube
                Channel & Facebook Channel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    setShowAllPrograms(!showAllPrograms);
                    if (!showAllPrograms) setShowSchedule(false);
                  }}
                  className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition"
                >
                  All Programs
                </button>

                <button
                  onClick={() => {
                    setShowSchedule(!showSchedule);
                    if (!showSchedule) setShowAllPrograms(false);
                  }}
                  className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-green-500 hover:text-white transition"
                >
                  View Schedule
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Schedule Banner */}
        {showSchedule && !showAllPrograms && (
          <div className="mt-10 bg-green-600 text-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-center">
              Weekly Church Schedule
            </h4>

            <ul className="space-y-3 text-lg">
              <li>🙏 <strong>Friday:</strong> Turn Around Prayer Meeting – 6:30 PM</li>
              <li>🌅 <strong>Sunday:</strong> Morning Glory Service – 7:00 AM</li>
              <li>⭐ <strong>Sunday:</strong> Day Star Service – 9:00 AM</li>
              <li>🍞 <strong>First Sunday:</strong> Communion & Joint Service – 8:00 AM</li>
            </ul>
          </div>
        )}

        {/* All Programs Banner - Annual & Special Events */}
        {showAllPrograms && !showSchedule && (
          <div className="mt-10 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-center">
              🎉 All Programs & Special Events
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              {/* Weekly Services */}
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="font-semibold mb-3 border-b border-white/20 pb-2">📅 Weekly Services</h5>
                <ul className="space-y-2">
                  <li>🙏 <strong>Friday:</strong> Turn Around Prayer – 6:30 PM</li>
                  <li>🌅 <strong>Sunday:</strong> Morning Glory – 7:00 AM</li>
                  <li>⭐ <strong>Sunday:</strong> Day Star Service – 9:00 AM</li>
                  <li>🍞 <strong>1st Sunday:</strong> Communion Service – 8:00 AM</li>
                </ul>
              </div>

              {/* Annual & Special Events */}
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="font-semibold mb-3 border-b border-white/20 pb-2">🌟 Annual & Special Events</h5>
                <ul className="space-y-2">
                  <li>🎤 <strong>May:</strong> Annual Unveil Conference</li>
                  <li>🙌 <strong>Quarterly:</strong> Prayer, Praise & Worship Night</li>
                  <li>🎄 <strong>December:</strong> Christmas Carol Celebration</li>
                  <li>👧👦 <strong>June:</strong> Children's Day Celebration</li>
                </ul>
              </div>
            </div>

            <p className="text-center text-sm text-white/80 mt-4">
              * Dates for special events will be announced. Stay connected!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}