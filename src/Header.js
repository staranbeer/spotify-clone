import React from "react";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosSearch,
  IoMdArrowDropdown,
} from "react-icons/io";

function Header({ search = false, tabs = false }) {
  const [activeTab, setActiveTab] = useState("playlists");

  function handleTabChange(e) {
    const text = e.target.textContent.toLowerCase();
    setActiveTab(text);
  }

  return (
    <header className="sticky top-0 z-10  flex  items-center justify-between bg-gradient-to-br from-teal-900 to-cyan-900 px-8 py-3">
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

        {search && (
          <div className="flex items-center rounded-full bg-white py-1 px-2 ">
            <IoIosSearch size={30} />
            <input
              type="text"
              placeholder="Artists, songs, or podcasts"
              className="ml-3 w-80  placeholder:text-sm placeholder:text-gray-500"
            />
          </div>
        )}
        {tabs && (
          <ul className="flex gap-3 text-sm font-bold text-white ml-8">
            {["Playlists", "Podcasts", "Artists", "Albums"].map((i) => {
              return (
                <li
                  onClick={handleTabChange}
                  className={` px-4 py-3 cursor-pointer rounded ${
                    activeTab.toLowerCase() === i.toLowerCase()
                      ? "bg-gray-900"
                      : ""
                  }`}
                >
                  {i}
                </li>
              );
            })}
          </ul>
        )}
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
