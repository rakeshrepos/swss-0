import React, { useEffect, useState } from 'react'
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import TypingIndicator from './TypingIndicator';
function Contact({name,setName,email,setEmail,number,setNumber,step,setStep}) {
    const [stage, setStage] = useState('TYPING');
    useEffect(() => {
      setStage("TYPING");
      setTimeout(() => {
        setStage("DONE");
      }, 1000);
    }, [name]);
  return (
    <div className='w-screen lg:w-[50rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            <div className='w-3/3 flex justify-end'>
                <p className='text-[1rem] text-gray-500'>(Step 3 of 3)</p>
            </div>
            <div className='h-[15px] w-full bg-gray-200 rounded-lg'>
                <div className='w-3/3 bg-[#ff9900d9] rounded-lg h-[15px]'></div>
            </div>
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
                <p className='text-[1.6rem] text-[#3a3a3a] mb-4'>Your online estimate is on the next page! Now unlock live pricing!</p>
               <div className="relative mt-2">
                    <p className=" text-sm mt-[-7px]">First and Last Name</p>
                    <input type="text" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
               <div className="relative mt-2">
                    <p className=" text-sm mt-[-7px]">Email</p>
                    <input type="text" name="" id="" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
               <div className="relative mt-2">
                    <p className=" text-sm mt-[-7px]">Mobile phone number</p>
                    <input type="text" name="" id="" value={number} onChange={(e)=>{setNumber(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
            </div>
        </div>
        )}
        {/* <div className='flex items-end gap-2 mt-5'>
            <img src={AVATAR} alt="" className='h-10 w-10 rounded-full'/>
            <div className='bg-gray-200 p-4 rounded-t-[1rem] rounded-br-[1rem] w-[35rem]'>
                <p className='text-[1.6rem] text-[#3a3a3a] mb-4'>Your online estimate is on the next page! Now unlock live pricing!</p>
               <div className="relative mt-2">
                    <p className=" text-sm mt-[-7px]">First and Last Name</p>
                    <input type="text" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
               <div className="relative mt-2">
                    <p className=" text-sm mt-[-7px]">Email</p>
                    <input type="text" name="" id="" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
               <div className="relative mt-2">
                    <p className=" text-sm mt-[-7px]">Mobile phone number</p>
                    <input type="text" name="" id="" value={number} onChange={(e)=>{setNumber(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
               </div>
            </div>
        </div> */}
        <div className="flex mt-5 gap-2">
            <button onClick={()=>{setStep(step-1)}} className='border-[1px] border-[#03a9f4] h-[3rem] w-[4rem] flex justify-center items-center'>
                <ChevronLeftIcon className='text-[#03a9f4] h-6 w-6'/>
            </button>
            <button onClick={()=>{setStep(step+1)}} className='bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>UNLOCK ESTIMATE</button>
        </div>
    </div>
  )
}

export default Contact