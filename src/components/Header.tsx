import Image from "next/image";
import {
  MagnifyingGlassIcon,
  BellIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline"; // Updated Heroicons v2 import
import Logo from "../app/assets/images/Educify-logo.svg";
import ProfilePic from "../app/assets/images/educify_pic.png";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";


interface HeaderProps {
  onOpen: () => void; // Define onOpen as a function with no parameters that returns nothing
}

const Header = ({ onOpen }: HeaderProps) => {
  const [displayHeader, setDisplayHeader] = useState(true)
  useEffect(()=>{
    window.location.pathname === "/" ? setDisplayHeader(false): setDisplayHeader(true)
  },[])

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="flex justify-between items-center px-6 py-0">
        {/* Logo */}
        <Box>
          <IconButton
            display={{ base: "block", md: "none" }}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            aria-label="Open Menu"
          />
          <Text
            display={{ base: "none", md: "block" }}
            fontSize="26"
            fontWeight="400"
            color="#121A26"
          >
            <Image
              src={Logo} // Update with the correct path
              alt="EduCify Logo"
              width={97}
              height={40}
              className="object-contain"
            />
          </Text>
        </Box>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-50 border border-gray-300 rounded-full p-4 gap-3 w-[420px] h-[52px]">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />{" "}
          <input
            type="text"
            placeholder="Search for anything"
            className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
          />
        </div>

        {/* User Profile & Notifications */}
        <div className="flex items-center gap-4">
          {/* Help Icon */}
          <div className="relative w-12 h-12 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center">
            <QuestionMarkCircleIcon className="h-6 w-6 text-gray-600" />{" "}
            {/* Help Icon */}
          </div>

          {/* Notification Icon */}
          <div className="relative w-12 h-12 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center">
            <BellIcon className="h-6 w-6 text-gray-600" />{" "}
            {/* Notification Bell */}
            <div className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              23 {/* Notification Count */}
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full p-3">
            <div>
              <p className="text-sm font-semibold text-gray-800">Bekwa Undie</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-400">
              <Image
                src={ProfilePic} // Update with correct path
                alt="Profile Image"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <p hidden={displayHeader} className="bg-blue-500 py-2 text-center w-full text-white m-0 leading-relaxed">
        Digital next cta thought latest. Donuts closing wiggle reach follow ask get move.{' '}
        <a href="#" className="underline font-bold hover:no-underline">
          View including.
        </a>
      </p>
    </header>
  );
};

export default Header;
