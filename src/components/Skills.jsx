import { useContext } from "react";
import { skillsIcons, skillsTitle, TURKISH } from "../dummyData.js";
import { UserContext } from "../contexts/UserContext.jsx";

export function Skills() {
  const { darkMode, language } = useContext(UserContext);

  return (
    <>
      <div className="z-20 w-[9rem] h-[9rem] border-[1.5rem] border-solid rounded-full translate-x-[89rem] translate-y-[-4.5rem] border-gray-300 dark:border-zinc-600 max-[960px]:translate-x-[44rem]"></div>
      <div
        className={
          "flex justify-center items-center flex-col " +
          (darkMode ? "dark" : "")
        }
      >
        <label className={"font-semibold text-[4rem] mb-14 dark:text-white"}>
          {language === TURKISH ? skillsTitle.turkish : skillsTitle.english}
        </label>
        <div className="flex gap-14 w-[66.2%] overflow-auto mb-8">
          {skillsIcons.map((item, index) => {
            return (
              <div key={index} className="relative flex flex-col ">
                <div
                  className={
                    item.tcClass +
                    " flex items-center justify-center " +
                    item.boxColor
                  }
                >
                  <img className="absolute w-36 " src={item.icon} />
                </div>
                <label className="text-center mt-4 font-semibold text-[1.75rem] text-gray-500">
                  {item.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute z-10 w-[9rem] h-[3.5rem] bg-gray-600 rounded-r-[5rem] translate-y-[1rem]"></div>
      <div className="w-[9rem] h-[9rem] border-[1.5rem] border-solid border-pink-600 rounded-full translate-x-[112.75rem] translate-y-[6.85rem] max-[960px]:translate-x-[55rem]"></div>
    </>
  );
}
