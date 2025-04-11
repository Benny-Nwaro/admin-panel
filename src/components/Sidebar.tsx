"use client"
import React, { useState } from 'react';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { AiFillDollarCircle, AiFillMessage } from 'react-icons/ai';
import { BiSolidHome } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import { HiMiniChartBarSquare } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { DiGoogleAnalytics } from "react-icons/di";
import { TbPackages } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { MdLiveHelp } from "react-icons/md";
import { PiTrashSimpleFill } from "react-icons/pi";
import { RiGuideLine } from "react-icons/ri";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
  active?: boolean;
  isLogout?: boolean;
  onClick?: () => void;
}

interface SubMenuItemProps {
  label: string;
  link: string;
  active: boolean;
}

const Sidebar = () => {
  const pathname = usePathname();
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [crmOpen, setCrmOpen] = useState(false);
  const [cmsOpen, setCmsOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [bookingsOpen, setBookingsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="group h-full max-md:h-full mt-16 relative z-50"> {/* Reduced top padding */}
      <div className="fixed left-0 h-full bg-black max-md:w-48 w-12 md:w-14 transition-all duration-300 ease-in-out group-hover:lg:w-48 max-md:h-full shadow-md "> {/* Reduced initial width, expanded width */}
        <div className="mt-3"> {/* Reduced top margin */}
          <MenuItem
            icon={<BiSolidHome size={20} />} 
            label="Dashboard"
            link="/"
            active={isActive('/')}
          />

          <div className="relative">
            <MenuItem
              icon={<HiMiniChartBarSquare size={20} />} 
              label="Analytics"
              link="#"
              active={isActive('/classes/calendar')}
              onClick={() => setAnalyticsOpen(!analyticsOpen)}
            />
            {analyticsOpen && (
              <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-md"> {/* Reduced margin and padding */}
                <SubMenuItem label="Marketting" link="/analytics/marketting" active={isActive('/analytics/marketting')} />
                <SubMenuItem label="Sales" link="/analytics/sales" active={isActive('/analytics/overview')} />
                <SubMenuItem label="Social" link="/analytics/socials" active={isActive('/analytics/socials')} />
                <SubMenuItem label="Live classes" link="/analytics/liveclasses" active={isActive('/analytics/liveclasses')} />
                <SubMenuItem label="Users" link="/analytics/users" active={isActive('/analytics/users')} />
              </div>
            )}
          </div>

          <MenuItem
            icon={<IoNotificationsOutline size={20} />} 
            label="Notifications"
            link="/notifications"
            active={isActive('/notifications')}
          />

          <div className='relative'>
            <MenuItem
              icon={<AiFillMessage size={20} />} 
              label="CRM"
              link="#"
              active={isActive('/crm')}
              onClick={() => setCrmOpen(!crmOpen)}
            />
            {crmOpen && (
              <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-md"> {/* Reduced margin and padding */}
                <SubMenuItem label="Message" link="/crm/messages" active={isActive('/crm/messages')} />
                <SubMenuItem label="Requests" link="/crm/requests" active={isActive('/crm/requests')} />
                <SubMenuItem label="SMS" link="/crm/sms" active={isActive('/crm/sms')} />
                <SubMenuItem label="Calls" link="/crm/calls" active={isActive('/crm/calls')} />
                <SubMenuItem label="Emails" link="/crm/emails" active={isActive('/crm/emails')} />
              </div>
            )}
          </div>

          <MenuItem
            icon={<DiGoogleAnalytics size={20} />} 
            label="SEO"
            link="/seo"
            active={isActive('/seo')}
          />

          <div className='relative'>
            <MenuItem
              icon={<AiFillMessage size={20} />} 
              label="Content management"
              link="#"
              active={isActive('/cms')}
              onClick={() => setCmsOpen(!cmsOpen)}
            />
            {cmsOpen && (
              <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-md"> {/* Reduced margin and padding */}
                <SubMenuItem label="Blog" link="/cms/blogs" active={isActive('/cms/blogs')} />
                <SubMenuItem label="Courses" link="/cms/courses" active={isActive('/cms/courses')} />
              </div>
            )}
          </div>

          <div className='relative'>
            <MenuItem
              icon={<AiFillMessage size={20} />} 
              label="User Management"
              link="#"
              active={isActive('/users')}
              onClick={() => setUsersOpen(!usersOpen)}
            />
            {usersOpen && (
              <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-md"> {/* Reduced margin and padding */}
                <SubMenuItem label="Students" link="/users/students" active={isActive('/users/students')} />
                <SubMenuItem label="Teachers" link="/users/teachers" active={isActive('/users/teachers')} />
                <SubMenuItem label="Accounts" link="/users/accounts" active={isActive('/users/accounts')} />
              </div>
            )}
          </div>

          <div className='relative'>
            <MenuItem
              icon={<AiFillDollarCircle size={20} />} 
              label="Bookings & Payments"
              link="#"
              active={isActive('/bookingsandpayments')}
              onClick={() => setBookingsOpen(!usersOpen)}
            />
            {bookingsOpen && (
              <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-md"> {/* Reduced margin and padding */}
                <SubMenuItem label="Bookings" link="/bookingsandpayments/bookings" active={isActive('/bookingsandpayments/bookings')} />
                <SubMenuItem label="Payments" link="/bookingsandpayments/payments" active={isActive('/bookingsandpayments/payments')} />
              </div>
            )}
          </div>

          <div className='relative'>
            <MenuItem
              icon={<TbPackages size={20} />} 
              label="Products & Packages"
              link="#"
              active={isActive('/products')}
              onClick={() => setProductsOpen(!productsOpen)}
            />
            {productsOpen && (
              <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-md"> {/* Reduced margin and padding */}
                <SubMenuItem label="Products" link="/productsandpackages/products" active={isActive('/productsandpackages/products')} />
                <SubMenuItem label="Categories" link="/productsandpackages/categories" active={isActive('/productsandpackages/categories')} />
                <SubMenuItem label="Subjects" link="/productsandpackages/subjects" active={isActive('/productsandpackages/subjects')} />
                <SubMenuItem label="Manage packages" link="/productsandpackages/packages" active={isActive('/productsandpackages/packages')} />
              </div>
            )}
          </div>

          <MenuItem
            icon={<GoGift size={20} />} 
            label="Promotions"
            link="/promotions"
            active={isActive('/promotions')}
          />
          <MenuItem
            icon={<MdLiveHelp size={20} />} 
            label="Help Desk"
            link="/help"
            active={isActive('/help')}
          />
          <MenuItem
            icon={<PiTrashSimpleFill size={20} />} 
            label="Trash"
            link="/trash"
            active={isActive('/trash')}
          />
        </div>

        <div className="absolute border-t border-white  w-full mt-24"> {/* Reduced top margin, moved to bottom */}
          <MenuItem
            icon={<RiGuideLine size={20} />} 
            label="Enable guide"
            link="/settings"
            active={isActive('/guide')}
          />
          <MenuItem
            icon={<FiSettings size={20} />} 
            label="Settings"
            link="/settings"
            active={isActive('/settings')}
          />
          <MenuItem
            icon={<FiLogOut size={20} className="text-red-500 rotate-180" />} 
            label="Log Out"
            link="/logout"
            isLogout
          />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, link, active, isLogout, onClick }: MenuItemProps) => {
  return (
    <div onClick={onClick} className="w-full cursor-pointer">
      <Link href={link} className="w-full">
        <div
          className={`flex items-center gap-2 px-1.5 py-1.5 transition-all duration-300 ${ /* Reduced padding and gap */
            active
              ? 'border rounded-md border-'
              : 'hover:bg-gray-700'
          }`}
        >
          <div className="text-white">{icon}</div>
          <span
            className={`text-white font-bold text-xs whitespace-nowrap transition-opacity duration-300 ${ /* Smaller font size */
              isLogout ? 'text-red-500' : ''
            }  lg:group-hover:opacity-100 lg:opacity-0`}
          >
            {label}
          </span>
        </div>
      </Link>
    </div>
  );
};

const SubMenuItem = ({ label, link, active }: SubMenuItemProps) => {
  return (
    <Link href={link} className={`block px-3 py-1.5 text-white text-xs hover:bg-gray-600 ${active ? 'bg-gray-700' : ''}`}> {/* Reduced padding and font size */}
      {label}
    </Link>
  );
};

export default Sidebar;