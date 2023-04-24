import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type HamburgerProps = {
  navBarItems: {
    name: string;
    href: string;
  }[];
};

export default function Hamburger(props: HamburgerProps) {
  const [isHamburger, setIsHamburger] = useState(false);

  return (
    <div
      aria-label="hamburger-menu"
      className="flex items-center gap-4 relative"
    >
      <button
        type="button"
        className="p-2 lg:hidden"
        onClick={() => setIsHamburger((isHamburger) => !isHamburger)}
      >
        <Image
          src={isHamburger ? "/hamburgerClose.svg" : "/hamburger.svg"}
          alt={isHamburger ? "An X icon for closing hamburger menu" : " A Three-layered hamburg menu icon" }
          width={32}
          height={32}
        />
      </button>
      {isHamburger && (
        <div
          aria-label="mobile-nav-menu"
          className="fixed top-0 right-0 z-50 w-full h-full bg-opacity-80 flex items-center justify-center"
          onClick={() => setIsHamburger(false)}
        >
          <div className="bg-white rounded-lg shadow-lg p-0 m-0 absolute top-16 right-0 w-full text-center">
            {props.navBarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 hover:bg-gray-100 border border-slate-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
