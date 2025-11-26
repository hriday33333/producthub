import BannerSection from '@/components/BannerSection';
import CardsSection from '@/components/CardsSection';
import FAQSection from '@/components/FAQSection';
import FeatureItems from '@/components/FeatureItems';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeatureItems></FeatureItems>
      <TestimonialsSection></TestimonialsSection>
      <FAQSection></FAQSection>
      <CardsSection></CardsSection>
      <BannerSection></BannerSection>
    </div>
  );
}
