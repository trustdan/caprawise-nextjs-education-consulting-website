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

export const metadata = {
  title:
    "Helios Admissions - Amerika'da Yüksek lisans, Doktora ve Dil Okulu Danışmanlığı | Helios Admissions - Graduate School, PhD and Language School Consulting in the United States ",
  description:
    "ABD merkezli Helios Admissions Resmi Web Sitesi | Official website of Helios Education Consulting Company based in the United States",
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
