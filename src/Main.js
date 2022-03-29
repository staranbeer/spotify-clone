import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePlaylist from "./routes/CreatePlaylist";
import Home from "./routes/Home";
import Library from "./routes/Library";
import Liked from "./routes/Liked";
import Search from "./routes/Search";
function Main() {
  return (
    <div className="flex-1 overflow-y-auto bg-spotifyGray400 scrollbar scrollbar-track-black scrollbar-thumb-gray-600">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/create-playlist" element={<CreatePlaylist />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </div>
  );
}

export default Main;
