import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import { PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bhavani Store - Premium Agricultural Commodities | Since 1974",
  description:
    "Tamil Nadu's premier agricultural commodities trading house. 50 years of connecting farmers with vendors. Red chillies, cotton, paddy, neem seeds, tamarind & millets.",
  alternates: {
    canonical: "https://bhavanistore.in",
  },
};

const featuredProducts = PRODUCTS.slice(0, 8).map((p) => p.name);

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <HeroSection />
        <WhyChooseSection />
        <StatsSection />

        {/* Products Overview */}
        <section className="py-16" aria-labelledby="products-overview-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  id="products-overview-heading"
                  className="text-3xl font-serif font-bold text-foreground mb-6"
                >
                  Premium Agricultural Commodities
                </h2>
                <p className="text-muted-foreground mb-8">
                  We specialize in sourcing and trading high-quality agricultural
                  commodities directly from verified farmers across Tamil Nadu and
                  neighboring states.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {featuredProducts.map((product, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle
                        className="h-4 w-4 text-field-green flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-foreground">{product}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-earth-brown hover:bg-earth-brown/90 text-primary-foreground font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-earth-brown/30"
                >
                  View All Products
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    emoji: "🌾",
                    label: "Direct Farm Sourcing",
                    desc: "Traceable from farm to trade",
                  },
                  {
                    emoji: "✅",
                    label: "Quality Checked",
                    desc: "Graded and certified",
                  },
                  {
                    emoji: "📊",
                    label: "Market Rates",
                    desc: "Updated daily",
                  },
                  {
                    emoji: "🤝",
                    label: "50+ Years Trust",
                    desc: "Reliable partner",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-warm-beige rounded-lg p-5 text-center"
                  >
                    <div className="text-3xl mb-2" aria-hidden="true">
                      {card.emoji}
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      {card.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* CTA Section */}
        <section
          className="py-16 bg-gradient-hero"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="cta-heading"
              className="text-3xl font-serif font-bold text-primary-foreground mb-4"
            >
              Ready to Trade with Confidence?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of satisfied farmers and vendors who trust Bhavani
              Store for their agricultural commodity needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rates"
                className="inline-flex items-center justify-center bg-harvest-gold hover:bg-harvest-gold/90 text-deep-earth font-semibold px-8 py-3 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-harvest-gold/30"
              >
                Check Today&apos;s Rates
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 border border-white/30 text-primary-foreground font-semibold px-8 py-3 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
