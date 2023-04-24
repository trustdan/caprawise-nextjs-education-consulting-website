"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useHeader } from "../hooks/useHeader";
import { LanguageDropdown } from "./LanguageDropdown";

export default function Header() {
  const {
    context,
    NAV_BAR_ITEMS,
    activeLink,
    setActiveLink,
  } = useHeader();
  return (
    <>
      <header className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-end gap-8">
            <nav className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-widest lg:text-gray-500">
              {NAV_BAR_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block h-16 border-b-4 leading-[4rem] transition ease-in-out duration-500 ${
                    activeLink === item.href
                      ? "border-blue-500 text-red-700"
                      : "border-transparent text-gray-500 hover:border-current hover:text-red-700"
                  }`}
                  onClick={() => setActiveLink(item.href)}
                >
                  {context.language === "en" ? item.en : item.tr}
                </Link>
              ))}
            </nav>
            <LanguageDropdown />
            <Hamburger navBarItems={NAV_BAR_ITEMS} />
          </div>
        </div>
      </header>
    </>
  );
}
