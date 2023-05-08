import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageProvider";
import ThemeProviders from "./contexts/ThemeProvider";
import ThemeChanger from "./contexts/ThemeChanger";
import Footer from "./components/Footer";

export const metadata = {
  title: "Education Consulting",
  description:
    "Official website of  XXX Education Consulting Company based in the United States",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviders>
          <LanguageProvider>
            <Header />
            <ThemeChanger />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
