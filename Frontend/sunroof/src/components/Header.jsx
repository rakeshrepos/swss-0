import React from 'react'
import LOGO from '../assests/logo.webp'
import { PhoneIcon } from '@heroicons/react/24/solid'
function Header() {
  return (
    <div className="bg-white flex items-center justify-between px-[1rem] lg:px-[3rem] py-2">
        <img src={LOGO} alt=""  className="h-[3.5rem]"/>
        <button className="flex gap-2 items-center px-2 py-2 border-[1px]  border-[#03a9f4] text-[#03a9f4]">
          <PhoneIcon className='h-5 w-5' />

            <p className="font-bold text-lg lg:hidden">CALL US</p>
            <p className="font-bold text-lg hidden lg:block">(714) 582-3909</p>
        </button>
    </div>
  )
}

export default Header