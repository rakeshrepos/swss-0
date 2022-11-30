import React, { useEffect, useState } from 'react'
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
import TypingIndicator from './TypingIndicator';
function Question1({address,setAddress,appartment,setAppartment,step,setStep}) {
    const [stage, setStage] = useState('TYPING');
    useEffect(() => {
      setStage("TYPING");
      setTimeout(() => {
        setStage("DONE");
      }, 1000);
    }, [address]);
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
                <p>QUESTION 1 OF 5</p>
                <p className='text-[1.6rem] text-[#3a3a3a] mb-4'>Confirm property location.</p>
               <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Address</p>
                <input type="text" name="" id="" value={address} onChange={(e)=>{setAddress(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
               <div className="relative mt-2">
               <p className=" text-sm mt-[-7px]">Apartment/Unit number</p>
                <input type="text" name="" id="" value={appartment} onChange={(e)=>{setAppartment(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
            </div>
        </div>
        )}
        {/* <div className='flex items-end gap-2 mt-5'>
            <img src={AVATAR} alt="" className='h-10 w-10 rounded-full'/>
            <div className='bg-gray-200 p-4 rounded-t-[1rem] rounded-br-[1rem] w-[35rem]'>
                <p>QUESTION 1 OF 5</p>
                <p className='text-[1.6rem] text-[#3a3a3a] mb-4'>Confirm property location.</p>
               <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Address</p>
                <input type="text" name="" id="" value={address} onChange={(e)=>{setAddress(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
               <div className="relative mt-2">
               <p className=" text-sm mt-[-7px]">Apartment/Unit number</p>
                <input type="text" name="" id="" value={appartment} onChange={(e)=>{setAppartment(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
            </div>
        </div> */}
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

export default Question1