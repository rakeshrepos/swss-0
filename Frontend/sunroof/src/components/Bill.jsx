import React from 'react'
import ChatBubble from './ChatBubble'
import { Slider } from '@material-ui/core';
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

  
function Bill({step,setStep}) {
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
        <Slider
         defaultValue={50} 
        //  aria-label="Default" 
         valueLabelDisplay="auto" />
         
        <div className="flex mt-5 gap-2">
            <button onClick={()=>{setStep(step-1)}} className='border-[1px] border-[#03a9f4] h-[3rem] w-[4rem] flex justify-center items-center'>
                <ChevronLeftIcon className='text-[#03a9f4] h-6 w-6'/>
            </button>
            <button onClick={()=>{setStep(step+1)}} className='bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>Calculate Savings</button>
        </div>
    </div>
  )
}

export default Bill