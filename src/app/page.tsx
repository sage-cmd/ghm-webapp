// src/app/page.tsx
import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import MissionSection from '@/app/components/MissionSection';
import ProgramsSection from '@/app/components/ProgramsSection';
import WorshipSongsSection from '@/app/components/WorshipSongsSection';
import FooterSection from '@/app/components/FooterSection';

export default function Home() {
  return (
     <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <WorshipSongsSection />
        <FooterSection />
      </main>
    </>
  );
}
