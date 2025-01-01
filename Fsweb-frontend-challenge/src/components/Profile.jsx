import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Profile() {
  const { darkMode } = useContext(UserContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={
          "flex justify-center flex-col items-center pb-[6rem] bg-gray-200 dark:bg-zinc-800"
        }
      >
        <h1 className={"font-semibold text-[3rem] mt-16 mb-8 dark:text-white"}>
          Profil
        </h1>
        <section className="flex flex-row gap-14">
          <div
            className={
              "absolute rounded-2xl w-[37rem] h-[22.5rem] translate-x-4 translate-y-2 bg-gray-400 dark:bg-gray-600"
            }
          ></div>
          <div
            className={
              "relative z-30 flex flex-col gap-6 rounded-2xl border-none  w-[37rem] h-[22rem] bg-white dark:bg-gray-700"
            }
          >
            <div className="ml-12 mt-8">
              <label className=" text-red-600 text-[2rem]">
                Temel Bilgiler
              </label>
            </div>
            <div className="flex flex-row gap-8 ml-12 ">
              <div className="flex flex-col gap-4 w-[45%]">
                <label className="font-bold text-[1.15rem] dark:text-white">
                  Doğum tarihi
                </label>
                <label className="font-bold text-[1.15rem] dark:text-white">
                  İkamet Şehri
                </label>
                <label className="font-bold mb-14 text-[1.15rem] dark:text-white">
                  Eğitim Durumu
                </label>
                <label className="font-bold text-[1.15rem] dark:text-white">
                  Tercih Ettiği Rol
                </label>
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold text-[1.15rem] dark:text-white">
                  30.01.1997
                </label>
                <label className="font-semibold text-[1.15rem] dark:text-white">
                  İstanbul
                </label>
                <label className="font-semibold w-[70%] text-[1.15rem] dark:text-white">
                  Yıldız Teknik Üniv. Kontrol ve Otomasyon Mühendisliği Lisans,
                  2021
                </label>
                <label className="font-semibold text-[1.15rem] dark:text-white">
                  Frontend, Game Developer
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 w-[37rem] h-[22rem]">
            <div className="flex flex-col gap-4 ml-8 mt-8">
              <label className="relative z-10 font-semibold text-2xl dark:text-white">
                Hakkımda
                <div className="absolute -z-10 w-[6rem] h-[1.5rem] bg-blue-300 rounded-[.5rem] translate-y-[-1rem] translate-x-[-1rem]"></div>
              </label>

              <div className="flex flex-col ">
                <label className="text-lg mb-4 dark:text-white">
                  3 yıla yakın game developer tecrübem var. Çalıştığım oyun
                  MMORPG türünde olan{" "}
                  <a
                    target="_blank"
                    href="https://store.steampowered.com/app/1479480/Polity__Online_Role_Playing/"
                    className="dark:text-white"
                  >
                    Polity
                  </a>
                  'dir. Bu projede hem içerik girişi hem de tool geliştirme
                  üzerine çalıştım. Şimdi ise Full-Stack Developer olarak
                  kendimi her geçen gün geliştiriyorum.
                </label>
                <label className="text-lg dark:text-white">
                  Game Developer olarak toplamda 3 projem var. Kill the All
                  Zombies, Tic Tac Toe ve Kelime Oyunu. Full-Stack Developer
                  olarak da 3 projem bulunmaktadır. Bunlar, WitFlix, Pizza
                  Sipariş Sitesi ve CV sitesidir.
                </label>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
