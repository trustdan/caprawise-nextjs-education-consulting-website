"use client";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

export default function Logo(props: LogoProps) {
  return (
    <section className="flex flex-col gap-2 items-center ">
      <Image
        src="/logo.webp"
        alt="Helios Admissions Logo"
        width={60}
        height={60}
        priority={true}
        quality={100}
        className="hidden lg:block"
      />
      <Link href="/" onClick={() => props.setActiveLink("/")}>
        <h1 className="text-sm lg:text-md font-sans uppercase tracking-widest hover:cursor-pointer hover:text-gray-500 transition-all duration-200">
          Helios Admissions
        </h1>
      </Link>
    </section>
  );
}
