"use client";

import Image from "next/image";
import {
  MagnifyingGlassIcon,
  BellIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline"; // Updated Heroicons v2 import
import Logo from "../app/assets/images/Educify-logo.svg";
import ProfilePic from "../app/assets/images/educify_pic.png";
import { Bars3Icon } from "@heroicons/react/24/solid"; // Import HamburgerIcon from Heroicons
import { useEffect, useState } from "react";

interface HeaderProps {
  onOpen: () => void; // Define onOpen as a function with no parameters that returns nothing
}

const Header = ({ onOpen }: HeaderProps) => {
  const [displayHeader, setDisplayHeader] = useState(true);

  useEffect(() => {
    window.location.pathname === "/"
      ? setDisplayHeader(false)
      : setDisplayHeader(true);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="flex justify-between items-center px-4 sm:px-6 py-0 h-16">
          <div className="flex items-center">
            <button
              className="md:hidden focus:outline-none"
              onClick={onOpen}
              aria-label="Open Menu"
            >
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            </button>
            <div className="md:block">
              <Image
                src={Logo}
                alt="EduCify Logo"
                width={97}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Search Bar - Hidden on small screens, shown on medium and up */}
          <div className="hidden md:flex items-center bg-gray-50 border border-gray-300 rounded-full p-2 sm:p-4 gap-2 sm:gap-3 w-full max-w-sm h-10 sm:h-12">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for anything"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Question Mark Icon */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center">
              <QuestionMarkCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
            </div>

            {/* Notification Bell Icon */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center">
              <BellIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
              <div className="absolute top-0 right-0 w-3 h-3 sm:w-5 sm:h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                23
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 border border-gray-200 rounded-full p-1 sm:p-2">
              <div className="hidden sm:block">
                <p className="text-xs sm:text-sm font-semibold text-gray-800">
                  Bekwa Undie
                </p>
                <p className="text-xxs sm:text-xs text-gray-500">Student</p>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-400 overflow-hidden">
                <Image
                  src={ProfilePic}
                  alt="Profile Image"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {!displayHeader && (
        <p className="bg-blue-500 py-1 text-center w-full text-white m-0 leading-relaxed text-xs sm:text-sm">
          Digital next cta thought latest. Donuts closing wiggle reach follow
          ask get move.{" "}
          <a href="#" className="underline font-bold hover:no-underline">
            View including.
          </a>
        </p>
      )}
    </>
  );
};

export default Header;