import "boxicons";
import laptop from "../assets/laptop.png";
import { projectsInformation } from "../dummyData.js";

export function Projects() {
  return (
    <div className=" flex flex-col justify-center items-center mt-20  pb-[90rem]">
      <label className="text-[3rem] mb-8 font-semibold">Projeler</label>
      <div className="flex gap-16 h-[50rem] ">
        <div className="flex flex-wrap gap-16 justify-center ">
          {projectsInformation.map((item, index) => {
            return (
              <>
                <div className="w-[35rem] h-[40rem] rounded-lg bg-blue-200 ">
                  <div className="ml-10 mt-10">
                    <label className="font-semibold text-3xl">
                      {item.title}
                    </label>
                    <p className="text-lg mt-8 w-10/12 mb-8">
                      {item.description}
                    </p>
                    <section className="flex flex-row gap-4 w-[65%] flex-wrap">
                      {item.structures.map((it2) => {
                        return (
                          <div className="relative w-[5.5rem] h-[2rem] rounded-2xl bg-white border-solid flex justify-center items-center">
                            <label className="absolute font-semibold">
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
                        className="text-2xl font-semibold"
                      >
                        View on Github
                      </a>
                      <a
                        target="_blank"
                        href={item.app}
                        className="text-2xl font-semibold flex items-center"
                      >
                        Go to App
                        <i className="bx bx-right-arrow-alt bx-md text-black"></i>
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
