import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Layers, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyFooterLayout from '@/components/layout/StickyFooterLayout';
import AnimatedSection from '@/components/common/AnimatedSection';
import SectionHeading from '@/components/common/SectionHeading';
import ShaderBackground from '@/components/ui/shader-background';
import { technologyPlatforms } from '@/data/technology-ecosystem';

export const metadata: Metadata = {
  title: 'Technology Ecosystem — Microsoft, AWS, Salesforce & More | aibizmod',
  description:
    'Explore the technology platforms we work across — Microsoft, Temenos, SAP, Salesforce, IBM, AWS, Oracle, and Red Hat — and how each one fits your business operations.',
  alternates: { canonical: 'https://aibizmod.com/technology-ecosystem' },
  openGraph: {
    title: 'Technology Ecosystem | aibizmod',
    description:
      'Explore the technology platforms behind business transformation — from Microsoft and AWS to Salesforce, SAP, Oracle, and Red Hat.',
    url: 'https://aibizmod.com/technology-ecosystem',
    type: 'website',
  },
};

const cardAccents: Record<string, string> = {
  microsoft: 'text-cyan-700 bg-cyan-50 border-cyan-200',
  temenos: 'text-indigo-700 bg-indigo-50 border-indigo-200',
  sap: 'text-amber-700 bg-amber-50 border-amber-200',
  salesforce: 'text-sky-700 bg-sky-50 border-sky-200',
  ibm: 'text-blue-700 bg-blue-50 border-blue-200',
  aws: 'text-orange-700 bg-orange-50 border-orange-200',
  oracle: 'text-red-700 bg-red-50 border-red-200',
  'red-hat': 'text-rose-700 bg-rose-50 border-rose-200',
};

