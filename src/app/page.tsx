// src/app/page.tsx
import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import MissionSection from '@/app/components/MissionSection';
import WorshipSection from '@/app/components/WorshipSection';
import PodcastSection from '@/app/components/PodcastSection';
import JoinSection from '@/app/components/JoinSection';
import TestimonialSection from '@/app/components/TestimonialSection';
import ProgramsSection from '@/app/components/ProgramsSection';
import WorshipSongsSection from '@/app/components/WorshipSongsSection';
import FooterSection from '@/app/components/FooterSection';



import Image from "next/image";

export default function Home() {
  return (
     <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <MissionSection />
        <WorshipSection />
        <ProgramsSection />
        <WorshipSongsSection />
        <PodcastSection />
        <TestimonialSection />
        <JoinSection />
        <FooterSection />
      </main>
    </>
  );
}
