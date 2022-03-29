import React, { useEffect } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import Main from "./Main";

import {
  MdShuffle,
  MdSkipPrevious,
  MdPlayArrow,
  MdSkipNext,
  MdRepeat,
  MdMic,
  MdQueue,
  MdDevices,
  MdSpeaker,
  MdFitScreen,
} from "react-icons/md";

import Sidebar from "./Sidebar";

function App() {
  return (
    // <Taran />
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 overflow-y-hidden">
        <Sidebar />
        <Main />
      </div>

      <div className="player flex items-center justify-between border-t border-t-gray-800 bg-spotifyGray p-4 text-gray-400">
        <div className="song flex items-center ">
          <div className="song__thumbnail h-12 w-12 rounded bg-gradient-to-br from-blue-300 to-green-600"></div>
          <div className="song__details ml-3 ">
            <h5 className="song__name text-sm text-white">
              Akhar (From "Lahoriye" Soundtrack)
            </h5>
            <p className="song__artist text-xs">Amrinder Gill, Jatinder Shah</p>
          </div>
          <div className="ml-6">
            <AiOutlineHeart size={20} />
          </div>
        </div>
        <div className="player-controls flex flex-col items-center  ">
          <div className="flex items-center gap-4">
            <MdShuffle size={28} />
            <MdSkipPrevious size={28} />
            <div className="rounded-full bg-white p-0.5">
              <MdPlayArrow size={28} className="text-gray-800" />
            </div>
            <MdSkipNext size={28} />
            <MdRepeat size={28} />
          </div>
          <div className="mt-2 flex items-center gap-3 text-xs">
            <div className="">0:00</div>
            <div className="h-1 w-[36rem] bg-gray-500"></div>
            <div>4:14</div>
          </div>
        </div>
        <div className="player-extras flex items-center gap-4">
          <MdMic size={20} />
          <MdQueue size={20} />
          <MdDevices size={20} />
          <MdSpeaker size={20} />
          <MdFitScreen size={20} />
        </div>
      </div>
    </div>
  );
}

export default App;
