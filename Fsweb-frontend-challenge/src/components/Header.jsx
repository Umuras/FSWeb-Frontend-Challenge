export function Header() {
  return (
    <div className="flex ml-[82rem] mt-[4rem] items-center">
      <label className="relative flex items-center group p-2 text-xl font-bold text-pink-700">
        <input
          type="checkbox"
          className="absolute ml-6 left-1/2 -translate-x-1/2 w-6/12 h-6/12 peer appearance-none rounded-md color"
        />
        <span className="w-16 h-[26px] flex items-center flex-shrink-0 mr-3 p-1 bg-pink-600 rounded-full duration-300 ease-in-out peer-checked:bg-red-600 after:w-8 after:h-8 after:bg-amber-300 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
        DARK MODE
      </label>
      <label className="mx-8 font-bold text-pink-700">|</label>
      <label className="font-bold text-pink-700 text-xl">TÜRKÇE'</label>
      <label className="font-bold text-gray-600 text-xl">YE GEÇ</label>
    </div>
  );
}
