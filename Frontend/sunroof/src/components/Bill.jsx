import React, { useState } from 'react'
import ChatBubble from './ChatBubble'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import './Slider.css'

  
function Bill({bill,setBill,step,setStep}) {
    const [sliderPosition,setSliderPosition] = useState(0);

    const storeBill = (billValue)=>{
        var position = (billValue-30)/12;
        setSliderPosition(position+'%')
        setBill(billValue)
    }

    let positionStyle = {
        left: `${sliderPosition}`
      };
  return (
    <div className='w-screen h-screen lg:w-[50rem] px-[1rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            <div className='w-1/3 flex justify-end'>
                <p className='text-[1rem] text-gray-500'>(Step 1 of 3)</p>
            </div>
            <div className='h-[15px] w-full bg-gray-200 rounded-lg'>
                <div className='w-1/3 bg-[#ff9900d9] rounded-lg h-[15px]'></div>
            </div>
        </div>

        <ChatBubble message="What is your average electric bill payment?" />
        <div className="mt-5 relative">
            <div className="absolute w-[7rem] border ml-full" style={positionStyle}>
                <p className='text-center text-sm font-semibold bg-[#ff9900d9]'>My electirc bill</p>
                <p className='text-center font-semibold py-2'>${bill} / month</p>
            </div>
            <input type="range" name="bill" min="30" max="1000" step="5" onChange={(e)=>{storeBill(e.target.value)}} 
                className="mt-[6rem] h-[1rem]"/>
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

export default Bill