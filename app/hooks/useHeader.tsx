import { useState, useEffect } from "react";

export const useHeader = () => {
  const NAV_BAR_ITEMS = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set the activeLink state based on the current URL path.
    // Required in case the direct url such as .../about is used
    setActiveLink(window.location.pathname);
  }, []);

  return { NAV_BAR_ITEMS, activeLink, setActiveLink };
};
