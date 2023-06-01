import { useState, useEffect, useRef } from "react";
import { useLanguageContext } from "./useLanguageContext";
import { gsap } from "gsap";

interface NavBarItem {
  name: {
    en: string;
    tr: string;
  };
  href: string;
}

interface IUseHeaderReturn {
  language: string;
  NAV_BAR_ITEMS: NavBarItem[];
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  headerRef: React.RefObject<HTMLElement>;
  navItemsRef: React.RefObject<HTMLElement>;
  languageRef: React.RefObject<HTMLDivElement>;
  hamburgerRef: React.RefObject<HTMLDivElement>;
}

export function useHeader(): IUseHeaderReturn {
  const language = useLanguageContext().language;
  const NAV_BAR_ITEMS: NavBarItem[] = [
    {
      name:  {
        en: "ABOUT",
        tr: "HAKKIMIZDA",
      },
      href: "/about",
    },
    {
      name:  {
        en: "SERVICES",
        tr: "HİZMETLER",
      },
      href: "/services",
    },
    {
      name: {
        en: "FAQ",
        tr: "SSS",
      },
      href: "/faq",
    },
    {
      name: {
        en: "CONTACT",
        tr: "İLETİŞİM",
      },
      href: "/contact",
    },
    {
      name: {
        en: "Apply",
        tr: "Başvur",
      },
      href: "/apply",
    }
  ];

  const [activeLink, setActiveLink] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const navItemsRef = useRef<HTMLElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set active link(necessary for accessing via url with specific pathnames; e.g. .../about)
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
    }

    // GSAP Animations  
    const headerAnimation = gsap.to(headerRef.current!, {
      duration: 0.5,
      y: 0,
      ease: "power3.out",
    });
    const navItemsAnimation = gsap.to(navItemsRef.current!, {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
    });

    const languageAnimation = gsap.to(languageRef.current!, {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
    });

    const hamburgerAnimation = gsap.to(hamburgerRef.current!, {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
    });
    
    const tl = gsap.timeline();
    tl.add(headerAnimation)
      .add(navItemsAnimation, "-=0.5")
      .add(languageAnimation, "-=0.5")
      .add(hamburgerAnimation, "-=0.5");
  }, []);

  return {
    language,
    NAV_BAR_ITEMS,
    activeLink,
    setActiveLink,
    headerRef,
    navItemsRef,
    languageRef,
    hamburgerRef,
  };
}
