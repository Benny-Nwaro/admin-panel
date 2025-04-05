"use client"
import React, { useState } from 'react';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { BsFillWalletFill } from 'react-icons/bs';
import { AiFillDollarCircle, AiFillMessage } from 'react-icons/ai';
import { FaCalendar, FaFolder, FaUser } from 'react-icons/fa';
import { BiSolidHome } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Logo from "../app/assets/images/Educify-logo.svg";
import { HiMiniChartBarSquare } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { DiGoogleAnalytics } from "react-icons/di";
import { BiBookContent } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";
import { TbPackages } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { MdLiveHelp } from "react-icons/md";
import { PiTrashSimpleFill } from "react-icons/pi";
import { RiGuideLine } from "react-icons/ri";


const Sidebar = () => {
  const pathname = usePathname();
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [crmOpen, setCrmOpen] = useState(false);
  const [cmsOpen, setCmsOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [bookingsOpen, setBookingsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);


  const [notificationsOpen, setNotificationsOpen] = useState(false);



  const isActive = (path: string) => pathname === path;

  return (
    <div className="group h-full max-md:h-full pt-10  relative">
      {/* Sidebar Container */}
      <div className="fixed  left-0 h-full bg-black w-16 md:w-20 transition-all duration-300 ease-in-out group-hover:lg:w-72  max-md:h-full shadow-md">
        {/* Top Section */}
        <div className="mt-6">
        <MenuItem
            icon={<BiSolidHome size={24} />}
            label="Dashboard"
            link="/"
            active={isActive('/')}
          />

          <div className="relative">
            <MenuItem
              icon={<HiMiniChartBarSquare size={24} />}
              label="Analytics"
              link="#"
              active={isActive('/classes/calendar')}
              onClick={() => setAnalyticsOpen(!analyticsOpen)}
            />
            {analyticsOpen && (
              <div className="ml-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                <SubMenuItem label="Marketting" link="/analytics/marketting" active={isActive('/analytics/marketting')} />
                <SubMenuItem label="Sales" link="/analytics/sales" active={isActive('/analytics/overview')} />
                <SubMenuItem label="Social" link="/analytics/socials" active={isActive('/analytics/socials')} />
                <SubMenuItem label="Live classes" link="/analytics/liveclasses" active={isActive('/analytics/liveclasses')} />
                <SubMenuItem label="Users" link="/analytics/users" active={isActive('/analytics/users')} />

              </div>
            )}
          </div>

          <MenuItem
            icon={<IoNotificationsOutline size={24} />}
            label="Notifications"
            link="/notifications"
            active={isActive('/notifications')}
          />
         
          <div className='relative'>
          <MenuItem
            icon={<AiFillMessage size={24} />}
            label="CRM"
            link="#"
            active={isActive('/crm')}
            onClick={() => setCrmOpen(!crmOpen)}
          />
            {crmOpen && (
              <div className="ml-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                <SubMenuItem label="Message" link="/crm/messages" active={isActive('/crm/messages')} />
                <SubMenuItem label="Requests" link="/crm/requests" active={isActive('/crm/requests')} />
                <SubMenuItem label="SMS" link="/crm/sms" active={isActive('/crm/sms')} />
                <SubMenuItem label="Calls" link="/crm/calls" active={isActive('/crm/calls')} />
                <SubMenuItem label="Emails" link="/crm/emails" active={isActive('/crm/emails')} />

              </div>
            )}
          </div>
          <MenuItem
            icon={<DiGoogleAnalytics size={24} />}
            label="SEO"
            link="/seo"
            active={isActive('/seo')}
          />
          <div className='relative'>
          <MenuItem
            icon={<AiFillMessage size={24} />}
            label="Content management"
            link="#"
            active={isActive('/cms')}
            onClick={() => setCmsOpen(!cmsOpen)}
          />
            {cmsOpen && (
              <div className="ml-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                <SubMenuItem label="Blog" link="/cms/blogs" active={isActive('/cms/blogs')} />
                <SubMenuItem label="Courses" link="/cms/courses" active={isActive('/cms/courses')} />
              </div>
            )}
          </div>
          <div className='relative'>
          <MenuItem
            icon={<AiFillMessage size={24} />}
            label="User Management"
            link="#"
            active={isActive('/users')}
            onClick={() => setUsersOpen(!usersOpen)}
          />
            {usersOpen && (
              <div className="ml-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                <SubMenuItem label="Students" link="/users/students" active={isActive('/users/students')} />
                <SubMenuItem label="Teachers" link="/users/teachers" active={isActive('/users/teachers')} />
                <SubMenuItem label="Accounts" link="/users/accounts" active={isActive('/users/accounts')} />
              </div>
            )}
          </div>
          <div className='relative'>
          <MenuItem
            icon={<AiFillDollarCircle size={24} />}
            label="Bookings & Payments"
            link="#"
            active={isActive('/bookingsandpayments')}
            onClick={() => setBookingsOpen(!usersOpen)}
          />
            {bookingsOpen && (
              <div className="ml-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                <SubMenuItem label="Bookings" link="/bookingsandpayments/bookings" active={isActive('/bookingsandpayments/bookings')} />
                <SubMenuItem label="Payments" link="/bookingsandpayments/payments" active={isActive('/bookingsandpayments/payments')} />
              </div>
            )}
          </div>
          <div className='relative'>
          <MenuItem
          icon={<TbPackages size={24} />}
          label="Products &  Packages"
          link="#"
          active={isActive('/products')}
          onClick={()=>setProductsOpen(!productsOpen)}
        />  
            {productsOpen && (
              <div className="ml-10 mt-2 bg-gray-800 rounded-md shadow-lg">
                <SubMenuItem label="Products" link="/productsandpackages/products" active={isActive('/productsandpackages/products')} />
                <SubMenuItem label="Categories" link="/productsandpackages/categories" active={isActive('/productsandpackages/categories')} />
                <SubMenuItem label="Subjects" link="/productsandpackages/subjects" active={isActive('/productsandpackages/subjects')} />
                <SubMenuItem label="Manage packages" link="/productsandpackages/packages" active={isActive('/productsandpackages/packages')} />
              </div>
            )}
          </div>
    
        <MenuItem
        icon={<GoGift size={24} />}
        label="Promotions"
        link="/promotions"
        active={isActive('/promotions')}
      />  
      <MenuItem
      icon={<MdLiveHelp size={24} />}
      label="Help Desk"
      link="/help"
      active={isActive('/help')}
    />  
        <MenuItem
        icon={<PiTrashSimpleFill size={24} />}
        label="Trash"
        link="/trash"
        active={isActive('/trash')}
      />  
        </div>

        {/* Bottom Section */}
        <div className="absolute border-t-2 border-white mt-12 w-full">
        <MenuItem
            icon={<RiGuideLine size={24} />}
            label="Enable guide"
            link="/settings"
            active={isActive('/guide')}
          />
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

const MenuItem = ({ icon, label, link, active, isLogout, onClick }: any) => {
  return (
    <div onClick={onClick} className="w-full cursor-pointer">
    <Link href={link} className="w-full">
      <div
        className={`flex items-center gap-4 px-2 py-3 transition-all duration-300 ${
          active
            ? 'border-2 rounded-2xl border-'
            : 'hover:bg-gray-700'
        }`}
      >
        <div className="text-white">{icon}</div>
        <span
          className={`text-white font-bold text-sm whitespace-nowrap transition-opacity duration-300 ${
            isLogout ? 'text-red-500' : ''
          }  group-hover:opacity-100 opacity-0`}
        >
          {label}
          {/* {label === "Analytics" &&  } */}
        </span>
      </div>
    </Link>
    </div>
  );
};
const SubMenuItem = ({ label, link, active }: any) => {
  return (
    <Link href={link} className={`block px-4 py-2 text-white text-sm hover:bg-gray-600 ${active ? 'bg-gray-700' : ''}`}>
      {label}
    </Link>
  );
};

export default Sidebar;
