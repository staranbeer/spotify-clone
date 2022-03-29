import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { AiFillHeart, AiOutlinePlus } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="">
      <div className="pages mt-1  text-gray-400">
        <Link
          to="/"
          className="flex items-center gap-3 py-2 text-sm font-medium transition-all duration-[250ms] ease-in-out hover:text-white">
          <IoHomeOutline size={24} className="  " />
          <div className="">Home</div>
        </Link>

        <Link
          to="/search"
          className="flex items-center gap-3 py-2 text-sm font-medium transition-all duration-[250ms] ease-in-out hover:text-white">
          <FiSearch size={24} className="  " />
          <div className="">Search</div>
        </Link>

        <Link
          to="/library"
          className="flex items-center gap-3 py-2 text-sm font-medium transition-all duration-[250ms] ease-in-out hover:text-white">
          <BiLibrary size={24} className="  " />
          <div className="">Your Library</div>
        </Link>
      </div>

      <div className="pinned mt-9 mr-4 space-y-4  border-b border-gray-800 pb-4 text-white ">
        <Link
          to="/create-playlist "
          className="flex items-center gap-3   text-sm font-medium opacity-60 transition-all duration-[250ms] ease-in-out hover:opacity-100">
          <div className="rounded-sm bg-white p-1">
            <AiOutlinePlus size={16} className="text-black" />
          </div>
          <div>Create Playlist</div>
        </Link>

        <Link
          to="/liked"
          className="flex items-center gap-3  text-sm font-medium opacity-60 transition-all duration-[250ms] ease-in-out hover:opacity-100">
          <div className="rounded-sm bg-gradient-to-br from-blue-600 to-violet-100 p-1">
            <AiFillHeart size={16} className="text-black" />
          </div>
          <div>Liked Songs</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
