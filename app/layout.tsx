import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohammed-kardal.vercel.app"),
  title: {
    default: "Mohammed Kardal — Ingénieur Études & Développement",
    template: "%s · Mohammed Kardal",
  },
  description:
    "Portfolio de Mohammed Kardal : développement full-stack et systèmes IBM i / AS400.",
  openGraph: {
    title: "Mohammed Kardal — Ingénieur Études & Développement",
    description:
      "Développement full-stack (Django, Symfony, Vue.js, React) et administration de systèmes IBM i / AS400.",
    siteName: "Mohammed Kardal",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Kardal — Ingénieur Études & Développement",
    description:
      "Développement full-stack (Django, Symfony, Vue.js, React) et administration de systèmes IBM i / AS400.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${plexSans.variable} ${plexMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}