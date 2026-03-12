"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/utils";

/**
 * Fixed WhatsApp floating action button (bottom-right corner)
 */
export default function WhatsAppButton() {
  const whatsappUrl = formatWhatsAppUrl(
    "Hello! I'm interested in your agricultural commodities. Please share more details.",
    BUSINESS.whatsappNumber
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20b858] shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
      </a>
    </div>
  );
}
