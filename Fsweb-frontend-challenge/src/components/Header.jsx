import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Header() {
  const { darkMode, setDarkMode } = useContext(UserContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex ml-[82rem] mt-[4rem] items-center">
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
          {darkMode ? "AYDINLIK MOD" : "KARANLIK MOD"}
        </label>
        <label className="mx-8 font-bold text-pink-700">|</label>
        <label
          className="font-bold text-pink-700 text-xl hover:underline cursor-pointer"
          onClick={() => console.log("Türkçeye geç")}
        >
          INGILIZCE'
          <label className="font-bold text-gray-600 text-xl hover:underline cursor-pointer">
            YE GEÇ
          </label>
        </label>
      </div>
    </div>
  );
}
