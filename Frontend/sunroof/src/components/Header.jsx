import React from 'react'
import LOGO from '../assests/logo.webp'
function Header() {
  return (
    <div className="bg-white flex items-center justify-between px-[1rem] lg:px-[3rem] py-2">
        <img src={LOGO} alt=""  className="h-[3.5rem]"/>
        <button className="flex gap-2 items-center px-2 py-2 border-[1px]  border-[#03a9f4] text-[#03a9f4]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
          </svg>

            <p className="font-bold text-lg lg:hidden">CALL US</p>
            <p className="font-bold text-lg hidden lg:block">(714) 582-3909</p>
        </button>
    </div>
  )
}

export default Header