import React from "react";
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageProvider";
import ThemeProviders from "./contexts/ThemeProvider";
import ThemeChanger from "./contexts/ThemeChanger";
import Footer from "./components/Footer";
import { Nunito } from "next/font/google";
import QueryProvider from "./contexts/QueryProvider";
import AuthSessionProvider from "./contexts/AuthSessionProvider";

export const metadata = {
  title: "Education Consulting",
  description:
    "Official website of  XXX Education Consulting Company based in the United States",
};

const nunito = Nunito({
  weight: ["200", "300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin-ext", "latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
  session: any;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <AuthSessionProvider>
          <ThemeProviders>
            <QueryProvider>
              <LanguageProvider>
                <Header />
                <ThemeChanger />
                {children}
                <Footer />
              </LanguageProvider>
            </QueryProvider>
          </ThemeProviders>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
