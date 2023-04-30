import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguageContext } from "../hooks/useLanguageContext";


type HamburgerProps = {
    navBarItems: {
    name: string;
    href: string;
    en: string;
    tr: string;
  }[];
};

export default function Hamburger(props: HamburgerProps) {
  const [isHamburger, setIsHamburger] = useState(false);
  const language = useLanguageContext().language;
  return (
    <div
      aria-label="hamburger-menu"
      className="flex items-center gap-4 relative "
    >
      <button
        type="button"
        className="p-2 lg:hidden"
        onClick={() => setIsHamburger((isHamburger) => !isHamburger)}
      >
        <Image
          src={isHamburger ? "/hamburgerX.svg" : "/hamburger.svg"}
          alt={isHamburger ? "An X icon for closing hamburger menu" : " A Three-layered hamburg menu icon" }
          width={40}
          height={40}
          className="transition-all duration-500 ease-in-out transform hover:scale-110"
        />
      </button>
      {isHamburger && (
        <div
          aria-label="mobile-nav-menu"
          className="fixed top-0 right-0 w-full flex items-center justify-center font-bold uppercase tracking-widest text-gray-500"
          onClick={() => setIsHamburger(false)}
        >
          <div className="bg-white rounded-lg shadow-lg p-0 m-0 absolute top-16 right-0 w-full text-center h-[calc(100vh-64px)] flex flex-col ">
            {props.navBarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex py-2 px-4 hover:bg-gray-100 border border-slate-200 h-full  items-center justify-center"
              >
                {language === "en" ? item.en : item.tr}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
