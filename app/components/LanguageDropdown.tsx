import { useLanguageDropdown } from "../hooks/useLanguageDropdown";

export function LanguageDropdown() {
  const {
    context,
    LANGUAGES,
    isDropDownOpen,
    setIsDropDownOpen,
    handleOptionClick,
  } = useLanguageDropdown();

  return (
    <div className="dropdown dropdown-end font-bold uppercase tracking-wide lg:tracking-widest text-gray-500 text-[12px]">
      <label
        tabIndex={0}
        className="btn rounded-btn bg-gray-500 border-none"
        onClick={() => setIsDropDownOpen((isDropdownOpen) => !isDropdownOpen)}
      >
        {context.language}
      </label>
      {isDropDownOpen && (
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow rounded-box w-52 mt-4"
        >
          {LANGUAGES.map((language) => (
            <li
              key={language.code}
              className="btn btn-ghost rounded-btn text-[12px]"
              onClick={handleOptionClick}
            >
              {language.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
