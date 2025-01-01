import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Footer() {
  const { darkMode } = useContext(UserContext);

  return (
    <section className={darkMode ? "dark " : ""}>
      <div className="flex justify-center items-center relative z-30 gap-20 dark:bg-zinc-700">
        <div className="w-[30%]">
          <label className="font-semibold  text-5xl leading-relaxed z-10 dark:text-white">
            Bir sonraki ürününüz üzerinde birlikte çalışalım.
            <div className="absolute -z-10 w-[24rem] h-[1.5rem] bg-blue-300 rounded-[.5rem] translate-y-[-6.5rem] translate-x-[5rem]"></div>
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <a
            target="_blank"
            className="text-blue-500 text-2xl font-semibold hover:underline cursor-pointer"
            href="https://github.com/Umuras"
          >
            Github
          </a>
          <a
            className="text-2xl font-semibold dark:text-white hover:underline"
            href=""
            target="_blank"
          >
            Personal Blog
          </a>
          <a
            className="text-purple-400 text-2xl font-semibold hover:underline"
            href="https://www.linkedin.com/in/ali-umur-kucur-2190911b6/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="text-gray-400 text-2xl font-semibold hover:underline"
            href="aliumurkucur@gmail.com"
            target="_blank"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
