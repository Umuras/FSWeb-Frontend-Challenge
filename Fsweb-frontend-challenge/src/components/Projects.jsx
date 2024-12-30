import "boxicons";
import laptop from "../assets/laptop.png";
import witflixPng from "../assets/witflixfrontpage.png";
import projectsInformation from "../dummyData.js";

export function Projects() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <label className="text-4xl mb-8 font-semibold">Projects</label>
      <div className="">
        <div className="w-[35rem] h-[40rem] border rounded-lg bg-blue-200">
          <div className="ml-10 mt-10">
            <label className="font-semibold text-4xl">Witflix Project</label>
            <p className="text-xl mt-8 w-10/12 mb-8">
              Bu projede Full-Stack Developer eğitiminin 1.ayında yapılmıştır ve
              Netflixin ana sayfasının şablon tasarımı yapılmıştır.
            </p>
            <section className="flex flex-row gap-4 w-[65%] flex-wrap">
              <div className="relative w-[5.5rem] h-[2rem] rounded-2xl bg-white border-solid flex justify-center items-center">
                <label className="absolute font-semibold">html</label>
              </div>
              <div className="relative w-[5.5rem] h-[2rem] rounded-2xl bg-white border-solid flex justify-center items-center">
                <label className="absolute font-semibold">css</label>
              </div>
            </section>
            <section className="flex justify-between w-[90%] mt-8 mb-[.5rem]">
              <a
                target="_blank"
                href="https://github.com/Umuras/Wit1024-WitFlixTraining"
                className="text-2xl font-semibold"
              >
                View on Github
              </a>
              <a
                target="_blank"
                href=""
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
                className="mt-12 mr-8 absolute translate-x-[-1.5rem] z-10"
              />
              <img
                src={witflixPng}
                alt=""
                className="absolute mt-12 w-[21.65rem] h-[14rem] translate-x-[3.95rem] translate-y-[1.75rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
