import React, { useState } from 'react'
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
import Slider from 'react-input-slider';
function Bill() {
  return (
    <div className='px-[2rem] flex flex-col justify-between'>
        <div>
            <div className='space-y-2'>
                <p className='w-full flex justify-center text-sm text-gray-600'>(Step 1 of 3)</p>
                <div className="w-full h-[10px] bg-gray-200 rounded-full">
                    <div className='bg-[#ff9900d9] w-[50%] h-[10px] rounded-full'></div>
                </div>
            </div>

            <div className='mt-5'>
                <div className="flex gap-2 items-end">
                    <img src={AVATAR} alt="" className='h-[3rem] rounded-full'/>
                    <div className='bg-gray-200 w-full rounded-tl-lg rounded-tr-lg rounded-br-lg p-3 text-2xl text-gray-500'>
                        What is your average electri bill payment?
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute bottom-[10rem] flex gap-2 items-center w-full'>
            <button className='border-[1px] border-[#03a9f4] py-3 px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button className='bg-[#03a9f4] w-[17rem] text-white py-3 text-xl'>CALCULATE SAVINGS</button>
        </div>
    </div>
  )
}

export default Bill