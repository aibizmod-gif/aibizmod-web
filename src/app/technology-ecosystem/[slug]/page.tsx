import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ChevronRight,
  ArrowRight,
  Boxes,
  Database,
  Cloud,
  Cpu,
  Network,
  Bot,
  ShieldCheck,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyFooterLayout from '@/components/layout/StickyFooterLayout';
import AnimatedSection from '@/components/common/AnimatedSection';
import SectionHeading from '@/components/common/SectionHeading';
import ShaderBackground from '@/components/ui/shader-background';
import { technologyPlatforms, getTechnologyPlatform } from '@/data/technology-ecosystem';

interface TechnologyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return technologyPlatforms.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: TechnologyPageProps): Metadata {
  const platform = getTechnologyPlatform(params.slug);
  if (!platform) return { title: 'Technology not found', robots: { index: false } };
  const canonical = `https://aibizmod.com/technology-ecosystem/${platform.slug}`;
  return {
    title: `${platform.name} — ${platform.badge} | aibizmod`,
    description: platform.description,
    alternates: { canonical },
    openGraph: {
      title: `${platform.name} | aibizmod`,
      description: platform.description,
      url: canonical,
      type: 'website',
    },
  };
}

const icons: Record<string, LucideIcon> = {
  microsoft: Layers,
  temenos: Database,
  sap: Boxes,
  salesforce: Network,
  ibm: Cpu,
  aws: Cloud,
  oracle: Database,
  'red-hat': ShieldCheck,
};

