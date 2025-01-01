import { useContext, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Skills } from "./components/Skills";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { UserContext } from "./contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { Request } from "./components/Request";

function App() {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <section className={"w-full -z-10 pb-32 bg-gray-200 dark:bg-zinc-800 "}>
          {/* {toast.success("Ali Umur Kucur'un CV sitesine hoş geldiniz")} */}
          <div
            className={
              "z-10 w-[8.35rem] h-[5rem] rounded-b-[5rem] translate-x-[35rem] " +
              (darkMode ? "bg-zinc-700" : "bg-gray-300")
            }
          ></div>
          <Header />
          <Introduction />
        </section>
      </div>

      <div className={darkMode ? "dark" : ""}>
        <section className="dark:bg-zinc-700">
          <div className="z-20 w-[9rem] h-[9rem] border-[1.5rem] border-solid rounded-full translate-x-[89rem] translate-y-[-4.5rem] border-gray-300 dark:border-zinc-600"></div>
          <Skills />
          <div className="w-[9rem] h-[9rem] border-[1.5rem] border-solid border-pink-600 rounded-full translate-x-[112.75rem] translate-y-[6.85rem] "></div>
        </section>
      </div>
      <Profile />
      <Projects />
      <Footer />
      <Request />
    </>
  );
}

export default App;
