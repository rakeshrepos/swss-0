import React from 'react'
import ChatBubble from './ChatBubble'
// import Button from '@material-ui/core'
function Qualified({step,setStep}) {

  return (
    <div className='w-screen lg:w-[50rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            {/* progress  */}
        </div>

        <ChatBubble message="I just have a few quick questions to help us expedite your quote! This should take 60 seconds or less."/>
        <div className="grid grid-cols-2 mt-5 ">
            <button onClick={()=>{setStep(step-1)}} className='w-full flex justify-center items-center text-xl font-bold h-[3rem] text-[#03a9f4]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <p>BACK</p>
            </button>
            <button onClick={()=>{setStep(step+1)}} className='flex justify-center items-center bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>
                <p>NEXT</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>

            </button>
        </div>
    </div>
  )
}

export default Qualified