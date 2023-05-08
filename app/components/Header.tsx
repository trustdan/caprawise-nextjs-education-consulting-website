"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useHeader } from "../hooks/useHeader";
import { LanguageDropdown } from "./LanguageDropdown";

export default function Header() {
  const {
    languageContext,
    NAV_BAR_ITEMS,
    activeLink,
    setActiveLink,
    headerRef,
    navItemsRef,
    languageRef,
    hamburgerRef,
  } = useHeader();

  return (
    <>
      <header
        className="border-b border-gray-300 -translate-y-24 sticky top-0 z-50 bg-white "
        ref={headerRef}
      >
        <div className="mx-auto flex h-16 max-w-screen-3xl items-center justify-between">
          <div className="flex flex-1 items-center justify-end gap-8">
            <nav
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-widest lg:text-gray-500 opacity-0"
              ref={navItemsRef}
            >
              {NAV_BAR_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block h-16 border-b-4 leading-[4rem] transition ease-in-out duration-150 active:scale-90 ${
                    activeLink === item.href
                      ? "border-black text-red-700"
                      : "border-transparent text-gray-500 hover:border-gray-500 hover:text-red-700"
                  }`}
                  onClick={() => setActiveLink(item.href)}
                >
                  {languageContext.language === "en"
                    ? item.name.en
                    : item.name.tr}
                </Link>
              ))}
            </nav>
            <div
              role="div for gsap effect"
              className="opacity-0 fixed left-5 lg:relative"
              ref={languageRef}
            >
              <LanguageDropdown />
            </div>
            <div
              role="div for gsap effect"
              className="opacity-0"
              ref={hamburgerRef}
            >
              <Hamburger navBarItems={NAV_BAR_ITEMS} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
