import React from 'react'
import LOGO from '../assests/logo.webp'
import { PhoneIcon } from '@heroicons/react/24/solid'
function Header() {
  return (
    <div className="w-screen overflow-x-hidden bg-white flex items-center justify-between px-[1rem] lg:px-[3rem] py-2">
        <img src={LOGO} alt=""  className="w-[10rem] lg:w-[18rem] lg:h-[3.5rem]"/>
        <button className=" w-[8rem] lg:w-[12rem] flex gap-2 items-center px-2 py-2 border-[1px]  border-[#03a9f4] text-[#03a9f4]">
          <PhoneIcon className='h-5 w-5' />

            <p className="font-bold text-sm lg:text-lg lg:hidden">CALL US</p>
            <p className="font-bold text-lg hidden lg:block">(714) 582-3909</p>
        </button>
    </div>
  )
}

export default Header