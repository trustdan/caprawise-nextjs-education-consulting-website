'use client'
import { useLanguageContext } from "../hooks/useLanguageContext"

type PageIntroductionProps = {
    title: {
        en: string;
        tr: string;
    };
    description: {
        en: string;
        tr: string;
    };
};

export default function PageIntroduction({title, description}: PageIntroductionProps) {
    const {language} = useLanguageContext();
    return (
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {language === "en" ? title.en : title.tr}  
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
         {language === "en" ? description.en : description.tr}
        </p>
      </div>
    )
}