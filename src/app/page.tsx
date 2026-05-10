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

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-verde-950 text-white overflow-hidden">
        <HexPattern />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-verde-400 text-sm font-mono tracking-wider uppercase mb-6">
            Nanomaterials Distribution
          </p>
          <h1 className="text-4xl md:text-[3.5rem] font-bold leading-[1.1] max-w-2xl">
            We bring high-purity nanomaterials from proven producers to US industry.
          </h1>
          <p className="mt-8 text-base md:text-lg text-verde-200/60 max-w-xl leading-relaxed">
            Graphene nanoplatelets, graphene oxide, reduced graphene oxide — sourced
            from ISO-certified facilities, independently tested in US labs, delivered
            with full regulatory compliance.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-verde-500 text-white text-sm font-medium rounded hover:bg-verde-400 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#what-we-do"
              className="px-5 py-2.5 text-verde-300 text-sm font-medium hover:text-white transition-colors"
            >
              How it works
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
              How it works
            </h2>
            <p className="mt-3 text-charcoal-400 max-w-lg">
              We handle the hard parts so you don&apos;t have to.
            </p>
          </FadeIn>

          <div className="mt-16 space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-14">
            <FadeIn className="md:border-l md:border-charcoal-100 md:pl-8">
              <span className="text-sm font-mono text-verde-600">01</span>
              <h3 className="mt-2 text-lg font-semibold text-charcoal-900">
                Sourcing & vetting
              </h3>
              <p className="mt-2 text-sm text-charcoal-500 leading-relaxed">
                We work directly with established producers — companies with real
                facilities, ISO certification, and industrial-scale output. Not
                university labs. Not brokers reselling from Alibaba.
              </p>
            </FadeIn>

            <FadeIn className="md:border-l md:border-charcoal-100 md:pl-8">
              <span className="text-sm font-mono text-verde-600">02</span>
              <h3 className="mt-2 text-lg font-semibold text-charcoal-900">
                Independent testing
              </h3>
              <p className="mt-2 text-sm text-charcoal-500 leading-relaxed">
                Every material we distribute gets characterized at US laboratories.
                Raman spectroscopy, SEM/EDS, XRD, AFM — the full panel. We build
                the TDS and COA that procurement teams actually trust.
              </p>
            </FadeIn>

            <FadeIn className="md:border-l md:border-charcoal-100 md:pl-8">
              <span className="text-sm font-mono text-verde-600">03</span>
              <h3 className="mt-2 text-lg font-semibold text-charcoal-900">
                Regulatory & logistics
              </h3>
              <p className="mt-2 text-sm text-charcoal-500 leading-relaxed">
                TSCA compliance, customs classification, SDS documentation, import
                logistics. We clear the regulatory path so materials move smoothly
                from origin to your facility.
              </p>
            </FadeIn>

            <FadeIn className="md:border-l md:border-charcoal-100 md:pl-8">
              <span className="text-sm font-mono text-verde-600">04</span>
              <h3 className="mt-2 text-lg font-semibold text-charcoal-900">
                US-based distribution
              </h3>
              <p className="mt-2 text-sm text-charcoal-500 leading-relaxed">
                Local warehousing, responsive support, consistent supply. We&apos;re
                your stateside partner — not a middleman overseas you can&apos;t
                reach on the phone.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section id="markets" className="py-20 md:py-28 bg-verde-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold">
              Industries we serve
            </h2>
            <p className="mt-3 text-verde-200/50 max-w-lg">
              Nanomaterials are already in production across these sectors. We supply
              the materials that make the difference.
            </p>
          </FadeIn>

          <FadeIn className="mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-verde-800/30">
              {[
                {
                  name: "Coatings & paints",
                  detail: "Anti-corrosion, thermal barrier, conductive coatings",
                },
                {
                  name: "Polymers & composites",
                  detail: "Strength, conductivity, and weight reduction additives",
                },
                {
                  name: "Energy storage",
                  detail: "Battery anodes, supercapacitors, fuel cell components",
                },
                {
                  name: "Lubricants",
                  detail: "Friction reduction and thermal management additives",
                },
                {
                  name: "Construction",
                  detail: "Concrete reinforcement, waterproofing, structural composites",
                },
                {
                  name: "Electronics",
                  detail: "Conductive inks, thermal interface materials, EMI shielding",
                },
              ].map((market) => (
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
                Let&apos;s talk
              </h2>
              <p className="mt-3 text-charcoal-400">
                Whether you need nanomaterial supply for production or you&apos;re a
                producer looking for US market access — reach out. We respond within
                one business day.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <ContactForm />
            </div>

            <div className="md:col-span-2 md:pl-8 md:border-l md:border-charcoal-100">
              <div className="space-y-6 text-sm">
                <div>
                  <div className="font-medium text-charcoal-900">Email</div>
                  <div className="text-charcoal-500 mt-1">info@verdeimport.com</div>
                </div>
                <div>
                  <div className="font-medium text-charcoal-900">Based in</div>
                  <div className="text-charcoal-500 mt-1">United States</div>
                </div>
                <div>
                  <div className="font-medium text-charcoal-900">Response time</div>
                  <div className="text-charcoal-500 mt-1">Within 1 business day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
