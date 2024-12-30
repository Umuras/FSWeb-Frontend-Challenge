import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Skills } from "./components/Skills";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <section className="bg-gray-200 w-full -z-10 pb-32">
        <div className="z-10 w-[8.35rem] h-[5rem] bg-gray-300 rounded-b-[5rem] translate-x-[35rem] "></div>
        <Header />
        <Introduction />
      </section>
      <div className="z-20 w-[9rem] h-[9rem] border-[1.5rem] border-solid border-gray-300 rounded-full translate-x-[89rem] translate-y-[-4.5rem] "></div>
      <Skills />
      <div className="w-[9rem] h-[9rem] border-[1.5rem] border-solid border-pink-600 rounded-full translate-x-[112.75rem] translate-y-[6.85rem] "></div>
      <Profile />
      <Projects />
    </>
  );
}

export default App;
