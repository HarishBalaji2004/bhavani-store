import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

/**
 * Customer testimonials section
 */
export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-warm-beige" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl font-serif font-bold text-foreground mb-4"
          >
            What Our Partners Say
          </h2>
          <p className="text-muted-foreground">
            Trusted by farmers and vendors across Tamil Nadu for quality and
            reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={index}
              className="bg-card rounded-lg shadow-soft p-6"
            >
              {/* Stars */}
              <div
                className="flex items-center gap-1 mb-3"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-harvest-gold text-harvest-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-muted-foreground italic mb-4">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <figcaption>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
