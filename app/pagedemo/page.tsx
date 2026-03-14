import HeroSection from '@/pages/pagedemo/sections/HeroSection';
import TrustedBySection from '@/pages/pagedemo/sections/TrustedBySection';
import IntegrateMorningSection from '@/pages/pagedemo/sections/IntegrateMorningSection';
import DeveloperExperienceSection from '@/pages/pagedemo/sections/DeveloperExperienceSection';
import EditorSection from '@/pages/pagedemo/sections/EditorSection';
import GoBeyondEditingSection from '@/pages/pagedemo/sections/GoBeyondEditingSection';
import EmailWithReactSection from '@/pages/pagedemo/sections/EmailWithReactSection';
import InfoTabSection from '@/pages/pagedemo/sections/InfoTabSection';
import TestimonialSection from '@/pages/pagedemo/sections/TestimonialSection';
import EverythingInYourControlSection from '@/pages/pagedemo/sections/EverythingInYourControlSection';
import InfiniteMovingCardsSection from '@/pages/pagedemo/sections/InfiniteMovingCardsSection';
import EmailReimaginedSection from '@/pages/pagedemo/sections/EmailReimaginedSection';

export default function Home() {
  return (
    <main className="w-full h-screen bg-black">
      <HeroSection />
      <TrustedBySection />
      <IntegrateMorningSection />
      <DeveloperExperienceSection />
      <EditorSection />
      <GoBeyondEditingSection />
      <EmailWithReactSection />
      <InfoTabSection />
      <TestimonialSection />
      <EverythingInYourControlSection />
      <InfiniteMovingCardsSection />
      <EmailReimaginedSection />
    </main>
  );
}