import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

const SearchInput = () => {
  return (
    <div className="flex shadow-header w-[400px] h-[50px] items-center">
      <div className="px-5 flex items-center">
        <MagnifyingGlassIcon className="w-7 font-bold" />
      </div>
      <input className="w-full text-sm outline-none text-black font-bold" type="text" placeholder="Search for a country..."/>
    </div>
  );
};

export default SearchInput;
