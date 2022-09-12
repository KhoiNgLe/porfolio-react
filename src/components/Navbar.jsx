import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Khoi Le</h1>
          <ul className="hidden md:flex ">
              <li>Home</li>
              <li>Project</li>
              <li>Resume</li>
              <li>Contact Me</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
            
        </div>
      </div>

      {/* Menu Icon from Heroicon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {/* Menu Icon from Heroicon */}
    </div>
  );
};

export default Navbar;
