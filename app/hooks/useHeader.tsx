import { useState, useEffect, useRef } from "react";
import { useLanguageContext } from "./useLanguageContext";
import { gsap } from "gsap";
import createAnimation from "../utilities/CreateAnimation";

interface NavBarItem {
  name: string;
  href: string;
  en: string;
  tr: string;
}

interface UseHeaderReturn {
  languageContext: ReturnType<typeof useLanguageContext>;
  NAV_BAR_ITEMS: NavBarItem[];
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  headerRef: React.RefObject<HTMLElement>;
  navItemsRef: React.RefObject<HTMLElement>;
  languageRef: React.RefObject<HTMLDivElement>;
}

export function useHeader(): UseHeaderReturn {
  const languageContext = useLanguageContext();
  const NAV_BAR_ITEMS: NavBarItem[] = [
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
  const headerRef = useRef<HTMLElement>(null);
  const navItemsRef = useRef<HTMLElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set active link
    setActiveLink(window.location.pathname);

    // GSAP Animations
    const headerAnimation = createAnimation(headerRef.current!, 1.25, { y: 0, ease: "power3.out" });
    const navItemsAnimation = createAnimation(navItemsRef.current!, 1, { opacity: 1, ease: "power3.out" });
    const languageAnimation = createAnimation(languageRef.current!, 1, { opacity: 1, ease: "power3.out" });

    const tl = gsap.timeline();
    tl.add(headerAnimation)
      .add(navItemsAnimation, "-=0.5")
      .add(languageAnimation, "-=0.5");
  }, []);

  return { languageContext, NAV_BAR_ITEMS, activeLink, setActiveLink, headerRef, navItemsRef, languageRef };
};