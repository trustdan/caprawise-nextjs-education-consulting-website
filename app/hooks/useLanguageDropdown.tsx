import { useLanguageContext } from "../hooks/useLanguageContext";
import { MouseEvent, useState } from "react";

interface Language {
  name: string;
  code: string;
}

interface UseLanguageDropdownReturn {
  context: ReturnType<typeof useLanguageContext>;
  LANGUAGES: Language[];
  isDropDownOpen: boolean;
  setIsDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleLanguageSelection: (event: React.MouseEvent<HTMLLIElement>) => void;
  handleOptionClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

export function useLanguageDropdown(): UseLanguageDropdownReturn {
  const context = useLanguageContext();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const LANGUAGES: Language[] = [
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

  const handleOptionClick = (event: React.MouseEvent<HTMLLIElement>): void => {
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