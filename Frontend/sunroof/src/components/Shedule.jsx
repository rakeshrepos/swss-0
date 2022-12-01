import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Shedule({startDate,setStartDate,step,setStep}) {
  return (
    <div className='w-screen lg:w-[50rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            
        </div>

        <div className='flex items-end gap-2 mt-5'>
           <div className="w-full flex flex-col items-center">
                <p class="text-3xl">What day works best?</p>
                <p>Pick a day to review your personalized quote over the phone.</p>
                <DatePicker selected={startDate}   onChange={(date) => setStartDate(date)} inline />
           </div>
        </div>
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

export default Shedule