import React from 'react'
import BG from '../assests/map-mobile.webp'
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
function Address({address,setAddress,step,setStep}) {
  return (
    <div className='w-[50rem]'>
        <div className="h-[12rem] relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage:`url(${BG})` }}>
            <div className="w-full flex justify-center">
                <img src={AVATAR} alt="" className='absolute bottom-[-2rem] h-[7rem] w-[7rem] rounded-full border-[5px] border-orange-400'/>
            </div>
        </div>
        <div className="px-3 py-[2rem]">
            <div className="w-full flex justify-center">
                <p className='flex justify-center w-[35rem] text-center text-[1.8rem] leading-[1.75rem] text-[#3a3a3a]'>Hey! I'm Sarah. I'll get you a custom solar estimate in seconds using satellites!</p>
            </div>

            <div className='w-full flex justify-center px-[2rem] mt-5'>
                <label htmlFor="address" className="relative">
                    <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="123 Sunshine Way" className='border-[1px] border-black p-2 w-[20rem] focus:border-2 focus:outline-none border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200'/>
                    {/* <span className="text-medium text-opacity-80 absolute left-5 top-1 px-1 transition duration-200 input-text">Enter your street address to start!</span> */}
                </label>
            </div>
            <div className="w-full flex justify-center px-[2rem] mt-5">
                <button onClick={()=>{setStep(step+1)}} className='text-white bg-[#03a9f4] w-[20rem] font-semibold py-2'>START ESTIMATE</button>
            </div>
        </div>
    </div>
  )
}

export default Address