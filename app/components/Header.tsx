"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useHeader } from "../hooks/useHeader";
import { LanguageDropdown } from "./LanguageDropdown";
import { signOut, useSession } from "next-auth/react";
import PrimaryButton from "./PrimaryButton";

export default function Header() {
  const {
    language,
    NAV_BAR_ITEMS,
    activeLink,
    setActiveLink,
    headerRef,
    navItemsRef,
    languageRef,
    hamburgerRef,
  } = useHeader();

  const { data: session } = useSession();

  return (
    <>
      <header
        className="-translate-y-24 sticky top-0 z-50 bg-LIGHT_SECONDARY_BG_COLOR"
        ref={headerRef}
      >
        <div className="mx-auto flex h-16 max-w-screen-3xl items-center justify-between">
          <div className="flex flex-1 items-center justify-end gap-8">
            <nav
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-widest opacity-0"
              ref={navItemsRef}
            >
              {NAV_BAR_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block h-16 border-b-4 leading-[4rem] transition ease-in-out duration-150 active:scale-90 text-[#22577E] hover:border-[#22577E] ${
                    activeLink === item.href
                      ? "border-[#22577E] "
                      : "border-transparent "
                  }`}
                  onClick={() => setActiveLink(item.href)}
                >
                  {language === "en" ? item.name.en : item.name.tr}
                </Link>
              ))}

              {session && (
                <Link
                  href="/admin/dashboard"
                  className={`hidden lg:block h-16 border-b-4 leading-[4rem] transition ease-in-out duration-150 active:scale-90 text-[#22577E] hover:border-[#22577E] ${
                    activeLink === "/admin/dashboard"
                      ? "border-[#22577E] "
                      : "border-transparent "
                  }`}
                  onClick={() => setActiveLink("/admin/dashboard")}
                >
                  {language === "en" ? "DASHBOARD" : "ADMIN PANELİ"}
                </Link>
              )}
            </nav>

            <div
              role="div for gsap effect"
              className="opacity-0 fixed left-5 lg:relative"
              ref={languageRef}
            >
              <LanguageDropdown />
            </div>
            {session && (
              <PrimaryButton
                label={{ en: "Log out", tr: "Çıkış Yap" }}
                className="text-white hidden lg:block "
                onClick={() => signOut()}
              />
            )}
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
