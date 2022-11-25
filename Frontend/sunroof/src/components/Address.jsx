import React from 'react'
import BG from '../assests/map-mobile.webp'
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
function Address() {
  return (
    <div className='w-[50rem]'>
        <div className="h-[12rem] relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage:`url(${BG})` }}>
            <div className="w-full flex justify-center">
            {/* <div style={{ backgroundImage:`url(${BG})` }}></div> */}
                <img src={AVATAR} alt="" className='absolute bottom-[-2rem] h-[7rem] w-[7rem] rounded-full border-[5px] border-orange-400'/>
            </div>
        </div>
        <div className="px-3 py-[2rem]">
            <div className="w-full flex justify-center">
                <p className='flex justify-center w-[35rem] text-center text-[1.8rem] leading-[1.75rem] text-[#3a3a3a]'>Hey! I'm Sarah. I'll get you a custom solar estimate in seconds using satellites!</p>
            </div>

            <div className='w-full flex justify-center px-[2rem] mt-5'>
                <input type="text" placeholder='Enter your street address to start!' className='border-[1px] border-black p-2 w-[20rem] focus:border-2 focus:outline-none'/>
            </div>
            <div className="w-full flex justify-center px-[2rem] mt-5">
                <button className='text-white bg-[#03a9f4] w-[20rem] font-semibold py-2'>START ESTIMATE</button>
            </div>
        </div>
    </div>
  )
}

export default Address