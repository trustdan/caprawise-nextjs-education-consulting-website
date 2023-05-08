"use client";
import Image from "next/image";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { useCofounder } from "../hooks/useCofounder";

type CofounderProps = {
  name: string;
  imagePath: string;
  imageAlt: string;
  description: {
    en: string;
    tr: string;
  };
};

export default function Cofounder(props: CofounderProps) {
  const language = useLanguageContext().language;
  const { cofounderRef } = useCofounder();
  return (
    <div
      className="flex flex-col border  border-gray-100 shadow
       dark:border-gray-600  bg-LIGHT_SECONDARY_BG_COLOR dark:bg-DARK_SECONDARY_BG_COLOR dark:text-white items-center
        text-justify mx-auto lg:mx-0 p-5 rounded-xl gap-5 w-[450px] md:w-[1/2] lg:w-[600px]"
      ref={cofounderRef}
    >
      <Image
        src={props.imagePath}
        className="rounded-badge drop-xl"
        alt={props.imageAlt}
        width={250}
        height={250}
        placeholder="blur"
        blurDataURL={props.imagePath}
        priority={true}
      />
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col text-xl font-bold text-center gap-2 ">
          <h1>{props.name}</h1>
          <h2>{language === "en" ? "Co-founder" : "Kurucu"}</h2>
        </div>

        <div>
          <p>
            {language === "en" ? props.description.en : props.description.tr}
          </p>
        </div>
      </div>
    </div>
  );
}
