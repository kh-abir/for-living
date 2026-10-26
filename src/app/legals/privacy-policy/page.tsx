import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#12100e] text-white pt-32 pb-20">
      <div className="max-w-[840px] mx-auto px-6 md:px-12">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#bd7b58] block mb-2 font-semibold">
          Legal Compliance
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <div className="text-xs font-mono text-white/40 mb-8">
          PRANGON Studios Ltd. | Registered in Dhaka, Bangladesh | Updated: October 2026
        </div>

        <div className="space-y-6 text-xs md:text-sm text-white/75 font-light leading-relaxed border-t border-white/10 pt-6">
          <section>
            <h2 className="font-serif-luxury text-lg text-white mb-2 font-normal">
              1. Data Controller
            </h2>
            <p>
              PRANGON Studios Ltd., with registered atelier at House 14, Road 71, Gulshan 2, Dhaka 1212, Bangladesh, is the Data Controller for personal information gathered through our online platforms and architectural project consultations.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-lg text-white mb-2 font-normal">
              2. Information Gathered
            </h2>
            <p>
              We gather information submitted through our commission inquiry forms—such as full name, professional contact details, project site locations, and architectural requirements. This data is handled with strict confidentiality.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-lg text-white mb-2 font-normal">
              3. Purpose of Processing
            </h2>
            <p>
              Data is utilized solely to prepare feasibility reports, technical proposals, workshop assignments, and legal contracting for interior engineering projects.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-lg text-white mb-2 font-normal">
              4. Inquiries & Data Rights
            </h2>
            <p>
              For inquiries regarding your stored client information, please email our legal counsel at{' '}
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
          <Link href="/legals/cookie-policy" className="text-white/60 hover:text-white transition-colors">
            Read Cookie Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
