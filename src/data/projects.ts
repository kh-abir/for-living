import projectsData from './projects.json';

export interface Project {
  slug: string;
  title: string;
  initials: string;
  img: string;
  category?: 'Residential' | 'Commercial' | 'Marine';
  location?: string;
  size?: string;
  year?: string;
  services?: string;
  description?: string;
  quote?: string;
  gallery?: string[];
}

const defaultDescriptions: Record<string, { category: 'Residential' | 'Commercial' | 'Marine', location: string, size: string, description: string, services: string }> = {
  'villa-lindi': {
    category: 'Residential',
    location: 'Cannes, France',
    size: '10,764 sq ft / 1,000 m²',
    description: 'Sunlight and expansive Mediterranean views effortlessly merge across this magnificent Riviera villa, curated with a premium loose furniture and decoration package specifically designed to maximize open-space fluidity and create a sophisticated harmony between contemporary architecture and the seaside landscape.',
    services: 'FF & E Procurement, Bespoke Wood-Slat Joinery, Turnkey Installation'
  },
  'la-chamade': {
    category: 'Residential',
    location: 'Geneva, Switzerland',
    size: '8,400 sq ft / 780 m²',
    description: 'An alpine sanctuary reinterpreting Swiss chalet warmth with Milanese refinement. Features rich smoked oak cabinetry, hand-stitched saddle leather details, and bespoke bronze lighting pieces manufactured exclusively in Lombardy.',
    services: 'Turnkey Interior Execution, Bespoke Cabinetry, Master Lighting'
  },
  'ad-russia': {
    category: 'Residential',
    location: 'Moscow, Russia',
    size: '6,200 sq ft / 575 m²',
    description: 'Editorial-grade residential apartment celebrating bold proportions, sculpted monolithic stone fireplaces, and custom curved seating engineered for seamless acoustic intimacy.',
    services: 'Architectural Joinery, Curated Art Furniture, Custom Metalwork'
  },
  'villa-in-provence': {
    category: 'Residential',
    location: 'Aix-en-Provence, France',
    size: '12,500 sq ft / 1,160 m²',
    description: 'Historic stone bastide renovated to museum quality. Preserved centuries-old ceiling beams paired with minimalist Carrara marble islands and brushed nickel hardware.',
    services: 'Stone Masonry Integration, Loose Furniture, Bespoke Kitchen'
  },
  's-s-new-a': {
    category: 'Marine',
    location: 'Monaco / Mediterranean',
    size: '55m Superyacht',
    description: 'High-performance marine interior engineered with ultralight carbon-core honeycomb panels clad in parchment leather, teak veneers, and marine-grade stainless hardware.',
    services: 'Superyacht Interior Engineering, Marine Joinery, Turnkey Fitout'
  },
  's-s-beatrice': {
    category: 'Marine',
    location: 'Genoa, Italy',
    size: '62m Mega Yacht',
    description: 'Bespoke floating palace featuring acoustic dampening wall systems, custom hand-tufted silk carpets, and mirror-polished titanium living room accents.',
    services: 'Naval FF&E, Marine Certification, Artisan Glasswork'
  },
  'hotel-milestone': {
    category: 'Commercial',
    location: 'London, UK',
    size: '42,000 sq ft / 3,900 m²',
    description: 'Boutique luxury hospitality suites engineered to withstand heavy footfall while maintaining the delicate intimacy of private Italian salons.',
    services: 'Commercial FF&E, High-Durability Millwork, Public Area Fitout'
  },
  'carolina-herrera': {
    category: 'Commercial',
    location: 'Milan, Italy',
    size: '5,500 sq ft / 510 m²',
    description: 'Flagship fashion boutique where architectural geometry meets luxury couture finishes. Features polished travertine display plinths and backlit brushed brass showcases.',
    services: 'Retail Turnkey Fitout, Display Systems, Precision Lighting'
  }
};

export const projects: Project[] = (projectsData as any[]).map((p, idx) => {
  const custom = defaultDescriptions[p.slug] || {
    category: idx % 3 === 0 ? 'Residential' : idx % 3 === 1 ? 'Commercial' : 'Marine',
    location: 'Milan / Côte d’Azur',
    size: '7,500 sq ft / 700 m²',
    description: `A masterclass in bespoke Italian interior engineering. Every joint, seam, and surface is meticulously crafted by Italian artisans, connecting contemporary architecture to time-honored artisanal traditions.`,
    services: 'Full Turnkey Procurement, Bespoke Millwork & FF&E'
  };

  return {
    ...p,
    ...custom,
    year: '2024',
    quote: 'The poetry of Italian design brought to life with disciplined German-standard engineering precision.',
    gallery: [
      p.img,
      '/assets/craft-villa.avif',
      '/assets/craft-engineering.avif',
      '/assets/bg-complexity.avif'
    ]
  };
});

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
