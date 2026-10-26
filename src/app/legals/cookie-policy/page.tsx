import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#12100e] text-white pt-32 pb-20">
      <div className="max-w-[840px] mx-auto px-6 md:px-12">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-2 font-semibold">
          Legal Compliance
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
          Cookie Policy
        </h1>
        <div className="text-xs font-mono text-white/40 mb-8">
          PRANGON Studios Ltd. | Registered in Dhaka, Bangladesh | Updated: October 2026
        </div>

        <div className="space-y-6 text-xs md:text-sm text-white/75 font-light leading-relaxed border-t border-white/10 pt-6">
          <section>
            <h2 className="font-serif-luxury text-lg text-white mb-2 font-normal">
              1. Cookie Usage
            </h2>
            <p>
              PRANGON Studios utilizes essential functional cookies to deliver fluid layout animations, remember language preferences (English / বাংলা), and measure anonymous page performance metrics across devices.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-lg text-white mb-2 font-normal">
              2. Managing Preferences
            </h2>
            <p>
              You can modify or disable non-essential cookies via your browser settings at any time without restricting core architectural portfolio access.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-lg text-white mb-2 font-normal">
              3. Questions
            </h2>
            <p>
              For questions regarding our web policies, contact{' '}
              <a href="mailto:privacy@prangonstudios.com" className="text-[#bd7b58] hover:underline">
                privacy@prangonstudios.com
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
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
