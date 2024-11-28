import React from 'react'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import Link from 'next/link'
import { BsFillWalletFill } from 'react-icons/bs'
import { AiFillDollarCircle, AiFillMessage } from 'react-icons/ai'
import { FaCalendar, FaFolder, FaUser } from 'react-icons/fa'
import { BiSolidHome } from 'react-icons/bi'
import { usePathname } from 'next/navigation' // Import useRouter to get current route

const Sidebar = () => {
  const pathname = usePathname() // Initialize the pathname

  // Check if the current route matches the menu item link
  const isActive = (path: string) => pathname === path

  return (
    <div className='flex md:z-10 flex-col fixed justify-between items-center p-6 gap-8 w-72 h-screen bg-navbar-bg shadow-md'>
      {/* Top Section */}
      <div className='w-full'>
        <MenuItem
          icon={<BiSolidHome size={24} className='text-white' />}
          label='Dashboard'
          link='/'
          active={isActive('/')} // Pass active state
        />
        <MenuItem
          icon={<FaCalendar size={24} className='text-white' />}
          label='Classes'
          link='/classes/calendar'
          active={isActive('/classes/calendar')} // Pass active state
        />

        <MenuItem
          icon={<FaFolder size={24} className='text-white' />}
          label='Workspace'
          link='/workspace'
          active={isActive('/workspace')} // Pass active state
        />

        {/* Messages & Requests with Notification Badge */}
        <div className='relative'>
          <MenuItem
            icon={<AiFillMessage size={24} className='text-white' />}
            label='Messages'
            link='/messages'
            active={isActive('/messages')} // Pass active state
          />
          <div className='absolute top-4 right-20 bg-red-500 w-5 h-5 flex justify-center items-center rounded-full'>
            <span className='text-xs text-white font-bold'>23</span>
          </div>
        </div>

        <MenuItem
          icon={<BsFillWalletFill size={24} className='text-white' />}
          label='Wallet'
          link='/finances/earnings'
          active={isActive('/finances/earnings')} // Pass active state
        />

        <MenuItem
          icon={<FaUser size={24} className='text-white' />}
          label='My Account'
          link='/myaccount'
          active={isActive('/myaccount')} // Pass active state
        />

        <MenuItem
          icon={<AiFillDollarCircle size={24} className='text-white' />}
          label='Reward Center'
          link='/reward'
          active={isActive('/reward')} // Pass active state
        />
      </div>

      {/* Bottom Section */}
      <div className='w-full'>
        <MenuItem
          icon={<FiSettings size={24} className='text-white' />}
          label='Settings'
          link='/settings'
          active={isActive('/settings')} // Pass active state
        />
        <MenuItem
          icon={
            <FiLogOut size={24} className='text-red-500 transform rotate-180' />
          }
          label='Log Out'
          link='/logout'
          isLogout
        />
      </div>
    </div>
  )
}

type MenuItemProps = {
  icon: React.ReactNode
  label: string
  link: string
  active?: boolean // Active prop to control active state
  hasArrow?: boolean
  isLogout?: boolean
}

const MenuItem = ({
  icon,
  label,
  link,
  active,
  hasArrow,
  isLogout,
}: MenuItemProps) => {
  return (
    <Link href={link} className='w-full'>
      <div
        className={`flex items-center gap-3 px-6 py-4 ${
          active ? 'bg-[#085DAA] border-l-4 border-white' : 'bg-navbar-bg' // Apply default bg if not active
        }`}
      >
        {icon}
        <span
          className={`text-white font-bold text-sm ${
            isLogout ? 'text-red-500' : ''
          }`}
        >
          {label}
        </span>
        {hasArrow && (
          <span className='ml-auto text-white opacity-80'>&gt;</span>
        )}
      </div>
    </Link>
  )
}

export default Sidebar
