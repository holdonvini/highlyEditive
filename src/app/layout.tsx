import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/classes";
import { Header } from "components/header";
import { Footer } from "components/footer";

import { siteConfig } from "@/core/config/site-config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D0F11",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} – Professional Video Editing Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          fontVariables,
          "antialiased font-sans selection:bg-brand-light/20 selection:text-brand-light bg-gradient-to-br from-[#0b0b0b] via-[#561c24] to-[#0b0b0b] min-h-screen",
        )}
      >
        <div className="relative min-h-dvh">
          <Header />
          <main className="grid grid-cols-[1fr_min(var(--max-page-width),100%)_1fr] *:col-2 *:[&.full-bleed]:w-full *:[&.full-bleed]:col-[1/4]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
