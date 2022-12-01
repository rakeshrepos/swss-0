import React from 'react'
import ChatBubble from './ChatBubble'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

function Messages({step,setStep}) {
  // setInterval(function(){setStep(step+1)},3000);
  // setStep(step+1)
  return (
    <div className='w-screen lg:w-[50rem] px-[1rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            <div className='w-2/3 flex justify-end'>
                <p className='text-[1rem] text-gray-500'>(Step 2 of 3)</p>
            </div>
            <div className='h-[15px] w-full bg-gray-200 rounded-lg'>
                <div className='w-2/3 bg-[#ff9900] rounded-lg h-[15px]'></div>
            </div>
        </div>

        <ChatBubble message="Hang on. I am calculating your savings..."/>
        <ChatBubble message="Sizing your solar system based on your bill.."/>
        <ChatBubble message="Checking on energy prices..."/>

        <div className="flex mt-5 gap-2">
            <button onClick={()=>{setStep(step-1)}} className='border-[1px] border-[#03a9f4] h-[3rem] w-[4rem] flex justify-center items-center'>
                <ChevronLeftIcon className='text-[#03a9f4] h-6 w-6'/>
            </button>
            <button onClick={()=>{setStep(step+1)}} className='bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>Calculate Savings</button>
        </div>
    </div>
  )
}

export default Messages