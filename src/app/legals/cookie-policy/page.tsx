import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#080e00] text-white pt-36 pb-28">
      <div className="max-w-[860px] mx-auto px-6 md:px-12">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
          Legal Compliance
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-light text-white tracking-tight mb-8">
          Cookie Policy
        </h1>
        <div className="text-xs font-mono text-white/40 mb-12">
          Effective Date: January 1, 2026 | Last Updated: October 2026
        </div>

        <div className="space-y-8 text-sm text-white/75 font-light leading-relaxed border-t border-white/10 pt-8">
          <section>
            <h2 className="font-serif-luxury text-xl text-white mb-3 font-normal">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when visiting websites. They facilitate seamless navigation, preserve session preferences, and provide analytical insights into website performance.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-xl text-white mb-3 font-normal">
              2. Types of Cookies We Utilize
            </h2>
            <div className="space-y-4">
              <div>
                <strong className="text-white block font-medium">Strictly Necessary Cookies</strong>
                <span>
                  Essential for the structural operation of the website, including secure transmission, navigation state persistence, and responsive viewport rendering.
                </span>
              </div>
              <div>
                <strong className="text-white block font-medium">Performance & Analytics Cookies</strong>
                <span>
                  Collect aggregated, anonymous statistics regarding visitor behavior, page load times, and scroll choreography to refine our digital presentation.
                </span>
              </div>
              <div>
                <strong className="text-white block font-medium">Preference Cookies</strong>
                <span>
                  Retain localized settings such as language selection (En / It) and viewport media query configurations.
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif-luxury text-xl text-white mb-3 font-normal">
              3. Managing Cookie Preferences
            </h2>
            <p>
              You can adjust or disable non-essential cookies via your browser preferences at any moment. Note that disabling certain essential cookies may restrict fluid interaction with our bespoke animations and image carousels.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-xl text-white mb-3 font-normal">
              4. Inquiries
            </h2>
            <p>
              For further questions regarding our cookie practices, please contact us at{' '}
              <a href="mailto:privacy@for-living.it" className="text-[#b65234] hover:underline">
                privacy@for-living.it
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <Link href="/" className="text-white/60 hover:text-white transition-colors">
            ← Return to Homepage
          </Link>
          <Link href="/legals/privacy-policy" className="text-white/60 hover:text-white transition-colors">
            Read Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
