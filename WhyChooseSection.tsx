import { Award, Users, CheckCircle, FileCheck } from "lucide-react";

const highlights = [
  {
    icon: Award,
    iconColor: "text-harvest-gold",
    title: "50 Years of Trust",
    description:
      "Established in 1974, serving the agricultural community with unwavering dedication.",
  },
  {
    icon: Users,
    iconColor: "text-field-green",
    title: "1000+ Farmers Connected",
    description:
      "Direct sourcing relationships ensuring fair prices and quality assurance.",
  },
  {
    icon: CheckCircle,
    iconColor: "text-earth-brown",
    title: "Premium Quality",
    description:
      "Rigorous quality checks and proper grading for all agricultural commodities.",
  },
  {
    icon: FileCheck,
    iconColor: "text-primary",
    title: "GST Registered",
    description:
      "Fully compliant trading practices with transparent documentation.",
  },
];

/**
 * Why choose us section with feature cards
 */
export default function WhyChooseSection() {
  return (
    <section className="py-16 bg-warm-beige" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="why-choose-heading"
            className="text-3xl font-serif font-bold text-foreground mb-4"
          >
            Why Choose Bhavani Store?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five decades of excellence in agricultural commodity trading with a
            commitment to farmer welfare and vendor satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 text-center shadow-soft hover:shadow-warm transition-shadow group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon
                    className={`h-8 w-8 ${highlight.iconColor}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
