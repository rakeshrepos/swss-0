import React from 'react'

function SheduleTime({time,setTime,step,setStep}) {

    const storeTime = (timeValue)=>{
        // setTime(timeValue)
        setStep(step+1)
    }
  return (
    <div className='w-[50rem] px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            
        </div>

        <div className='flex items-end gap-2 mt-5'>
           <div className="w-full flex flex-col items-center">
                <p class="text-3xl">And what time?</p>
                <div>
                    <select name="" id="">
                        <option value="Pacific Time - Us & Canada - (9:47 pm)">Pacific Time - Us & Canada - (9:47 pm)</option>
                        <option value="Mountain Time - US & Canada - (10:49 pm)">Mountain Time - US & Canada - (10:49 pm)</option>
                        <option value="Central Time - US & Canada - (11:50 pm)">Central Time - US & Canada - (11:50 pm)</option>
                        <option value="Eastern Time - US & Canada - (12:51 pm)">Eastern Time - US & Canada - (12:51 pm)</option>
                        <option value="Hawaii-Aleutian Time Zone - (7:51 pm)">Hawaii-Aleutian Time Zone - (7:51 pm)</option>
                        <option value="Alaska Time Zone - (8:53 pm)">Alaska Time Zone - (8:53 pm)</option>
                    </select>
                </div>
                <div className='mt-2'>
                    <button onClick={()=>{storeTime("2:00 PM")}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-bold text-2xl">
                        2:00 PM
                    </button>
                    <button onClick={()=>{storeTime("2:30 PM")}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-bold text-2xl">
                        2:30 PM
                    </button>
                    <button onClick={()=>{storeTime("3:00 PM")}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-bold text-2xl">
                        3:00 PM
                    </button>
                    <button onClick={()=>{storeTime("3:30 PM")}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-bold text-2xl">
                        3:30 PM
                    </button>
                    <button onClick={()=>{storeTime("4:00 PM")}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-bold text-2xl">
                        4:00 PM
                    </button>
                    <button onClick={()=>{storeTime("4:30 PM")}} className="mb-3 w-full border-[1px] border-[#03a9f4] text-[#03a9f4] p-2 bg-white font-bold text-2xl">
                        4:30 PM
                    </button>
                </div>
           </div>
        </div>
        <div className="grid grid-cols-1 mt-5 ">
            <button onClick={()=>{setStep(step-1)}} className='flex justify-center items-center bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
                <p>BACK</p>

            </button>
        </div>
    </div>
  )
}

export default SheduleTime