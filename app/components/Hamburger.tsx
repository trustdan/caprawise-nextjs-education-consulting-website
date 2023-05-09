import Link from "next/link";
import { useState } from "react";
import { useLanguageContext } from "../hooks/useLanguageContext";

type HamburgerProps = {
  navBarItems: {
    href: string;
    name: {
      en: string;
      tr: string;
    };
  }[];
};

export default function Hamburger(props: HamburgerProps) {
  const [isHamburger, setIsHamburger] = useState(false);
  const language = useLanguageContext().language;

  const genericHamburgerLine = `h-[2px] w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <div
      aria-label="hamburger-menu"
      className="flex  items-center gap-4 relative lg:hidden "
    >
      {isHamburger && (
        <ul
          tabIndex={0}
          className="menu dropdown-content p-0 rounded-box w-52 mt-[18px] mr-3 absolute top-10 right-0 "
        >
          {props.navBarItems.map((item) => (
            <Link
              key={item.name.en}
              className="btn bg-LIGHT_PRIMARY_BG_COLOR dark:bg-DARK_SECONDARY_BG_COLOR dark:text-white hover:bg-gray-500 dark:hover:bg-LIGHT_SECONDARY_BG_COLOR text-black hover:text-white dark:hover:text-black text-[12px] border-gray-200 dark:border-gray-600 my-1  text-center"
              href={item.href}
              onClick={() => setIsHamburger(false)}
            >
              {language === "en" ? item.name.en : item.name.tr}
            </Link>
          ))}
        </ul>
      )}
      <button
        className="flex flex-col h-12 w-12  rounded justify-center items-center group  z-50"
        onClick={() => setIsHamburger(!isHamburger)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isHamburger
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isHamburger ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isHamburger
              ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
}
