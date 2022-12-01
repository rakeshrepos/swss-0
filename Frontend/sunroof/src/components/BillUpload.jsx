import React from 'react'
import { ArrowUpOnSquareIcon, ChevronLeftIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'
function BillUpload({step,setStep}) {
  return (
    <div className='w-screen lg:w-[50rem] px-[1rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
        
        </div>

        <div className="w-full flex-col items-center">
            <p className='text-center text-3xl mb-2'>Please upload a copy of your last electric bill</p>
            <p className='text-center'>If your bill does not show more than one month's usage, please upload at least two bills.</p>
        </div>

        <button className="w-full border-[1px] border-[#03a9f4] flex items-center px-5 py-2 ">
            <ArrowUpOnSquareIcon className='h-6 w-6' />
            <p className='w-full text-2xl font-semibold text-[#03a9f4]'>OCTOBER BILL</p>
        </button>

        <button className="w-full mt-4 border-[1px] border-[#03a9f4] flex items-center px-5 py-2 ">
            <ArrowUpOnSquareIcon className='h-6 w-6' />
            <p className='w-full text-2xl font-semibold text-[#03a9f4]'>SEPTEMBER BILL</p>
        </button>

        <button className="w-full mt-4 border-[1px] border-[#03a9f4] flex items-center px-5 py-2 ">
            <ArrowUpOnSquareIcon className='h-6 w-6' />
            <p className='w-full text-2xl font-semibold text-[#03a9f4]'>AUGUST BILL</p>
        </button>

        <button className="w-full mt-4 border-[1px] border-[#03a9f4] flex items-center px-5 py-2 ">
            <ArrowUpOnSquareIcon className='h-6 w-6' />
            <p className='w-full text-2xl font-semibold text-[#03a9f4]'>JULY BILL</p>
        </button>
        <div className="flex mt-5 gap-2">
            <button onClick={()=>{setStep(step-1)}} className='border-[1px] border-[#03a9f4] h-[3rem] w-[4rem] flex justify-center items-center'>
                <ChevronLeftIcon className='text-[#03a9f4] h-6 w-6'/>
            </button>
            <button onClick={()=>{setStep(step+1)}} className='flex justify-center items-center gap-2 bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>
                <p> UPLOAD</p>
                <ArrowUpTrayIcon className='text-white h-4 w-4' />
            </button>
        </div>
    </div>
  )
}

export default BillUpload