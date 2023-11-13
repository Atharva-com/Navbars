import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'  
import { AiOutlineAlignRight } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
const Navbar = () => {
    const [OpenSidebar, setOpenSidebar] = useState(false)
  return (
    <div className={`fixed left-0 top-0 h-full bg-[#11101d] py-[6px] px-[14px] z-[99] transition-all duration-500 ease-in-out ${OpenSidebar ? 'w-[250px]' : 'w-[70px]'}`}>

        {/* logo Details */}

        <div className='h-[60px] flex items-center relative'>

            {/* Icons */}
            {OpenSidebar ? 
            (<AiOutlineAlignRight className='absolute top-[50%] right-0 text-[22px] transform translate-y-[-50%] text-right transition-all duration-300 ease-linear text-white z-10 h-[60px] min-w-[33px] cursor-pointer' onClick={() => setOpenSidebar(!OpenSidebar)}></AiOutlineAlignRight>) 
            : 
            (<GiHamburgerMenu className='absolute top-[40%] right-[8px] text-[22px] transform translate-y-[-50%] text-center transition-all duration-300 ease-linear text-white cursor-pointer h-[60px] z-10 min-w-[33px]' onClick={() => setOpenSidebar(!OpenSidebar)}></GiHamburgerMenu>)}

            {/* Name */}
            <div className={`text-[20px] text-white font-semibold opacity-0 transition-all duration-500 ease-in-out ${OpenSidebar && 'opacity-100'}`}>Company</div>

        </div>

        {/* Menu Items */}
        <ul className='mt-[20px] h-full'>
          <li className='relative my-[8px] list-none group'>
            {/* Icon */}

            <BsSearch className={`absolute top-[50%] left-0 text-xl ${OpenSidebar ? 'hover:bg-[#1d1b31] hover:text-[#fff]' : 'hover:bg-[#fff] hover:text-[#1d1b31]'}`} />

            {/* input for search */}
            <input type="text" placeholder='Search...' className={`text-sm text-[#fff] font-normal outline-none h-[50px] border-none rounded-[12px] transition-all duration-500 bg-[#1d1b31] ${OpenSidebar ? 'w-full pr-[20px] pl-[50px]' : 'w-[50px]'}`} />

            <span className={`absolute top-[-20px] z-[3] bg-[#fff] py-[6px] px-[12px] rounded-[4px] text-sm font-normal opacity-0 whitespace-nowrap pointer-events-none transition duration-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:transition-all group-hover:duration-300 group-hover:ease-linear group-hover:top-[50%] group-hover:transfrom group-hover:translate-y-[-50%] ${OpenSidebar ? 'hidden' : ''}`} style={{left: 'calc(100% + 15px)'}}>Search</span>
          </li>
        </ul>
    </div>
  )
}

export default Navbar