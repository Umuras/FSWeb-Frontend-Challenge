import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ENGLISH, languageArea, toggleLanguages, TURKISH } from "../dummyData";

export function Header() {
  const { darkMode, setDarkMode, language, setLanguage } =
    useContext(UserContext);

  function changeToggleName() {
    if (darkMode && language === TURKISH) {
      return toggleLanguages.turkishLight;
    } else if (darkMode && language === ENGLISH) {
      return toggleLanguages.englishLight;
    }

    if (!darkMode && language === TURKISH) {
      return toggleLanguages.turkishDark;
    } else if (!darkMode && language === ENGLISH) {
      return toggleLanguages.englishDark;
    }
  }

  function changeFirstLanguageName() {
    if (language === TURKISH) {
      return languageArea.turkish;
    } else {
      return languageArea.prefixEnglish;
    }
  }

  function changeSecondLanguageName() {
    if (language === TURKISH) {
      return languageArea.suffixTurkish;
    } else {
      return languageArea.english;
    }
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex ml-[82rem] mt-[1rem] items-center">
        <label
          className={
            "relative flex items-center group p-2 text-xl font-bold  text-pink-700 dark:text-white"
          }
        >
          <input
            type="checkbox"
            className="absolute ml-6 left-1/2 -translate-x-1/2 w-6/12 h-6/12 peer appearance-none rounded-md color"
            onClick={() => setDarkMode(!darkMode)}
          />
          <span className="w-16 h-[26px] flex items-center flex-shrink-0 mr-3 p-1 bg-pink-600 rounded-full duration-300 ease-in-out peer-checked:bg-red-600 after:w-8 after:h-8 after:bg-amber-300 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
          {changeToggleName()}
        </label>
        <label className="mx-8 font-bold text-pink-700">|</label>
        <label
          className="font-bold text-pink-700 text-xl hover:underline cursor-pointer"
          onClick={() => {
            setLanguage(language === TURKISH ? ENGLISH : TURKISH);
          }}
        >
          {changeFirstLanguageName()}
          <label className="font-bold text-gray-600 text-xl hover:underline cursor-pointer">
            {changeSecondLanguageName()}
          </label>
        </label>
      </div>
    </div>
  );
}
