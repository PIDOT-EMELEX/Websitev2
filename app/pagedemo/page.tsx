import HeroSection from '@/features/pagedemo/sections/HeroSection';
import TrustedBySection from '@/features/pagedemo/sections/TrustedBySection';
import IntegrateMorningSection from '@/features/pagedemo/sections/IntegrateMorningSection';
import DeveloperExperienceSection from '@/features/pagedemo/sections/DeveloperExperienceSection';
import EditorSection from '@/features/pagedemo/sections/EditorSection';
import GoBeyondEditingSection from '@/features/pagedemo/sections/GoBeyondEditingSection';
import EmailWithReactSection from '@/features/pagedemo/sections/EmailWithReactSection';
import InfoTabSection from '@/features/pagedemo/sections/InfoTabSection';
import TestimonialSection from '@/features/pagedemo/sections/TestimonialSection';
import EverythingInYourControlSection from '@/features/pagedemo/sections/EverythingInYourControlSection';
import InfiniteMovingCardsSection from '@/features/pagedemo/sections/InfiniteMovingCardsSection';
import EmailReimaginedSection from '@/features/pagedemo/sections/EmailReimaginedSection';

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