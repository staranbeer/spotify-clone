import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";

function Header() {
  return (
    <header className="sticky top-0 z-10  flex  items-center justify-between bg-gradient-to-br from-teal-900 to-cyan-900 px-8 py-4">
      <div className="left flex items-center gap-4">
        <div className="rounded-full bg-spotifyGray p-1">
          <IoIosArrowBack
            size={24}
            className="-translate-x-0.5 text-gray-400"
          />
        </div>

        <div className="rounded-full bg-spotifyGray p-1">
          <IoIosArrowForward
            size={24}
            className="translate-x-0.5 text-gray-400"
          />
        </div>
      </div>
      <div className="right flex items-center gap-2 rounded-full bg-spotifyGray p-0.5 text-sm font-medium text-white">
        <div className="avatar  rounded-full  bg-gray-500">
          <AiOutlineUser size={22} className="m-1 text-slate-300" />
        </div>
        <div className="w-[6rem] truncate">Imtaran.beerImtaran</div>
        <IoMdArrowDropdown className="mr-1" size={24} />
      </div>
    </header>
  );
}

export default Header;
