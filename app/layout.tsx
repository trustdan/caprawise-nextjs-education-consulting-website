import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageContext";
import ThemeProviders from "./components/ThemeProvider";
import ThemeChanger from "./components/ThemeChanger";

export const metadata = {
  title: "Education Consulting",
  description: "Official website of  XXX Education Consulting Company based in the United States",
};

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body>
      <ThemeProviders>
      <LanguageProvider >
        <Header />
        <ThemeChanger />
        {children}
      </LanguageProvider>
      </ThemeProviders>
      </body>
    </html>
  );
}
