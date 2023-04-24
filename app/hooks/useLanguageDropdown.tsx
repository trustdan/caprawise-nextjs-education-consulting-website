import { useLanguageContext } from "../hooks/useLanguageContext";
import { MouseEvent, useState } from "react";

export function useLanguageDropdown() {
  const context = useLanguageContext();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const LANGUAGES = [
    {
      name: "English",
      code: "en",
    },

    {
      name: "Turkish",
      code: "tr",
    },
  ];

  const handleLanguageSelection = (
    event: React.MouseEvent<HTMLLIElement>
  ): void => {
    const value = event.currentTarget.innerText.toLowerCase();
    const language = LANGUAGES.find(
      (language) => language.name.toLowerCase() === value
    );
    if (language) {
      context.setLanguage(language.code);
    }
    console.log(language);
  };

  const handleOptionClick = (event: React.MouseEvent<HTMLLIElement>) => {
    handleLanguageSelection(event);
    setIsDropDownOpen(false);
  };

  return {
    context,
    LANGUAGES,
    isDropDownOpen,
    setIsDropDownOpen,
    handleLanguageSelection,
    handleOptionClick,
  };
}
