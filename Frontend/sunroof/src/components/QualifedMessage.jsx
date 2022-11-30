import React from 'react'
import ChatBubble from './ChatBubble'

function QualifedMessage({step,setStep}) {
  return (
    <div className='w-[50rem] px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            <div className='w-2/3 flex justify-end'>
                <p className='text-[1rem] text-gray-500'>(Step 2 of 3)</p>
            </div>
            <div className='h-[15px] w-full bg-gray-200 rounded-lg'>
                <div className='w-2/3 bg-[#ff9900] rounded-lg h-[15px]'></div>
            </div>
        </div>

        <ChatBubble message="Congratulations! You qualify!"/>
        <ChatBubble message="Book a time to review your quote with a solar expert from our team over the phone."/>
        <button onClick={()=>{setStep(step+1)}} className="w-full flex justify-center items-center gap-1 text-xl font-bold mt-2 p-2 text-white bg-[#03a9f4]">
            SHEDULE NOW
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

        </button>
    </div>
  )
}

export default QualifedMessage