export default function TechnologyEcosystemPage() {
  const directorySchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Technology Ecosystem',
    description:
      'Technology platforms we explore and integrate as part of business transformation.',
    url: 'https://aibizmod.com/technology-ecosystem',
    itemListElement: technologyPlatforms.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `https://aibizmod.com/technology-ecosystem/${p.slug}`,
    })),
  };

  return (
    <>
      <Navbar />
      <StickyFooterLayout footer={<Footer />}>
        <main className="bg-white text-ink">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(directorySchema) }} />

          {/* ── Top Header & Breadcrumb Bar ─────────────────────────────── */}
          <div className="pt-28 pb-4 px-6 bg-gradient-to-b from-[#F0FDFF] to-[#F0FDFF]/60 border-b border-cyan-100/60">
            <div className="mx-auto max-w-7xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <nav
                className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-cyan-100 bg-white/70 px-4 py-1.5 text-[13px] text-slate-500 shadow-sm backdrop-blur-md"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="transition-colors hover:text-[#0F172A]">
                  Home
                </Link>
                <ChevronRight size={13} className="shrink-0 text-cyan-400" aria-hidden="true" />
                <span className="font-semibold text-[#0F172A]" aria-current="page">
                  Technology Ecosystem
                </span>
              </nav>

              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                8 Technology Platforms
              </div>
            </div>
          </div>

          {/* ── Hero ────────────────────────────────────────────────────── */}
          <section className="relative isolate overflow-hidden px-4 sm:px-6 pb-14 pt-16 md:pb-20 md:pt-20">
            <ShaderBackground className="absolute inset-0 z-0 h-full w-full opacity-80" />
            <div className="pointer-events-none absolute left-1/2 top-20 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800 shadow-sm backdrop-blur-md mb-5">
                <Layers size={14} className="text-cyan-600" />
                Technology Ecosystem
              </div>
              <h1 className="font-display font-thin text-[#0F172A] text-balance" style={{ fontSize: 'clamp(34px, 5vw, 54px)', lineHeight: 1.06 }}>
                Explore the Technologies Behind Business Transformation
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                We help businesses evaluate, adopt, and integrate the technology platforms behind
                modern operations — from cloud infrastructure and AI to CRM, enterprise applications,
                and data platforms. Explore each technology to understand what it can do and how it
                fits your organisation.
              </p>
            </div>
          </section>

          {/* ── Platform Directory Grid ─────────────────────────────────── */}
          <section className="px-4 sm:px-6 py-14 bg-white">
            <div className="mx-auto max-w-7xl">
              <AnimatedSection>
                <SectionHeading eyebrow="The Ecosystem" heading="Technology Platforms We Work With" centered />
                <p className="mt-4 text-slate-500 text-center max-w-2xl mx-auto text-sm leading-relaxed">
                  Each platform page covers what the technology does, the capabilities we explore,
                  and how it connects to the services we deliver.
                </p>
              </AnimatedSection>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {technologyPlatforms.map((platform, i) => (
                  <AnimatedSection key={platform.slug} delay={i * 0.05}>
                    <Link
                      href={`/technology-ecosystem/${platform.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-cyan-100/80 bg-white p-6 shadow-[0_8px_24px_rgba(59,130,246,0.06)] transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_48px_rgba(8,145,178,0.12)]"
                    >
                      <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold border ${cardAccents[platform.slug] ?? cardAccents.microsoft}`}>
                        {platform.badge}
                      </span>
                      <h2 className="mt-4 font-display font-semibold text-lg text-[#0F172A] leading-snug group-hover:text-cyan-700 transition-colors">
                        {platform.name}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                        {platform.tagline}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700">
                        Learn more
                        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── How It Works ────────────────────────────────────────────── */}
          <section className="px-4 sm:px-6 py-16 bg-slate-50/60 border-y border-cyan-100/80">
            <div className="mx-auto max-w-6xl">
              <AnimatedSection>
                <SectionHeading eyebrow="How we help" heading="From Evaluation to Integration" centered />
              </AnimatedSection>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {[
                  {
                    step: '01',
                    title: 'Evaluate',
                    description: 'We assess which technology platforms genuinely fit your business model, operations, and existing systems — before any commitment.',
                  },
                  {
                    step: '02',
                    title: 'Plan',
                    description: 'We scope the integration, migration, or adoption path with realistic timelines and decision-ready findings rather than open-ended reports.',
                  },
                  {
                    step: '03',
                    title: 'Build & Integrate',
                    description: 'We design, build, and deploy the solution inside your environments and accounts, with clear ownership of credentials, code, and costs.',
                  },
                ].map((s, i) => (
                  <AnimatedSection key={s.step} delay={i * 0.08}>
                    <div className="h-full rounded-2xl border border-cyan-100/80 bg-white p-6 shadow-[0_8px_24px_rgba(59,130,246,0.05)]">
                      <span className="font-display text-3xl font-bold text-cyan-200">{s.step}</span>
                      <h3 className="mt-3 font-display font-semibold text-[#0F172A] text-lg">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ─────────────────────────────────────────────────────── */}
          <section className="relative overflow-hidden bg-white px-6 py-20">
            <div className="mx-auto max-w-4xl rounded-[32px] border border-cyan-100 bg-[#ECFEFF]/70 p-8 text-center shadow-[0_22px_70px_rgba(8,145,178,0.12)] backdrop-blur-md md:p-12">
              <AnimatedSection>
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800 shadow-sm mb-4">
                  <Layers size={14} className="text-cyan-600" />
                  Find the Right Technology for Your Business
                </div>
                <h2 className="font-display font-thin text-[#0F172A]" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1 }}>
                  Not Sure Which Platform Fits?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Every business has a different starting point. Tell us about your current stack,
                  goals, and constraints — we will help you shortlist the technologies that genuinely
                  matter and plan the next step.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0f172a] px-7 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(15,23,42,0.35)]"
                  >
                    Discuss Your Technology Requirements
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>
      </StickyFooterLayout>
    </>
  );
}