export default function TechnologyPage({ params }: TechnologyPageProps) {
  const platform = getTechnologyPlatform(params.slug);
  if (!platform) notFound();

  const Icon = icons[platform.slug] || Bot;
  const canonical = `https://aibizmod.com/technology-ecosystem/${platform.slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aibizmod.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Technology Ecosystem',
        item: 'https://aibizmod.com/technology-ecosystem',
      },
      { '@type': 'ListItem', position: 3, name: platform.name, item: canonical },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${platform.name} Technology Capabilities`,
    description: platform.description,
    url: canonical,
    publisher: {
      '@type': 'Organization',
      name: 'aibizmod',
      url: 'https://aibizmod.com',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: platform.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Navbar />
      <StickyFooterLayout footer={<Footer />}>
        <main className="bg-white text-ink">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

          {/* ── Hero ────────────────────────────────────────────────────── */}
          <section className="relative isolate overflow-hidden px-4 sm:px-6 pb-16 pt-32 md:pb-24 md:pt-36">
            <ShaderBackground className="absolute inset-0 z-0 h-full w-full opacity-80" />
            <div className="pointer-events-none absolute left-1/2 top-24 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <nav
                className="mb-8 inline-flex flex-wrap items-center gap-1.5 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-[13px] text-slate-500 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="transition-colors hover:text-[#0F172A]">Home</Link>
                <ChevronRight size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
                <Link href="/technology-ecosystem" className="transition-colors hover:text-[#0F172A]">Technology Ecosystem</Link>
                <ChevronRight size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
                <span className="font-medium text-[#0F172A]" aria-current="page">{platform.name}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 px-3 text-cyan-700">
                  {platform.icon ? (
                    <img
                      src={platform.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-auto max-w-[6rem] object-contain"
                    />
                  ) : (
                    <Icon size={20} />
                  )}
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">{platform.badge}</span>
              </div>

              <h1 className="font-display font-thin text-[#0F172A] text-balance" style={{ fontSize: 'clamp(34px, 5vw, 54px)', lineHeight: 1.06 }}>
                {platform.name}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-3xl">
                {platform.tagline}
              </p>
            </div>
          </section>

          {/* ── Overview ────────────────────────────────────────────────── */}
          <section className="px-4 sm:px-6 py-14 bg-gradient-to-b from-[#F0FDFF]/70 to-white border-b border-cyan-100/60">
            <div className="mx-auto max-w-4xl">
              <AnimatedSection>
                <SectionHeading eyebrow="Overview" heading="What this technology covers" centered />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
                  {platform.description}
                </p>
                <p className="mt-4 text-sm text-cyan-700 font-medium">
                  Explore: {platform.explore}
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* ── Capabilities ────────────────────────────────────────────── */}
          <section className="px-4 sm:px-6 py-16 bg-white">
            <div className="mx-auto max-w-6xl">
              <AnimatedSection>
                <SectionHeading eyebrow="Capabilities" heading={`What we explore with ${platform.name}`} centered />
              </AnimatedSection>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {platform.capabilities.map((cap, i) => (
                  <AnimatedSection key={cap.title} delay={i * 0.05}>
                    <div className="h-full rounded-2xl border border-cyan-100/80 bg-white/70 p-6 shadow-[0_8px_24px_rgba(59,130,246,0.05)] transition hover:border-cyan-200 hover:shadow-[0_14px_40px_rgba(8,145,178,0.10)]">
                      <div className="flex h-11 min-w-11 w-fit items-center justify-center rounded-xl border border-cyan-100 bg-white px-2.5 text-cyan-700">
                        {platform.icon ? (
                          <img
                            src={platform.icon}
                            alt=""
                            aria-hidden="true"
                            className="h-5 w-auto max-w-[4.5rem] object-contain"
                          />
                        ) : (
                          <Icon size={18} />
                        )}
                      </div>
                      <h3 className="mt-4 font-display font-semibold text-[#0F172A] text-lg leading-snug">{cap.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{cap.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── Related Services ────────────────────────────────────────── */}
          <section className="px-4 sm:px-6 py-16 bg-slate-50/60 border-y border-cyan-100/80">
            <div className="mx-auto max-w-6xl">
              <AnimatedSection>
                <SectionHeading eyebrow="Related services" heading="How we can help" centered />
                <p className="mt-4 text-slate-500 text-center max-w-2xl mx-auto text-sm leading-relaxed">
                  These are the aibizmod services most relevant when working with {platform.name}.
                </p>
              </AnimatedSection>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {platform.services.map((service, i) => (
                  <AnimatedSection key={service.name} delay={i * 0.06}>
                    <Link href={service.href} className="group flex h-full flex-col rounded-2xl border border-cyan-100/80 bg-white p-6 shadow-[0_8px_24px_rgba(59,130,246,0.05)] transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_16px_44px_rgba(8,145,178,0.12)]">
                      <h3 className="font-display font-semibold text-[#0F172A] text-base leading-snug group-hover:text-cyan-700 transition-colors">
                        {service.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700">
                        View service
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQs ────────────────────────────────────────────────────── */}
          <section className="px-4 sm:px-6 py-16 bg-white">
            <div className="mx-auto max-w-3xl">
              <AnimatedSection>
                <SectionHeading eyebrow="FAQ" heading={`${platform.name} — Common Questions`} centered />
              </AnimatedSection>
              <div className="mt-10 space-y-4">
                {platform.faqs.map((faq, i) => (
                  <AnimatedSection key={faq.q} delay={i * 0.04}>
                    <div className="rounded-2xl border border-cyan-100/80 bg-white/70 p-6 shadow-[0_8px_24px_rgba(59,130,246,0.05)]">
                      <h3 className="font-display font-semibold text-[#0F172A] text-base leading-snug">{faq.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{faq.a}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.12} className="mt-12 text-center">
                <Link
                  href="/technology-ecosystem"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition hover:border-cyan-200 hover:bg-cyan-50"
                >
                  <ArrowLeft size={16} />
                  All Technologies
                </Link>
              </AnimatedSection>
            </div>
          </section>

          {/* ── CTA ─────────────────────────────────────────────────────── */}
          <section className="relative overflow-hidden bg-white px-6 py-20">
            <div className="mx-auto max-w-4xl rounded-[32px] border border-cyan-100 bg-[#ECFEFF]/70 p-8 text-center shadow-[0_22px_70px_rgba(8,145,178,0.12)] backdrop-blur-md md:p-12">
              <AnimatedSection>
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800 shadow-sm mb-4">
                  <Bot size={14} className="text-cyan-600" />
                  Next Steps
                </div>
                <h2 className="font-display font-thin text-[#0F172A]" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1 }}>
                  Exploring {platform.name} for Your Business?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Tell us about your current stack and goals. We will assess fit, scope the work,
                  and recommend the most practical path forward.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0f172a] px-7 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(15,23,42,0.35)]"
                  >
                    Discuss Your Requirements
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