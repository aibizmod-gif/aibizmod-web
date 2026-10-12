import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Target, Shield, Zap, Sparkles, Users, BarChart3 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyFooterLayout from '@/components/layout/StickyFooterLayout';
import AnimatedSection from '@/components/common/AnimatedSection';
import SectionHeading from '@/components/common/SectionHeading';
import ShaderBackground from '@/components/ui/shader-background';
import { getIndustry } from '@/data/industries';

interface IndustryBestPageProps {
  params: { industry: string };
}

const industryMap: Record<string, { slug: string; name: string; icon: string }> = {
  'retail-ecommerce': { slug: 'retail-ecommerce', name: 'Retail & E-commerce', icon: '🛒' },
  'finance': { slug: 'finance', name: 'Finance & Banking', icon: '💰' },
  'healthcare': { slug: 'healthcare', name: 'Healthcare & Health Tech', icon: '🏥' },
  'manufacturing-logistics': { slug: 'manufacturing-logistics', name: 'Manufacturing & Logistics', icon: '🏭' },
  'saas-subscription': { slug: 'saas-subscription', name: 'SaaS & Subscription', icon: '☁️' },
  'professional-services': { slug: 'professional-services', name: 'Professional Services', icon: '💼' },
  'legal': { slug: 'legal', name: 'Legal & Compliance', icon: '⚖️' },
  'education': { slug: 'education', name: 'Education & EdTech', icon: '🎓' },
  'real-estate': { slug: 'real-estate', name: 'Real Estate & Property', icon: '🏠' },
  'hospitality': { slug: 'hospitality', name: 'Hospitality & Food Service', icon: '🏨' },
  'sales-crm': { slug: 'sales-crm', name: 'Sales & CRM', icon: '📈' },
  'hr-recruitment': { slug: 'hr-recruitment', name: 'HR & Recruitment', icon: '👥' },
  'fitness': { slug: 'fitness', name: 'Fitness & Wellness', icon: '💪' },
  'content-media': { slug: 'content-media', name: 'Content & Media', icon: '📰' },
  'customer-support': { slug: 'customer-support', name: 'Customer Support', icon: '🎧' },
};

export function generateStaticParams() {
  return Object.values(industryMap).map((ind) => ({ industry: ind.slug }));
}

export function generateMetadata({ params }: IndustryBestPageProps): Metadata {
  const industryInfo = industryMap[params.industry];
  if (!industryInfo) return { title: 'Industry not found', robots: { index: false } };
  
  const industry = getIndustry(industryInfo.slug);
  if (!industry) return { title: 'Industry not found', robots: { index: false } };

  return {
    title: `Best AI SEO Agency for ${industryInfo.name} | aibizmod`,
    description: `Looking for the best AI SEO agency for ${industryInfo.name.toLowerCase()}? aibizmod delivers GEO audits, schema implementation, citation gap fixes, and 90-day roadmaps tailored for ${industryInfo.name.toLowerCase()}.`,
    alternates: { canonical: `https://aibizmod.com/best-ai-seo-agency/${industryInfo.slug}` },
    openGraph: {
      title: `Best AI SEO Agency for ${industryInfo.name} | aibizmod`,
      description: `GEO audits, schema fixes, and 90-day roadmaps for ${industryInfo.name.toLowerCase()}.`,
      url: `/best-ai-seo-agency/${industryInfo.slug}`,
    },
  };
}

