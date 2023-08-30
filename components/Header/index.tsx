import { SunIcon } from "@heroicons/react/24/solid";
import React from "react";

const Header = () => {
  return (
    <header className="flex px-[100px] h-[90px] items-center  shadow-header justify-between">
      <div>
        <h3 className="text-xl cursor-pointer font-bold">Where in the world?</h3>
      </div>
      <div >
        <button className="flex items-center">
          <SunIcon  className="w-10 px-2"/>
          light mode
        </button>
      </div>
    </header>
  );
};

export default Header;
