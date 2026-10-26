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

  // Find next project in list for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="bg-[#080e00] text-white pt-32">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/50">
        <Link href="/work" className="hover:text-white transition-colors flex items-center gap-2">
          ← Back to Works
        </Link>
        <div className="flex items-center gap-2">
          <span>{project.category}</span>
          <span>/</span>
          <span className="text-white">{project.initials}</span>
        </div>
      </div>

      {/* Case Header */}
      <section className="px-6 md:px-12 py-12 md:py-16 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
              Case Study
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 text-xs font-mono text-white/70 border-l border-white/20 pl-6">
            <div>
              <span className="text-white/40 block">Location</span>
              <span className="text-white text-sm">{project.location}</span>
            </div>
            <div>
              <span className="text-white/40 block">Scope & Scale</span>
              <span className="text-white text-sm">{project.size}</span>
            </div>
            <div>
              <span className="text-white/40 block">Services Rendered</span>
              <span className="text-white text-sm">{project.services}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <section className="px-6 md:px-12 py-8 max-w-[1360px] mx-auto">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#161715]">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Editorial Narrative & Designer Quote */}
      <section className="px-6 md:px-12 py-20 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-light text-white leading-snug">
              Bespoke execution tailored to architectural excellence
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm md:text-base text-white/75 font-light leading-relaxed">
            <p>{project.description}</p>
            <p>
              Each joint, finish, and textile underwent strict quality audits across our partner workshops in Milan and northern Italy. The final installation was completed by Italian master craftsmen, ensuring continuous alignment with the client’s exacting architectural specifications.
            </p>

            {/* Quote Block */}
            <blockquote className="my-10 p-8 rounded-xl bg-[#111111] border-l-2 border-[#b65234] text-white italic font-serif-luxury text-lg md:text-xl">
              “{project.quote}”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="px-6 md:px-12 py-12 max-w-[1360px] mx-auto border-t border-white/10">
          <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] mb-8 font-semibold">
            Material & Detail Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <section className="px-6 md:px-12 py-16 max-w-[1360px] mx-auto border-t border-white/10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-1">
            Next Project
          </span>
          <Link
            href={`/work/${nextProject.slug}`}
            className="font-serif-luxury text-2xl md:text-3xl font-light text-white hover:text-[#b65234] transition-colors"
          >
            {nextProject.title} →
          </Link>
        </div>

        <Link
          href="/work"
          className="text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
        >
          View Archive
        </Link>
      </section>

      <CtaSection />
    </div>
  );
}