function IndustryBestPage({ params }: IndustryBestPageProps) {
  const industryInfo = industryMap[params.industry];
  if (!industryInfo) notFound();

  const industry = getIndustry(industryInfo.slug);
  if (!industry) notFound();

  const faqSchema = industry.faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: industry.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }
    : null;

  return (
    <>
      <Navbar />
      <StickyFooterLayout footer={<Footer />}>
        <main className="bg-white text-ink">
          {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

          {/* Hero */}
          <section className="relative isolate overflow-hidden px-4 sm:px-6 pb-16 pt-32 md:pb-20 md:pt-36">
            <ShaderBackground className="absolute inset-0 z-0 h-full w-full opacity-80" />
            <div className="pointer-events-none absolute left-1/2 top-24 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-4xl">
              <nav className="mb-8 inline-flex flex-wrap items-center gap-1.5 rounded-full border border-cyan-100 bg-white/55 px-4 py-2 text-[13px] text-slate-500 shadow-[0_12px_35px_rgba(59,130,246,0.10)] backdrop-blur-md" aria-label="Breadcrumb">
                <Link href="/" className="transition-colors hover:text-[#0F172A]">Home</Link>
                <ChevronRight size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
                <Link href="/industries" className="transition-colors hover:text-[#0F172A]">Industries</Link>
                <ChevronRight size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
                <Link href={`/industries/${industryInfo.slug}`} className="transition-colors hover:text-[#0F172A]">{industryInfo.name}</Link>
                <ChevronRight size={13} className="shrink-0 text-cyan-300" aria-hidden="true" />
                <span className="font-medium text-[#0F172A]" aria-current="page">Best AI SEO Agency</span>
              </nav>

              <span className="text-5xl">{industryInfo.icon}</span>
              <h1 className="mt-4 font-display font-thin text-[#0F172A] text-balance" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.08 }}>
                Best AI SEO Agency for {industryInfo.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-500 max-w-3xl">
                {industry.tagline}
              </p>
            </div>
          </section>

          {/* Overview */}
          <section className="px-4 sm:px-6 py-16 bg-[#F8FEFF] border-y border-cyan-100">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <p className="text-base leading-relaxed text-slate-600">{industry.description}</p>
              </AnimatedSection>
            </div>
          </section>

          {/* Why aibizmod for this industry */}
          <section className="px-4 sm:px-6 py-16 bg-white">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <SectionHeading eyebrow="Why choose aibizmod" heading={`AI SEO Expertise for ${industryInfo.name}`} centered />
              </AnimatedSection>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Target, title: 'Industry-Specific Prompt Mapping', desc: `We build prompt sets from the actual queries ${industryInfo.name.toLowerCase()} buyers ask AI engines — not generic SEO keywords.` },
                  { icon: Shield, title: 'Citation Gap Analysis vs Competitors', desc: `We map exactly which ${industryInfo.name.toLowerCase()} competitors are cited in ChatGPT, Perplexity, Gemini, and Google AI Overviews — and where you're missing.` },
                  { icon: Zap, title: 'Schema & Entity Implementation', desc: `Industry-specific schema (Product, Service, LocalBusiness, Course, etc.) + entity disambiguation so AI engines know exactly what you do.` },
                  { icon: Sparkles, title: 'Content Restructuring for Extractability', desc: `We restructure your service pages with answer blocks, FAQs, and comparison tables that AI engines can cite directly.` },
                  { icon: Users, title: 'Authority Signal Building', desc: `We identify the directories, review sites, and publications that ${industryInfo.name.toLowerCase()} AI engines trust — and get you listed.` },
                  { icon: BarChart3, title: 'Monthly Scorecard & Roadmap', desc: `Track model share, citation count, and recommendation rate month-over-month with a prioritized 90-day action plan.` },
                ].map((item, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.06}>
                    <div className="rounded-xl border border-cyan-100 bg-[#F8FEFF] p-5 hover:bg-white hover:shadow-[0_8px_24px_rgba(59,130,246,0.06)] transition-all">
                      <div className="p-2 rounded-xl bg-cyan-50 text-cyan-700 w-fit mb-3">
                        <item.icon size={20} aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-bold text-[#0F172A] text-base mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Industry-specific challenges */}
          <section className="px-4 sm:px-6 py-16 bg-[#F8FEFF] border-y border-cyan-100">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <SectionHeading eyebrow="The Problem" heading={`Why ${industryInfo.name} Brands Struggle with AI Visibility`} centered />
              </AnimatedSection>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {industry.challenges.map((challenge, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.06}>
                    <div className="rounded-xl border border-cyan-100 bg-white/70 p-5 shadow-[0_8px_24px_rgba(59,130,246,0.06)]">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xs font-bold text-cyan-700">
                          {idx + 1}
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">{challenge}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Relevant services */}
          <section className="px-4 sm:px-6 py-16 bg-white">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <SectionHeading eyebrow="How We Help" heading="Services for This Industry" centered />
              </AnimatedSection>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {industry.services.map((svc, idx) => (
                  <AnimatedSection key={svc.href} delay={idx * 0.06}>
                    <Link href={svc.href} className="group block rounded-2xl border border-cyan-100 bg-white p-6 shadow-[0_8px_24px_rgba(59,130,246,0.06)] transition-all hover:border-cyan-200 hover:shadow-[0_12px_32px_rgba(59,130,246,0.12)]">
                      <h3 className="font-display font-bold text-[#0F172A] text-sm group-hover:text-cyan-700 transition-colors">{svc.name}</h3>
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed">{svc.description}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-700">
                        Learn more <ChevronRight size={12} />
                      </span>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Use cases */}
          <section className="px-4 sm:px-6 py-16 bg-[#F8FEFF] border-y border-cyan-100">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <SectionHeading eyebrow="In Practice" heading="Real Use Cases" centered />
              </AnimatedSection>
              <div className="mt-10 space-y-5">
                {industry.useCases.map((uc, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.06}>
                    <div className="rounded-xl border border-cyan-100 bg-white p-6">
                      <h3 className="font-display font-bold text-[#0F172A] text-sm">{uc.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{uc.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          {industry.faqs.length > 0 && (
            <section className="px-4 sm:px-6 py-16 bg-white">
              <div className="max-w-3xl mx-auto">
                <AnimatedSection>
                  <SectionHeading eyebrow="Common Questions" heading="Frequently Asked Questions" centered />
                </AnimatedSection>
                <div className="mt-10 space-y-4">
                  {industry.faqs.map((faq, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.06}>
                      <details className="group rounded-xl border border-cyan-100 bg-[#F8FEFF] p-5 open:bg-white open:shadow-[0_8px_24px_rgba(59,130,246,0.06)] transition-all">
                        <summary className="cursor-pointer text-sm font-semibold text-[#0F172A] leading-relaxed list-none flex items-center justify-between gap-4">
                          {faq.q}
                          <span className="shrink-0 text-cyan-400 group-open:rotate-180 transition-transform duration-200">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                        </summary>
                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                      </details>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="px-4 sm:px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(15,23,42,0.15)] transition hover:bg-[#1e293b]"
              >
                Get Your ${industryInfo.name} AI Visibility Audit
              </Link>
              <p className="mt-4 text-sm text-slate-500">
                Or <Link href={`/industries/${industryInfo.slug}`} className="text-cyan-700 hover:underline">view the full industry page</Link>
              </p>
            </div>
          </section>
        </main>
      </StickyFooterLayout>
    </>
  );
}

export default IndustryBestPage;