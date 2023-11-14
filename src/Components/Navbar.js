import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
const Navbar = () => {
  const [OpenSidebar, setOpenSidebar] = useState(false)
  return (
    <div className={`fixed left-0 top-0 h-full bg-[#11101d] py-[6px] px-[5px] sm:px-[14px] z-[99] transition-all duration-500 ease-in-out ${OpenSidebar ? 'sm:w-[250px] w-[180px]' : 'sm:w-[70px] w-[50px]'}`}>

      {/* logo Details */}

      <div className='h-[60px] flex items-center relative'>

        {/* Icons */}
        {OpenSidebar ?
          (<AiOutlineAlignRight className='absolute top-[50%] right-0 text-[22px] transform translate-y-[-50%] text-right transition-all duration-300 ease-linear text-white z-10 h-[60px] min-w-[33px] cursor-pointer' onClick={() => setOpenSidebar(!OpenSidebar)}></AiOutlineAlignRight>)
          :
          (<GiHamburgerMenu className='absolute top-[40%] right-[8px] text-[22px] transform translate-y-[-50%] text-center transition-all duration-300 ease-linear text-white cursor-pointer h-[60px] z-10 min-w-[27px]' onClick={() => setOpenSidebar(!OpenSidebar)}></GiHamburgerMenu>)}

        {/* Name */}
        <div className={`text-[20px] text-white font-semibold opacity-0 transition-all duration-500 ease-in-out ${OpenSidebar && 'opacity-100'}`}>Company</div>

      </div>

      {/* Menu Items */}
      <ul className='h-full'>

        {/* Search */}

        <li className='relative my-[8px] list-none group'>
          {/* Icon */}

          <div className={`h-[40px] w-[40px] bg-[#1d1b31] rounded-[12px] text-[#fff] flex items-center justify-center cursor-pointer absolute left-0 ${OpenSidebar ? 'hover:bg-[#1d1b31] hover:text-[#fff]' : 'hover:bg-[#fff] hover:text-[#1d1b31]'}`}>

            <HiOutlineSearch className='text-xl' />

          </div>

          {/* input for search */}
          <input type="text" placeholder='Search...' className={`text-[15px] text-[#fff] font-normal outline-none h-[40px] border-none rounded-[12px] transition-all duration-500 bg-[#1d1b31] ${OpenSidebar ? 'w-full pr-[20px] pl-[50px]' : 'w-[40px]'}`} />

          <span className={`tooltip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:transition-all group-hover:duration-300 group-hover:ease-linear group-hover:top-[50%] group-hover:transfrom group-hover:translate-y-[-50%] ${OpenSidebar ? 'hidden' : ''}`} style={{ left: 'calc(100% + 15px)' }}>Search</span>

        </li>

        {/* Dashboard */}

        <li className='relative my-[8px] list-none group'>

          <a href=" " className='flex h-[40px] w-full rounded-[12px] items-center transition-all duration-300 ease-linear bg-[#11101d] hover:bg-[#fff] group'>

            <div className={`h-[40px] ${OpenSidebar ? 'w-[40px]' : 'w-full'} rounded-[12px] text-[#fff] flex items-center justify-center cursor-pointer absolute left-0 hover:bg-[#fff] group-hover:text-[#1d1b31]`}>
              <MdDashboard className='text-xl' />
            </div>

            <span className={`text-[#fff] text-[15px] font-medium whitespace-nowrap pointer-events-none transition-all duration-500 ease-linear group-hover:text-[#1d1b31] ${OpenSidebar ? 'w-full pr-[20px] pl-[50px] flex' : 'w-[40px] hidden'} `}>Dashboard</span>

          </a>

          <span className={`tooltip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:transition-all group-hover:duration-300 group-hover:ease-linear group-hover:top-[50%] group-hover:transfrom group-hover:translate-y-[-50%] ${OpenSidebar ? 'hidden' : ''}`} style={{ left: 'calc(100% + 15px)' }}>Dashboard</span>
        </li>

        {/* User */}

        <li className='relative my-[8px] list-none group'>

          <a href=" " className='flex h-[40px] w-full rounded-[12px] items-center transition-all duration-300 ease-linear bg-[#11101d] hover:bg-[#fff] group'>

            <div className={`h-[40px] ${OpenSidebar ? 'w-[40px]' : 'w-full'} rounded-[12px] text-[#fff] flex items-center justify-center cursor-pointer absolute left-0 hover:bg-[#fff] group-hover:text-[#1d1b31]`}>
              <FaRegUser className='text-xl' />
            </div>

            <span className={`text-[#fff] text-[15px] font-medium whitespace-nowrap pointer-events-none transition-all duration-500 ease-linear group-hover:text-[#1d1b31] ${OpenSidebar ? 'w-full pr-[20px] pl-[50px] flex' : 'w-[40px] hidden'} `}>Profile</span>

          </a>

          <span className={`tooltip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:transition-all group-hover:duration-300 group-hover:ease-linear group-hover:top-[50%] group-hover:transfrom group-hover:translate-y-[-50%] ${OpenSidebar ? 'hidden' : ''}`} style={{ left: 'calc(100% + 15px)' }}>Profile</span>
        </li>

      </ul>


    </div>
  )
}

export default Navbar