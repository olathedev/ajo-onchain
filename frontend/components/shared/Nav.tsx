import { ConnectKitButton } from "connectkit";
import React from "react";

const Nav = () => {
  return (
    <nav className="pt-8 w-full justify-between flex items-center bg-white container px-10 h-full mx-auto">
      <div className="">
        <h2 className="text-2xl">
          Alaj<span className="text-primary font-medium">o</span>
        </h2>
      </div>
      <ul className="flex items-center space-x-6">
        <li className="">about</li>
        <li className="flex items-center">
          contribute
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </li>
      </ul>
      <div className="flex items-center space-x-6">
        <div className="flex space-x-2">
          <span className="h-10 w-10 bg-primaryLight rounded-full flex items-center justify-center"></span>
          <span className="h-10 w-10 bg-primaryLight rounded-full flex items-center justify-center"></span>
          <span className="h-10 w-10 bg-primaryLight rounded-full flex items-center justify-center"></span>
        </div>

        <ConnectKitButton />
      </div>
    </nav>
  );
};

export default Nav;
