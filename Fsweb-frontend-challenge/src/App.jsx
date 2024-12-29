import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";

function App() {
  return (
    <>
      <section className="bg-gray-200 w-full absolute -z-10">
        <div className="z-10 w-[8.35rem] h-[5rem] bg-gray-300 rounded-b-[5rem] translate-x-[35rem] "></div>
        <Header />
        <Introduction />
      </section>
      <div className="absolute z-10 w-[9rem] h-[9rem] border-[1.5rem] border-solid border-gray-300 rounded-full translate-x-[89rem] translate-y-[58.65rem] "></div>
    </>
  );
}

export default App;
