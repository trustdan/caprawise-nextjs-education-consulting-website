import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageContext";

export const metadata = {
  title: "Education Consulting",
  description: "Official website of  XXX Education Consulting Company based in the United States",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body>
      <LanguageProvider >
        <Header />
        {children}
      </LanguageProvider>
      </body>
    </html>

  );
}
