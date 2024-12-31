import "boxicons";
import laptop from "../assets/laptop.png";
import { projectsInformation } from "../dummyData.js";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

export function Projects() {
  const { darkMode } = useContext(UserContext);

  function projectCardBackground(index) {
    if (darkMode) {
      if (index % 2 === 0) {
        return "bg-zinc-800";
      } else {
        return "bg-zinc-600";
      }
    } else {
      if (index % 2 === 0) {
        return "bg-blue-200";
      } else {
        return "bg-slate-200";
      }
    }
  }

  return (
    <div
      className={
        " flex flex-col justify-center items-center pt-24  pb-[90rem] " +
        (darkMode ? "bg-zinc-700" : "")
      }
    >
      <label
        className={
          "text-[3rem] mb-8 font-semibold " + (darkMode ? "text-white" : "")
        }
      >
        Projeler
      </label>
      <div className="flex gap-16 h-[50rem] ">
        <div className="flex flex-wrap gap-16 justify-center ">
          {projectsInformation.map((item, index) => {
            return (
              <>
                <div
                  className={
                    "w-[35rem] h-[40rem] rounded-lg " +
                    projectCardBackground(index)
                  }
                >
                  <div className="ml-10 mt-10">
                    <label
                      className={
                        "font-semibold text-3xl " +
                        (darkMode ? "text-white" : "")
                      }
                    >
                      {item.title}
                    </label>
                    <p
                      className={
                        "text-lg mt-8 w-10/12 mb-8 " +
                        (darkMode ? "text-white" : "")
                      }
                    >
                      {item.description}
                    </p>
                    <section className="flex flex-row gap-4 w-[65%] flex-wrap">
                      {item.structures.map((it2) => {
                        return (
                          <div
                            className={
                              "relative w-[5.5rem] h-[2rem] rounded-2xl border-solid flex justify-center items-center " +
                              (darkMode ? "bg-zinc-700" : "bg-white")
                            }
                          >
                            <label
                              className={
                                "absolute font-semibold " +
                                (darkMode ? "text-white" : "")
                              }
                            >
                              {it2}
                            </label>
                          </div>
                        );
                      })}
                    </section>
                    <section className="flex justify-between w-[90%] mt-8 mb-[.5rem]">
                      <a
                        target="_blank"
                        href={item.github}
                        className={
                          "text-2xl font-semibold " +
                          (darkMode ? "text-white" : "")
                        }
                      >
                        View on Github
                      </a>
                      <a
                        target="_blank"
                        href={item.app}
                        className={
                          "text-2xl font-semibold flex items-center " +
                          (darkMode ? "text-white" : "")
                        }
                      >
                        Go to App
                        <i
                          className={
                            "bx bx-right-arrow-alt bx-md " +
                            (darkMode ? "text-white" : "text-black")
                          }
                        ></i>
                      </a>
                    </section>
                    <div className="relative">
                      <img
                        src={laptop}
                        alt="Laptop"
                        className={"mr-8 absolute z-10 " + item.laptopPos}
                      />
                      <img
                        src={item.projectImg}
                        alt=""
                        className={
                          "absolute mt-12 w-[21.65rem] h-[13.5rem] " +
                          item.imgPos
                        }
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
