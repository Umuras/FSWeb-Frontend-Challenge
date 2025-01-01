import profilePhoto from "../assets/profilephoto.jpg";
import "boxicons";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import {
  introductionBottomDescription,
  introductionDescription,
  introductionHello,
  TURKISH,
} from "../dummyData";

export function Introduction() {
  const { darkMode, language } = useContext(UserContext);

  function changeHelloWord() {
    if (language === TURKISH) {
      return introductionHello.turkish;
    } else {
      return introductionHello.english;
    }
  }

  function changeIntroDescription() {
    if (language === TURKISH) {
      return introductionDescription.turkish;
    } else {
      return introductionDescription.english;
    }
  }

  return (
    <div className={"flex flex-col mx-40 " + (darkMode ? "dark" : "")}>
      <div className="mb-4">
        <label className={"font-semibold text-[2.5rem] dark:text-white"}>
          {changeHelloWord()}
        </label>
      </div>

      <div className="flex justify-between ">
        <label
          className={
            "z-20 relative font-semibold text-[3.5rem] w-1/2 dark:text-white"
          }
        >
          {changeIntroDescription()}
          <div
            className={
              "absolute -z-40 w-[12rem] h-[3rem] bg-pink-600 rounded-[.5rem] translate-x-[-2rem] " +
              (language === TURKISH
                ? "translate-y-[-23rem]"
                : "translate-y-[-18rem]")
            }
          ></div>
        </label>

        <div className="relative w-[30rem] h-[27.5rem] bg-pink-600 rounded-[2.5rem] mr-8">
          <img
            className="absolute w-[30rem] h-[27.5rem] mt-6 ml-6 rounded-[2.5rem]"
            src={profilePhoto}
          />
        </div>
      </div>
      <div className="my-7">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ali-umur-kucur-2190911b6/"
        >
          <i className={"bx bxl-linkedin bx-lg m-0 mr-4 dark:text-white"}></i>
        </a>
        <a target="_blank" href="https://github.com/Umuras">
          <i className={"bx bxl-github bx-lg dark:text-white"}></i>
        </a>
      </div>
      <label className={"font-['Arial'] text-[1.5rem] dark:text-white"}>
        {language === TURKISH
          ? introductionBottomDescription.turkishFirst
          : introductionBottomDescription.englishFirst}
        <label className="text-pink-700 underline">
          {language === TURKISH ? "Game Developer" : "Freelancer"}
        </label>{" "}
        {language === TURKISH
          ? introductionBottomDescription.turkishSecond
          : introductionBottomDescription.englishSecond}
        <label className="text-pink-700 underline">
          {language === TURKISH ? "Freelancer" : "Game Developer."}
        </label>{" "}
        {language === TURKISH ? "çalışıyorum." : ""}
      </label>
      <label className={"font-['Arial'] text-[1.5rem] dark:text-white"}>
        {language === TURKISH
          ? introductionBottomDescription.turkishFinal
          : introductionBottomDescription.englishFinal}
        <a className="text-pink-700 underline" href="/">
          aliumurkucur@gmail.com
        </a>{" "}
      </label>
      <div className="absolute z-10 w-[8rem] h-[5rem] bg-pink-600 rounded-l-[5rem] translate-x-[100.94rem] translate-y-[34rem]"></div>
    </div>
  );
}
