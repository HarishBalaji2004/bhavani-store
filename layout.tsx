import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import "./globals.css";

// Optimized font loading with next/font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// Base metadata shared across all pages
export const metadata: Metadata = {
  metadataBase: new URL("https://bhavanistore.in"),
  title: {
    default: "Bhavani Store - Premium Agricultural Commodities | Since 1974",
    template: "%s | Bhavani Store",
  },
  description:
    "Bhavani Store is Tamil Nadu's premier agricultural commodities trading house. Established in 1974, we connect farmers with vendors through transparent practices. Specializing in red chillies, raw cotton, paddy, neem seeds, tamarind and millets.",
  keywords: [
    "agricultural commodities",
    "Tamil Nadu",
    "red chillies",
    "Guntur chillies",
    "raw cotton",
    "paddy rice",
    "neem seeds",
    "tamarind",
    "millets",
    "wholesale agricultural trader",
    "Paramakudi",
    "Bhavani Store",
    "agricultural trading",
    "GST registered trader",
  ],
  authors: [{ name: "Bhavani Store", url: "https://bhavanistore.in" }],
  creator: "Bhavani Store",
  publisher: "Bhavani Store",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bhavanistore.in",
    siteName: "Bhavani Store",
    title: "Bhavani Store - Premium Agricultural Commodities | Since 1974",
    description:
      "Tamil Nadu's trusted agricultural commodities trading house for 50 years. Fair prices, quality assurance, GST registered.",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhavani Store - Agricultural Commodities Warehouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavani Store - Premium Agricultural Commodities",
    description:
      "Tamil Nadu's trusted agricultural commodities trading house for 50 years.",
    images: ["/images/hero-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://bhavanistore.in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8B4513" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0f0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none"
          >
            Skip to main content
          </a>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
