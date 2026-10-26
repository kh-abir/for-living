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
      {/* Downstream content stacks directly over the pinned, fading hero */}
      <div className="-mt-[100vh] relative z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.6)]">
        <CraftHeritage />
        <WorksCarousel />
        <ProcessWorkflow />
        <MilanManifesto />
        <CtaSection />
      </div>
    </>
  );
}
