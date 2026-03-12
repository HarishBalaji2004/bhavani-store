import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Hero section for the homepage - full-width with background image overlay
 */
export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-hero py-20 md:py-28 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-15" aria-hidden="true">
        <Image
          src="/images/hero-image.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Established badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-white/10 border border-white/20 text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
            Established 1974 • GST Registered
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            50 Years of Trust in
            <br />
            <span className="text-harvest-gold">Agricultural Commodities</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10">
            Premier agricultural trading house in Tamil Nadu, connecting farmers
            with vendors through transparent practices and quality assurance since
            1974.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rates"
              className="inline-flex items-center justify-center gap-2 bg-harvest-gold hover:bg-harvest-gold/90 text-deep-earth font-semibold px-8 py-3 rounded-md text-base transition-colors focus:outline-none focus:ring-4 focus:ring-harvest-gold/30"
            >
              Check Today&apos;s Rates
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-primary-foreground font-semibold px-8 py-3 rounded-md text-base transition-colors focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
