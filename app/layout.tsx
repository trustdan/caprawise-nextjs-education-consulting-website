import React from "react";
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageProvider";
import ThemeProviders from "./contexts/ThemeProvider";
import Footer from "./components/Footer";
import { Nunito_Sans } from "next/font/google";
import QueryProvider from "./contexts/QueryProvider";
import AuthSessionProvider from "./contexts/AuthSessionProvider";
import ThemeChanger from "./components/ThemeChanger";
import { Analytics } from "@vercel/analytics/react";
import CalendlyWidget from "./components/CalendlyWidget";

export const metadata = {
  title:
    "Helios Admissions - Amerika'da Yüksek lisans, Doktora ve Dil Okulu Danışmanlığı | Helios Admissions - Graduate School, PhD and Language School Consulting in the United States ",
  description:
    "ABD merkezli Helios Admissions Resmi Web Sitesi | Official website of Helios Education Consulting Company based in the United States",
  icons: [
    {
      rel: "icon",
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "manifest",
      url: "/favicon/site.webmanifest",
    },
  ],
};

const nunito_sans = Nunito_Sans({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext", "latin"],
  display: "optional",
});

interface RootLayoutProps {
  children: React.ReactNode;
  session: any;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bg-LIGHT_PRIMARY_BG_COLOR dark:bg-DARK_PRIMARY_BG_COLOR ${nunito_sans.className}`}
      >
        <AuthSessionProvider>
          <ThemeProviders>
            <QueryProvider>
              <LanguageProvider>
                <Header />
                <ThemeChanger />
                <CalendlyWidget />
                {children}
                <Analytics />
                <Footer />
              </LanguageProvider>
            </QueryProvider>
          </ThemeProviders>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
