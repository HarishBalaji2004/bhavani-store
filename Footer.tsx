import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { NAV_ITEMS, BUSINESS } from "@/lib/data";

/**
 * Site footer with company info, navigation links, and contact details
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-brown text-primary-foreground" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-harvest-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-deep-earth font-bold text-xl" aria-hidden="true">
                  B
                </span>
              </div>
              <div>
                <p className="font-serif text-xl font-bold">{BUSINESS.name}</p>
                <p className="text-sm opacity-90">
                  Est. {BUSINESS.established} - 50 Years of Trust
                </p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4 max-w-md">
              Leading agricultural commodities trader in Tamil Nadu, connecting
              farmers with vendors through transparent practices and quality
              assurance. GST Registered.
            </p>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span>GST No: {BUSINESS.gst}</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="opacity-90 hover:opacity-100 transition-opacity focus:outline-none focus:opacity-100 underline-offset-2 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h2 className="font-semibold mb-4">Contact Info</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin
                  className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-90"
                  aria-hidden="true"
                />
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                  aria-label="View our location on Google Maps"
                >
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.area}, {BUSINESS.address.city}
                  <br />
                  {BUSINESS.address.state}, {BUSINESS.address.country}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 opacity-90" aria-hidden="true" />
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 opacity-90" aria-hidden="true" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </address>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>
            &copy; {currentYear} {BUSINESS.name}. All rights reserved. |
            Agricultural Commodity Traders Since 1974
          </p>
        </div>
      </div>
    </footer>
  );
}
