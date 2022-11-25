// import React, { useState } from 'react'
import ChatBubble from './ChatBubble'
// import Slider from 'react-input-slider';
function Bill() {
  return (
    <div className='w-[50rem] px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            <div className='w-1/3 flex justify-end'>
                <p className='text-[1rem] text-gray-500'>(Step 1 of 3)</p>
            </div>
            <div className='h-[15px] w-full bg-gray-200 rounded-lg'>
                <div className='w-1/3 bg-[#ff9900d9] rounded-lg h-[15px]'></div>
            </div>
        </div>

        <ChatBubble message="What is your average electric bill payment?" />

        <div className="flex mt-5 gap-2">
            <button className='border-[1px] border-[#03a9f4] h-[3rem] w-[4rem] flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#03a9f4]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button className='bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>Calculate Savings</button>
        </div>
    </div>
  )
}

export default Bill