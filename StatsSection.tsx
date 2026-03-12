import { STATS } from "@/lib/data";

/**
 * Impact statistics section
 */
export default function StatsSection() {
  return (
    <section className="py-16" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="stats-heading"
            className="text-3xl font-serif font-bold text-foreground mb-4"
          >
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building trust through consistent performance and reliable
            partnerships.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 text-center shadow-soft hover:shadow-warm transition-shadow"
            >
              <div
                className="text-4xl font-bold text-primary mb-2"
                aria-label={`${stat.number} ${stat.label}`}
              >
                {stat.number}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
