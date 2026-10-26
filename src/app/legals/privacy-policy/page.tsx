import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#080e00] text-white pt-36 pb-28">
      <div className="max-w-[860px] mx-auto px-6 md:px-12">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#b65234] block mb-3 font-semibold">
          Legal Compliance
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-light text-white tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="text-xs font-mono text-white/40 mb-12">
          Effective Date: January 1, 2026 | Last Updated: October 2026
        </div>

        <div className="space-y-8 text-sm text-white/75 font-light leading-relaxed border-t border-white/10 pt-8">
          <section>
            <h2 className="font-serif-luxury text-xl text-white mb-3 font-normal">
              1. Data Controller
            </h2>
            <p>
              For Living S.r.l., with registered office in Milan, Italy (Via Brera 24, 20121 Milano, VAT ID IT12345678901), is the Data Controller for the personal information collected and processed through this website and during our client architectural engagements.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-xl text-white mb-3 font-normal">
              2. Information We Collect
            </h2>
            <p>
              We collect information provided directly by you when submitting our project consultation forms, including full name, professional email address, telephone contact, project location, and architectural specifications. Additionally, we may automatically collect anonymous telemetry data including browser type, operating system, and IP address for diagnostic and performance optimization.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-xl text-white mb-3 font-normal">
              3. Purpose & Legal Basis for Processing
            </h2>
            <p>
              Your personal information is processed strictly for the following purposes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Responding to commercial inquiries and engineering requests</li>
              <li>Drafting quotes, production contracts, and project execution schedules</li>
              <li>Fulfilling legal, tax, and regulatory compliance obligations in Italy and the European Union</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif-luxury text-xl text-white mb-3 font-normal">
              4. Data Retention and Security
            </h2>
            <p>
              We implement industry-standard encryption, strict access controls, and secure physical infrastructure to protect your confidential drawings, project details, and contact data against unauthorized disclosure, loss, or alteration.
            </p>
          </section>

          <section>
            <h2 className="font-serif-luxury text-xl text-white mb-3 font-normal">
              5. Your Rights Under GDPR
            </h2>
            <p>
              Pursuant to Articles 15–22 of the EU General Data Protection Regulation (GDPR), you retain the right to access, rectify, restrict, or request erasure of your personal data at any time. To exercise these rights, please contact our Data Protection Officer at{' '}
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
          <Link href="/legals/cookie-policy" className="text-white/60 hover:text-white transition-colors">
            Read Cookie Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
