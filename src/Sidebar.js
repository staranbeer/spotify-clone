import React from "react";
import logo from "./images/Spotify-logo.png";

import { faker } from "@faker-js/faker";
import { BsArrowDownCircle } from "react-icons/bs";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="flex w-60 flex-col bg-black  pl-7 capitalize text-gray-400 ">
      <div>
        <Link to="/" className="logo block w-32 py-6">
          <img src={logo} className=" w-full" />
        </Link>
        <Navbar />
      </div>

      <div className=" playlists overflow-y-auto pt-3 pr-10 text-sm scrollbar scrollbar-track-black scrollbar-thumb-gray-600">
        <ul className="space-y-3 font-medium  ">
          {[...Array(25)].map((i, index) => {
            return (
              <li key={index} className="truncate text-ellipsis">
                {" "}
                {faker.word.adjective() + " " + faker.word.noun()}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="install-app flex gap-5 py-3 text-sm  font-medium">
        <BsArrowDownCircle size={20} className="" />
        <div>Install App</div>
      </div>
    </aside>
  );
}

export default Sidebar;
