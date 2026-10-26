import Hero from '@/components/Hero';
import CraftHeritage from '@/components/CraftHeritage';
import WorksCarousel from '@/components/WorksCarousel';
import ProcessWorkflow from '@/components/ProcessWorkflow';
import MilanManifesto from '@/components/MilanManifesto';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CraftHeritage />
      <WorksCarousel />
      <ProcessWorkflow />
      <MilanManifesto />
      <CtaSection />
    </>
  );
}
