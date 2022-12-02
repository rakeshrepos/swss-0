import axios from 'axios';
import React, { useState } from 'react'

function SheduleTime({userId,region,setRegion,time,setTime,step,setStep}) {
    const [addrtype, setAddrtype] = useState(["Pacific Time", "Mountain Time","Mountain Time","Eastern Time","Hawaii-Aleutian Time Zone","Alaska Time Zone"])
    const Add = addrtype.map(Add => Add)

    const handleAddrTypeChange = (e) => { 
        console.log((addrtype[e.target.value])); 
        setRegion(addrtype[e.target.value]) 
    }

    const storeTime = (timeValue)=>{
        setTime(timeValue)
        try{
            axios.post('http://localhost:8000/api/store-time', {user_id:userId,region:region,time:timeValue})
                .then(response =>{console.log(response.data)} );
        }catch(e){
            console.log(e)
        }
  
        setStep(step+1)
    }
  return (
    <div className='w-screen lg:w-[50rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            
        </div>

        <div className='flex items-end gap-2 mt-5'>
           <div className="w-full flex flex-col items-center">
                <p class="text-3xl">And what time?</p>
                <div>
                    <select
                        onChange={e => handleAddrTypeChange(e)}>
                    {
                        Add.map((address, key) => <option key={key} value={key}>{address} </option>)
                    }
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