"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { formatWhatsAppUrl, generateProductEnquiry } from "@/lib/utils";
import { BUSINESS } from "@/lib/data";

/**
 * Product grid with images and WhatsApp enquiry buttons
 */
export default function ProductGrid() {
  const handleEnquiry = (productName: string) => {
    const url = formatWhatsAppUrl(
      generateProductEnquiry(productName),
      BUSINESS.whatsappNumber
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16" aria-labelledby="products-grid-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="products-grid-heading" className="sr-only">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <article
              key={product.slug}
              className="bg-card rounded-lg shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              {/* Product image */}
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} - ${product.quality} agricultural commodity`}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading={index < 4 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 dark:bg-card/90 text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-harvest-gold text-deep-earth text-xs font-medium px-2.5 py-1 rounded-full">
                    {product.quality}
                  </span>
                </div>
              </div>

              {/* Product info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-serif font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {product.description}
                </p>

                {/* Enquiry button */}
                <button
                  onClick={() => handleEnquiry(product.name)}
                  className="w-full flex items-center justify-center gap-2 bg-harvest-gold hover:bg-harvest-gold/90 text-deep-earth font-medium text-sm px-4 py-2.5 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-harvest-gold/30"
                  aria-label={`Enquire about ${product.name} on WhatsApp`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Enquire Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
