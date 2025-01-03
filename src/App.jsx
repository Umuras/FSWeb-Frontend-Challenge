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
import { Opr } from "./components/Opr";
import { TopHalfCircle } from "./components/TopHalfCircle";

function App() {
  const { darkMode } = useContext(UserContext);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <section className={"-z-10 pb-32 bg-gray-200 dark:bg-zinc-800 "}>
          <TopHalfCircle />
          <Header />
          <Introduction />
        </section>
      </div>

      <div className={darkMode ? "dark" : ""}>
        <section className="dark:bg-zinc-700">
          <Skills />
        </section>
      </div>
      <Profile />
      <Projects />
      <Footer />
      <Opr />
    </>
  );
}

export default App;
