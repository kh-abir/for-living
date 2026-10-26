import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import CtaSection from '@/components/CtaSection';

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="bg-[#080e00] text-white pt-28">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/50 border-b border-white/10">
        <Link href="/work" className="hover:text-white transition-colors flex items-center gap-2">
          ← Back to Works
        </Link>
        <div className="flex items-center gap-2">
          <span>{project.category} Living</span>
          <span>/</span>
          <span className="text-[#b65234] font-semibold">{project.initials}</span>
        </div>
      </div>

      {/* Case Header */}
      <section className="px-6 md:px-12 py-10 md:py-14 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-2 font-semibold">
              PRANGON Case Study
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 text-xs font-mono text-white/70 border-l border-white/20 pl-6">
            <div>
              <span className="text-white/40 block">Location</span>
              <span className="text-white text-sm">{project.location}</span>
            </div>
            <div>
              <span className="text-white/40 block">Scope & Scale</span>
              <span className="text-white text-sm">{project.size}</span>
            </div>
            <div>
              <span className="text-white/40 block">Scope Rendered</span>
              <span className="text-white text-sm">{project.services}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <section className="px-6 md:px-12 py-4 max-w-[1360px] mx-auto">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#161715]">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Editorial Narrative & Architect Quote */}
      <section className="px-6 md:px-12 py-14 md:py-20 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <h2 className="font-serif-luxury text-2xl md:text-3xl font-light text-white leading-snug">
              Bespoke execution tailored to delta architectural climate
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4 text-xs md:text-sm text-white/75 font-light leading-relaxed">
            <p>{project.description}</p>
            <p>
              Every joinery detail, terracotta louver, and metal casting underwent rigorous quality audits across our collaborative workshops in Savar, Dhamrai, and Dhaka. Final installation was completed by PRANGON master craftsmen, ensuring continuous alignment with the client’s architectural specifications.
            </p>

            <blockquote className="my-8 p-6 rounded-xl bg-[#111111] border-l-2 border-[#b65234] text-white italic font-serif-luxury text-base md:text-lg">
              “{project.quote}”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="px-6 md:px-12 py-8 max-w-[1360px] mx-auto border-t border-white/10">
          <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] mb-6 font-semibold">
            Material & Detail Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {project.gallery.slice(1).map((imgUrl, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#161715] group"
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} detail ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer Bar */}
      <section className="px-6 md:px-12 py-12 max-w-[1360px] mx-auto border-t border-white/10 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
            Next Commission
          </span>
          <Link
            href={`/work/${nextProject.slug}`}
            className="font-serif-luxury text-xl md:text-2xl font-light text-white hover:text-[#b65234] transition-colors"
          >
            {nextProject.title} →
          </Link>
        </div>

        <Link
          href="/work"
          className="text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
        >
          View Archive
        </Link>
      </section>

      <CtaSection />
    </div>
  );
}
