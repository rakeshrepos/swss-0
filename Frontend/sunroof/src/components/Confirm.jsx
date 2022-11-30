import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
function Confirm({step,setStep}) {
  return (
    <div className='w-[50rem] px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            
        </div>

        <div>
            <div className='w-full text-2xl flex justify-center'>
                <p className="text-center text-3xl flex justify-center">Please confirm the meeting time & your information.</p>
            </div>
            <p>Saturday, December 3, 2022, 2:00 PM, US/Alaska</p>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">First</p>
                <input type="text" name="" id="" className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Last Name</p>
                <input type="text" name="" id="" className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Mobile phone number</p>
                <input type="text" name="" id="" className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Email</p>
                <input type="text" name="" id="" className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Adress</p>
                <input type="text" name="" id="" className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Apartment/Unit Number</p>
                <input type="text" name="" id="" className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">City</p>
                <input type="text" name="" id="" className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">State</p>
                <input type="text" name="" id="" className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Zipcode</p>
                <input type="text" name="" id="" className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
        </div>
        <div className="flex mt-5 gap-2">
            <button onClick={()=>{setStep(step-1)}} className='border-[1px] border-[#03a9f4] h-[3rem] w-[4rem] flex justify-center items-center'>
            <ChevronLeftIcon className='text-[#03a9f4] h-6 w-6'/>
            </button>
            <button onClick={()=>{setStep(step+1)}} className='bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>Calculate Savings</button>
        </div>
    </div>
  )
}

export default Confirm