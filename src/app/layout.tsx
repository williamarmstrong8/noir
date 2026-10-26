import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const display = Oswald({
  variable: "--font-display",
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.title}`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}>
      <body>
        {children}
        {process.env.VERCEL && <Analytics />}
        <noscript>
          <style>{`[data-reveal],[data-intro]{visibility:visible!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
