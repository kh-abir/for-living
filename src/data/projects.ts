import projectsData from './projects.json';

export interface Project {
  slug: string;
  title: string;
  initials: string;
  img: string;
  category: 'Residential' | 'Commercial' | 'Marine';
  location: string;
  size: string;
  year?: string;
  services?: string;
  description?: string;
  quote?: string;
  gallery?: string[];
}

const detailedDescriptions: Record<string, { description: string, services: string, quote: string }> = {
  'gulshan-lakeside-residence': {
    description: 'Perched along the serene Gulshan lakefront, this private residence synthesizes Muzharul Islam modernist geometry with hand-crafted delta materials. Features seasoned Burma teak louvers, hand-chiseled Jaflong black stone vanity slabs, and custom Dhamrai cast-brass door hardware calibrated for acoustic dampening.',
    services: 'Turnkey Architectural Joinery, Bespoke Teak FF&E, Custom Brass Hardware',
    quote: 'The courtyard breathes with Bengal lake breezes, brought to life through disciplined joinery and river stone.'
  },
  'bhuiyan-tea-estate-bungalow': {
    description: 'Set amidst the lush undulating slopes of Sreemangal tea estates, this retreat marries colonial plantation nostalgia with ultra-clean minimalist detailing. Hand-burnished terracotta floor tiles harmonize with sustainable Chittagong gamari wood trusses and hand-woven cane acoustic ceilings.',
    services: 'Timber Roof Engineering, Cane Ceiling Weaving, White-Glove Fitout',
    quote: 'A timeless sanctuary honoring the rich tea heritage of Sylhet through climate-resilient craftsmanship.'
  },
  'the-glass-pavilion': {
    description: 'Located in Dhaka\'s Baridhara Diplomatic Zone, this minimalist residence features structural glass curtain walls enveloped by hand-fired Panchagarh terracotta jali screens. Filtered tropical daylight dances over polished terrazzo floors and custom hand-loomed silk drapery.',
    services: 'Terracotta Jali Engineering, Architectural Glazing, Turnkey Procurement',
    quote: 'Light, shade, and brick—capturing the poetic essence of tropical modernism.'
  },
  'inani-cliffside-sanctuary': {
    description: 'Overlooking the turquoise breakers of Inani Beach, this coastal villa is engineered with marine-grade teak, salt-resistant bronze fixtures, and porous coral-infused stucco walls. Large deep eaves shade generous verandahs oriented to capture south-westerly monsoon sea winds.',
    services: 'Marine-Grade Joinery, Coastal Hardware Procurement, Verandah Millwork',
    quote: 'Living in harmony with the sea, protected by generations of maritime boat-building joinery.'
  },
  'karnaphuli-marine-club': {
    description: 'Constructed at the historic meeting point of the Karnaphuli river and the Bay of Bengal, this private lounge features custom lightweight river-craft paneling, hand-stitched tan saddle leather banquettes, and nautical brass porthole detailing crafted by Chittagong shipwrights.',
    services: 'Naval Interior Fitout, Commercial FF&E, Maritime Acoustic Wall Panels',
    quote: 'A tribute to Bengal\'s riverine civilization, built with shipyard precision.'
  },
  'bay-of-bengal-yacht-suite': {
    description: 'A 48-meter custom expedition yacht interior engineered with honeycomb carbon panels clad in honey-toned sustainable Sundari veneers, hand-woven jute composite wall linings, and titanium-reinforced marine cabinetry.',
    services: 'Superyacht Interior Engineering, Lightweight Joinery, Maritime Certification',
    quote: 'Navigating open ocean waters wrapped in Bengal craftsmanship.'
  }
};

export const projects: Project[] = (projectsData as any[]).map((p) => {
  const custom = detailedDescriptions[p.slug] || {
    description: `A masterclass in bespoke Bengal interior engineering. Handcrafted by master artisans in Savar, Dhamrai, and Chittagong, connecting contemporary architecture to Bangladesh's rich legacy of craft and materiality.`,
    services: 'Full Turnkey Procurement, Bespoke Millwork & Architectural FF&E',
    quote: 'The poetry of Bengal design brought to life with disciplined engineering precision.'
  };

  return {
    ...p,
    ...custom,
    year: '2024',
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
