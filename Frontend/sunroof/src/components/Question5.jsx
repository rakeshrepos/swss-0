import React, { useEffect, useState } from 'react'
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
import TypingIndicator from './TypingIndicator';
function Question5({duration,setDuration,step,setStep}) {
    const [stage, setStage] = useState('TYPING');
    useEffect(() => {
        setStage("TYPING");
        setTimeout(() => {
        setStage("DONE");
        }, 1000);
    }, [duration]);
    const storeDuration = (durationValue)=>{
        setDuration(durationValue)
        setStep(step+1)
    }
  return (
    <div className='w-[50rem] px-[6rem] py-[3rem]'>
    <div className='space-y-3'>
        
    </div>
    {stage === 'TYPING' ? (
          <div className="p-chat__typing-balls-bubble">
            <div className='flex items-end gap-2 mt-5'>
              <img src={AVATAR} alt="" className='h-10 w-10 rounded-full'/>
              <TypingIndicator />
            </div>
          </div>
        ) : (
            <div className='flex items-end gap-2 mt-5'>
            <img src={AVATAR} alt="" className='h-10 w-10 rounded-full'/>
            <div className='bg-gray-200 p-4 rounded-t-[1rem] rounded-br-[1rem] w-[35rem]'>
                <p>QUESTION 5 OF 5</p>
                <p className='text-[1.6rem] text-[#3a3a3a] mb-4'>When would you like the work completed?</p>
                <button onClick={()=>storeDuration('ASAP')} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    ASAP
                </button>
                <button onClick={()=>storeDuration('NEXT 6 MONTHS')} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    NEXT 6 MONTHS
                </button>
                <button onClick={()=>storeDuration('STILL RESEARCHING')} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    STILL RESEARCHING
                </button>
            </div>
        </div>
        )}
    {/* <div className='flex items-end gap-2 mt-5'>
        <img src={AVATAR} alt="" className='h-10 w-10 rounded-full'/>
        <div className='bg-gray-200 p-4 rounded-t-[1rem] rounded-br-[1rem] w-[35rem]'>
            <p>QUESTION 5 OF 5</p>
            <p className='text-[1.6rem] text-[#3a3a3a] mb-4'>When would you like the work completed?</p>
            <button onClick={()=>storeDuration('ASAP')} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                ASAP
            </button>
            <button onClick={()=>storeDuration('NEXT 6 MONTHS')} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                NEXT 6 MONTHS
            </button>
            <button onClick={()=>storeDuration('STILL RESEARCHING')} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                STILL RESEARCHING
            </button>
        </div>
    </div> */}
    <div className="flex justify-start mt-5 w-full">
            <button onClick={()=>{setStep(step-1)}} className='flex justify-center items-center text-xl font-bold h-[3rem] text-[#03a9f4]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <p>BACK</p>
            </button>
        </div>
</div>
  )
}

export default Question5