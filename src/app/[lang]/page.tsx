import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";

function HexPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  );
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-verde-950 text-white overflow-hidden">
        <HexPattern />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-verde-400 text-sm font-mono tracking-wider uppercase mb-6">
            {dict.hero.tag}
          </p>
          <h1 className="text-4xl md:text-[3.5rem] font-bold leading-[1.1] max-w-2xl">
            {dict.hero.title}
          </h1>
          <p className="mt-8 text-base md:text-lg text-verde-200/60 max-w-xl leading-relaxed">
            {dict.hero.description}
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-verde-500 text-white text-sm font-medium rounded hover:bg-verde-400 transition-colors"
            >
              {dict.hero.cta}
            </a>
            <a
              href="#what-we-do"
              className="px-5 py-2.5 text-verde-300 text-sm font-medium hover:text-white transition-colors"
            >
              {dict.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* Thin accent divider */}
      <div className="h-px bg-gradient-to-r from-verde-500/80 via-verde-400/40 to-transparent" />

      {/* What We Do */}
      <section id="what-we-do" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal-950">
              {dict.howItWorks.title}
            </h2>
            <p className="mt-3 text-charcoal-400 max-w-lg">
              {dict.howItWorks.subtitle}
            </p>
          </FadeIn>

          <div className="mt-16 space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-14">
            {dict.howItWorks.steps.map((step) => (
              <FadeIn key={step.number} className="md:border-l md:border-charcoal-100 md:pl-8">
                <span className="text-sm font-mono text-verde-600">{step.number}</span>
                <h3 className="mt-2 text-lg font-semibold text-charcoal-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-500 leading-relaxed">
                  {step.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section id="markets" className="py-20 md:py-28 bg-verde-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold">
              {dict.markets.title}
            </h2>
            <p className="mt-3 text-verde-200/50 max-w-lg">
              {dict.markets.subtitle}
            </p>
          </FadeIn>

          <FadeIn className="mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-verde-800/30">
              {dict.markets.items.map((market) => (
                <div
                  key={market.name}
                  className="bg-verde-950 p-8 hover:bg-verde-900/50 transition-colors"
                >
                  <h3 className="font-semibold text-white">{market.name}</h3>
                  <p className="mt-2 text-sm text-verde-200/50">
                    {market.detail}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal-950">
                {dict.contact.title}
              </h2>
              <p className="mt-3 text-charcoal-400">
                {dict.contact.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <ContactForm form={dict.contact.form} />
            </div>

            <div className="md:col-span-2 md:pl-8 md:border-l md:border-charcoal-100">
              <div className="space-y-6 text-sm">
                <div>
                  <div className="font-medium text-charcoal-900">{dict.contact.info.email}</div>
                  <div className="text-charcoal-500 mt-1">{dict.contact.info.emailValue}</div>
                </div>
                <div>
                  <div className="font-medium text-charcoal-900">{dict.contact.info.location}</div>
                  <div className="text-charcoal-500 mt-1">{dict.contact.info.locationValue}</div>
                </div>
                <div>
                  <div className="font-medium text-charcoal-900">{dict.contact.info.response}</div>
                  <div className="text-charcoal-500 mt-1">{dict.contact.info.responseValue}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer rights={dict.footer.rights} />
    </>
  );
}
