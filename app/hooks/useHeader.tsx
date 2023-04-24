import { useState, useEffect } from "react";
import { useLanguageContext } from "./useLanguageContext";

export const useHeader = () => {

  const context = useLanguageContext();
  const NAV_BAR_ITEMS = [
    {
      name: 'about',
      href: '/about',
      en: 'ABOUT',
      tr: 'HAKKIMIZDA',
    },
    {
      name: 'services',
      href: '/services',
      en: 'SERVICES',
      tr: 'HİZMETLER',
    },
    {
      name: 'faq',
      href: '/faq',
      en: 'FAQ',
      tr: 'SSS',
    },
    {
      name: 'contact',
      href: '/contact',
      en: 'CONTACT',
      tr: 'İLETİŞİM',
    },
  ];

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set the activeLink state based on the current URL path.
    // Required in case the direct url such as .../about is used
    setActiveLink(window.location.pathname);
  }, []);

  return { context, NAV_BAR_ITEMS, activeLink, setActiveLink };
};
