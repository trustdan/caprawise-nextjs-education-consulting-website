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
      className="flex flex-col lg:flex-row border-none dark:text-white
        text-justify mx-auto  p-5 rounded-xl gap-3 w-[380px] md:w-[1/2] lg:w-[1000px] items-center justify-evenly"
      ref={cofounderRef}
    >
      <Image
        src={props.imagePath}
        alt={props.imageAlt}
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={props.imagePath}
        priority={true}
      />
      <div className="flex flex-col gap-2 w-[300px] lg:w-2/3 h-fit lg:h-[405px]   ">
        <div className="text-xl gap-2 text-center lg:text-left ">
          <h1 className="font-bold ">{props.name}</h1>
          <h2 className=" font-thin">
            {language === "en" ? "Co-founder" : "Kurucu"}
          </h2>
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
