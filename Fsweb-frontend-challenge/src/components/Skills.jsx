import { useContext } from "react";
import { skillsIcons } from "../dummyData.js";
import { UserContext } from "../contexts/UserContext.jsx";

export function Skills() {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <div className={"flex justify-center items-center flex-col"}>
        <label
          className={
            "font-semibold text-[4rem] mb-14 " + (darkMode ? "text-white" : "")
          }
        >
          Yetenekler
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
    </>
  );
}
