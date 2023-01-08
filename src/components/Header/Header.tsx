import React, { useState } from "react";
import Link from "next/link";
import {
  GlobeAltIcon,
  MenuAlt2Icon,
  SearchIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";

// @ts-ignore
import AirbnbIcon from "../../assets/icons/AirbnbIcon";
// @ts-ignore
import AirbnbLogo from "../../assets/icons/AirbnbLogo";

function Header() {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <header className="sticky top-0 z-50 flex grid-cols-3 justify-between space-x-1 border-b bg-white px-10 py-2  shadow-sm md:px-10">
      <Link href="/">
        <div
          className={`-mb-5 -ml-3 flex h-12 cursor-pointer items-center object-contain xs:-ml-0`}
        >
          <AirbnbIcon className="h-8 w-8" />
          <AirbnbLogo className="hidden h-8 w-20 md:inline-flex" />
        </div>
      </Link>
      {/* Middle */}
      <div className="my-auto flex h-12 max-w-[180px] flex-grow items-center rounded-full border-2 px-2 shadow-sm md:max-w-sm xs:max-w-sm">
        <input
          type="text"
          className="flex-1 truncate bg-transparent pl-2 text-gray-600 outline-none"
          placeholder={"Enter a City or Country..."}
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <SearchIcon className="-mr-[2px] ml-3 h-9 w-9 cursor-pointer rounded-full bg-airbnb bg-opacity-75 p-2 text-white hover:bg-opacity-95" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-between space-x-1 text-gray-500 ">
        <GlobeAltIcon className="mr-1 hidden h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-200 hover:bg-opacity-40 sm:inline-flex" />
        <div
          className="flex cursor-pointer items-center space-x-2 rounded-2xl border p-2 shadow-sm transition ease-in-out hover:scale-105 hover:shadow-md active:scale-95"
          onClick={() => {
            console.log("clicked....");
          }}
        >
          <MenuAlt2Icon className="h-6 w-6" />
          <UserCircleIcon className="h-8 w-8" />
        </div>
      </div>
    </header>
  );
}

export default Header;
