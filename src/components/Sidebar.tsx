import React from 'react';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { BsFillWalletFill } from 'react-icons/bs';
import { AiFillDollarCircle, AiFillMessage } from 'react-icons/ai';
import { FaCalendar, FaFolder, FaUser } from 'react-icons/fa';
import { BiSolidHome } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="group h-fulls  relative">
      {/* Sidebar Container */}
      <div className="fixed pt-20 left-0 h-full bg-navbar-bg w-16 md:w-20 transition-all duration-300 ease-in-out group-hover:w-72 shadow-md">
        {/* Top Section */}
        <div className="mt-6">
          <MenuItem
            icon={<BiSolidHome size={24} />}
            label="Dashboard"
            link="/"
            active={isActive('/')}
          />
          <MenuItem
            icon={<FaCalendar size={24} />}
            label="Classes"
            link="/classes/calendar"
            active={isActive('/classes/calendar')}
          />
          <MenuItem
            icon={<FaFolder size={24} />}
            label="Workspace"
            link="/workspace"
            active={isActive('/workspace')}
          />
          <MenuItem
            icon={<AiFillMessage size={24} />}
            label="Messages"
            link="/messages"
            active={isActive('/messages')}
          />
          <MenuItem
            icon={<BsFillWalletFill size={24} />}
            label="Wallet"
            link="/finances/earnings"
            active={isActive('/finances/earnings')}
          />
          <MenuItem
            icon={<FaUser size={24} />}
            label="My Account"
            link="/myaccount"
            active={isActive('/myaccount')}
          />
          <MenuItem
            icon={<AiFillDollarCircle size={24} />}
            label="Reward Center"
            link="/reward"
            active={isActive('/reward')}
          />
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-6 w-full">
          <MenuItem
            icon={<FiSettings size={24} />}
            label="Settings"
            link="/settings"
            active={isActive('/settings')}
          />
          <MenuItem
            icon={<FiLogOut size={24} className="text-red-500 rotate-180" />}
            label="Log Out"
            link="/logout"
            isLogout
          />
        </div>
      </div>
    </div>
  );
};

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  link: string;
  active?: boolean;
  isLogout?: boolean;
};

const MenuItem = ({ icon, label, link, active, isLogout }: MenuItemProps) => {
  return (
    <Link href={link} className="w-full">
      <div
        className={`flex items-center gap-4 px-4 py-5 transition-all duration-300 ${
          active
            ? 'bg-[#085DAA] border-l-4 border-white'
            : 'hover:bg-gray-700'
        }`}
      >
        <div className="text-white">{icon}</div>
        <span
          className={`text-white font-bold text-sm whitespace-nowrap transition-opacity duration-300 ${
            isLogout ? 'text-red-500' : ''
          } group-hover:opacity-100 opacity-0`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;
