import React from "react";
import {
  AiFillHome,
  AiFillCompass,
  AiFillClockCircle,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start items-center w-52 bg-slate-500 h-screen p-4 text-lg">
      <NavLink to="/home" className="flex justify-start items-center w-32 ">
        <AiFillHome />
        <p className=" px-2 py-1 "> Home</p>
      </NavLink>
      <NavLink to="/explore" className="flex justify-start items-center w-32   ">
        <AiFillCompass /> <p className=" px-2 py-1 ">Explore</p>
      </NavLink>
      <NavLink to="/watch-later" className="flex justify-start items-center w-32  ">
        <AiFillClockCircle /> <p className=" px-2 py-1 ">WatchLater</p>
      </NavLink>
      <NavLink to="/video-listing" className="flex justify-start items-center w-32  ">
        <AiOutlineOrderedList /> <p className=" px-2 py-1 ">Play List</p>
      </NavLink>
    </div>
  );
};
