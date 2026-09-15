"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

function Banner({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // lock background scroll while banner is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-white text-gray-900 overflow-y-auto">
      <button
        onClick={onClose}
        className="fixed top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition z-10"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {children}

        <button
          onClick={onClose}
          className="mt-8 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition w-full font-medium"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

export default function MissionSection() {
  const [showMission, setShowMission] = useState(false);
  const [activeStat, setActiveStat] = useState<"churches" | "lives" | null>(null);

  const missionContent = {
    title: "Our Mission",
    description: `Our mission is to bring people into the knowledge of their inheritance in Christ,
     spread the word of God, build a loving community, 
    and serve those in need. We believe in faith, hope, and love, and 
    strive to make a positive impact in our community through worship, 
    fellowship, and outreach programs.`,
    values: [
      "Worship in Spirit and Truth",
      "Build Loving Community",
      "Serve Those in Need",
      "Spread the Gospel",
    ],
  };

  const churchesContent = {
    heading: "Head Office",
    body: "We are currently located at Elimol Event Court, Community 11 Tema, adjacent to Apostolic Church of Ghana.",
    branchHeading: "Branches",
    branchBody: "Asebi Church located in Asebi Town in the Greater Accra Region.",
  };

  const livesContent =
    "Hundreds of lives have been touched and transformed by the ministry over the years, and we are still continuing in this commission to touch the thousands and the millions to fulfil the mandate of the great commission.";

  return (
    <section className="relative py-24">
      {/* Background layer */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-bg.webp"
          alt="Mission background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Living Our Inheritance In Christ
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            When you worship with us, you learn more than just the letters of the Word; 
            you're imparted and impacted by the Spirit of the Word.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => setShowMission(true)}
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition"
            >
              Our Mission
            </button>

            <Link href="https://web.facebook.com/gloriousheritageministries/live_videos/">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition hover:bg-white/20"
            onClick={() => setActiveStat("churches")}
          >
            <div className="text-green-400 text-4xl font-bold mb-2">2</div>
            <p className="text-lg">Churches Worldwide</p>
            <p className="text-sm text-gray-300 mt-2">Tap to view details</p>
          </div>

          <div
            className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition hover:bg-white/20"
            onClick={() => setActiveStat("lives")}
          >
            <div className="text-green-400 text-4xl font-bold mb-2">100+</div>
            <p className="text-lg">Lives Transformed</p>
            <p className="text-sm text-gray-300 mt-2">Tap to view details</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-green-400 text-4xl font-bold mb-2">10</div>
            <p className="text-lg">Years of Ministry</p>
          </div>
        </div>
      </div>

      {/* Stat Banner */}
      {activeStat === "churches" && (
        <Banner onClose={() => setActiveStat(null)}>
          <div className="text-green-500 text-4xl font-bold mb-4">2</div>
          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Churches Worldwide
          </h3>
          <div className="mb-6">
            <h4 className="font-semibold text-green-600 text-lg mb-2">
              {churchesContent.heading}
            </h4>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              {churchesContent.body}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 text-lg mb-2">
              {churchesContent.branchHeading}
            </h4>
            <p className="text-base leading-relaxed text-gray-700">
              {churchesContent.branchBody}
            </p>
          </div>
        </Banner>
      )}

      {activeStat === "lives" && (
        <Banner onClose={() => setActiveStat(null)}>
          <div className="text-green-500 text-4xl font-bold mb-4">100+</div>
          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Lives Transformed
          </h3>
          <p className="text-base leading-relaxed text-gray-700">{livesContent}</p>
        </Banner>
      )}

      {/* Mission Banner */}
      {showMission && (
        <Banner onClose={() => setShowMission(false)}>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            {missionContent.title}
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            {missionContent.description}
          </p>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Our Core Values
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {missionContent.values.map((value, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Banner>
      )}
    </section>
  );
}