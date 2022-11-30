import React, { useEffect, useState } from 'react'
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
import TypingIndicator from './TypingIndicator';
function Question4({credictScore,setCreditScore,step,setStep}) {
    const [stage, setStage] = useState('TYPING');
    useEffect(() => {
        setStage("TYPING");
        setTimeout(() => {
        setStage("DONE");
        }, 1000);
    }, [credictScore]);
    const storeCreditStore = (credictScoreValue)=>{
        setCreditScore(credictScoreValue)
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
                <p>QUESTION 4 OF 5</p>
                <p className='text-[1.6rem] text-[#3a3a3a] mb-4'>How's your credit score?</p>
                <button onClick={()=>{storeCreditStore('700+')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    700+
                </button>
                <button onClick={()=>{storeCreditStore('650-699')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    650-699
                </button>
                <button onClick={()=>{storeCreditStore('620-649')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    620-649
                </button>
                <button onClick={()=>{storeCreditStore('501-619')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    501-619
                </button>
                <button onClick={()=>{storeCreditStore('<500')}} className="mb-3 flex justify-center items-center h-full w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mt-[2px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    500
                </button>
                <button onClick={()=>{storeCreditStore('I AM INTERESTED IN PAYING CASH')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    I AM INTERESTED IN PAYING CASH
                </button>
            </div>
        </div>
        )}
        {/* <div className='flex items-end gap-2 mt-5'>
            <img src={AVATAR} alt="" className='h-10 w-10 rounded-full'/>
            <div className='bg-gray-200 p-4 rounded-t-[1rem] rounded-br-[1rem] w-[35rem]'>
                <p>QUESTION 4 OF 5</p>
                <p className='text-[1.6rem] text-[#3a3a3a] mb-4'>How's your credit score?</p>
                <button onClick={()=>{storeCreditStore('700+')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    700+
                </button>
                <button onClick={()=>{storeCreditStore('650-699')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    650-699
                </button>
                <button onClick={()=>{storeCreditStore('620-649')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    620-649
                </button>
                <button onClick={()=>{storeCreditStore('501-619')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    501-619
                </button>
                <button onClick={()=>{storeCreditStore('<500')}} className="mb-3 flex justify-center items-center h-full w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mt-[2px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    500
                </button>
                <button onClick={()=>{storeCreditStore('I AM INTERESTED IN PAYING CASH')}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-semibold text-xl">
                    I AM INTERESTED IN PAYING CASH
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

export default Question4