'use client'

import { useLanguageContext } from "../hooks/useLanguageContext";

type ServicePlanProps = {
  name: {en: string, tr: string };
  price: number;
  description: {en: string, tr: string};
  features: {en: string, tr: string}[];
};

export default function ServicePlan({ name, price, description, features } : ServicePlanProps) {
    const { language } = useLanguageContext();
  return (
    <div className="flex flex-col p-3 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{language === "en" ? name.en : name.tr }</h3>
      <p className="font-light text-gray-500 text-base lg:text-lg dark:text-gray-400 text-center">
        {language === "en" ? description.en : description.tr}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature) => (
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>{language === "en" ? feature.en : feature.tr }</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
