"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ReorderIcon from "@mui/icons-material/Reorder";
const Nav = () => {
  const [click, setclick] = useState(false);
  const Click = () => setclick(!click);
  return (
    <div className="p-[1.75rem] flex  justify-between items-center h-[100px] z-10">
      <h1 className="text-[2.5rem]">Density</h1>

      <ul
        className={
          click
            ? " lg:left-[-100%] flex flex-col justify-center items-center h-[100vh] w-[100%] "
            : "   absolute flex h-[100vh] w-[100%] left-[0%] justify-center sm:top-[30px] flex-row gap-[1em] text-[2.25rem] z-[-1] bg-[#000]/[0.9]"
        }
      >
        <li className="text-[30px] text-white px-0  ">Home</li>
        <li className="text-[30px] text-white px-0 ">Gallery</li>
        <li className="text-[30px] text-white px-0 ">Contact</li>
      </ul>

      <div
        className="sm:hidden  block fixed right-[30px] top-[25px]"
        onClick={Click}
      >
        {click ? (
          <CloseIcon size={25} style={{ color: "white " }} />
        ) : (
          <ReorderIcon size={25} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;
