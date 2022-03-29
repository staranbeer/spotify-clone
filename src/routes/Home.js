import React, { useEffect } from "react";
import Header from "../Header";
import faker from "@faker-js/faker";
import { BiPlay } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";

function Home() {
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header />
      <div className="homeBody p-8">
        <h3 className="text-3xl font-medium  text-white">Good morning</h3>
        {/* favorites */}
        <div className="mt-5 grid grid-cols-3 grid-rows-2 gap-y-5 gap-x-6 font-medium text-white">
          {[...Array(6)].map((i) => {
            return (
              <div className="home-card--long relative flex cursor-pointer items-center gap-6 overflow-hidden rounded bg-gradient-to-r from-gray-700  to-gray-800">
                <div className="  bg-red-200">
                  <img
                    src={faker.image.cats()}
                    alt=""
                    className=" h-20 w-20  object-cover"
                  />
                </div>
                <div>{faker.word.adjective() + " " + faker.word.noun()}</div>
                <div className="home-card--long-play absolute right-4 rounded-full bg-green-500 p-1 opacity-0 transition-opacity duration-200 ">
                  <BiPlay className="translate-x-0.5" size={28} />
                </div>
              </div>
            );
          })}
        </div>

        {/* recently played  */}
        <div className="py-6">
          <header className="mt-5 flex items-center justify-between">
            <h3 className="text-2xl font-medium text-white ">
              Recently Played
            </h3>
            <div className="text-xs uppercase text-slate-300">see all</div>
          </header>

          <div className=" mt-6 flex gap-7 overflow-x-scroll scrollbar scrollbar-none ">
            {[...Array(12)].map((i, index) => {
              return (
                <div
                  key={index}
                  className=" cursor-pointer rounded bg-spotifyGray300  p-4 capitalize text-gray-400 transition-colors duration-200 hover:bg-[#fff1] ">
                  <div className=" h-36  w-36 rounded-md bg-gradient-to-br from-gray-600 "></div>
                  <h4 className="mt-4 text-base font-medium text-white">
                    {faker.word.adjective() + " " + faker.word.noun()}
                  </h4>
                  <p className="mt-2 w-24 truncate text-ellipsis text-xs font-medium">
                    sidhu moosewala, manni sandhu, atif aslam and lifafa
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* made for you */}
        <div className="py-6">
          <header className=" flex items-center justify-between">
            <h3 className="text-2xl font-medium text-white ">Made for you</h3>
            <div className="text-xs uppercase text-slate-300">see all</div>
          </header>

          <div className=" mt-6 flex gap-7 overflow-x-scroll scrollbar scrollbar-none ">
            {[...Array(12)].map((i, index) => {
              return (
                <div
                  key={index}
                  className=" cursor-pointer rounded bg-spotifyGray300  p-4 capitalize text-gray-400 transition-colors duration-200 hover:bg-[#fff1] ">
                  <div className=" h-36  w-36 rounded-md bg-gradient-to-br from-gray-600 "></div>
                  <h4 className="mt-4 text-base font-medium text-white">
                    {faker.word.adjective() + " " + faker.word.noun()}
                  </h4>
                  <p className="mt-2 w-24 truncate text-ellipsis text-xs font-medium">
                    sidhu moosewala, manni sandhu, atif aslam and lifafa
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* New Arrivals */}

        <div className="py-6">
          <header className=" flex items-center justify-between">
            <h3 className="text-2xl font-medium text-white ">New Arrivals</h3>
            <div className="text-xs uppercase text-slate-300">see all</div>
          </header>

          <div className=" mt-6 flex gap-7 overflow-x-scroll scrollbar scrollbar-none ">
            {[...Array(12)].map((i, index) => {
              return (
                <div
                  key={index}
                  className=" cursor-pointer rounded bg-spotifyGray300  p-4 capitalize text-gray-400 transition-colors duration-200 hover:bg-[#fff1] ">
                  <div className=" h-36  w-36 rounded-md bg-gradient-to-br from-gray-600 "></div>
                  <h4 className="mt-4 text-base font-medium text-white">
                    {faker.word.adjective() + " " + faker.word.noun()}
                  </h4>
                  <p className="mt-2 w-24 truncate text-ellipsis text-xs font-medium">
                    sidhu moosewala, manni sandhu, atif aslam and lifafa
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
