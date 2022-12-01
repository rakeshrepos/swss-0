import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';
function Result({step,setStep}) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true
        };
    const [stage, setStage] = useState('TYPING');
    useEffect(() => {
        setStage("TYPING");
        setTimeout(() => {
        setStage("DONE");
        }, 1000);
    },[step]);
  return (
    <div className='w-screen lg:w-[50rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            <div className='w-2/3 flex justify-end'>
                <p className='text-[1rem] text-gray-500'>(Step 2 of 3)</p>
            </div>
            <div className='h-[15px] w-full bg-gray-200 rounded-lg'>
                <div className='w-2/3 bg-[#ff9900d9] rounded-lg h-[15px]'></div>
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
                <p className='text-[1.8rem] text-[#3a3a3a] mb-4'>Check out these savings!</p>
                <Slider {...settings}>
                <Card title="Approximate Lifetime Savings" heading="$325,281" subheading="Over 25 years"/>
                <Card title="Increase in Home Value" heading="4.1%" subheading="According to Zillow"/>
                <Card title="Environmental Impact" heading="260" subheading="Trees grown in 10 years"/>
                <Card title="Recommended System" heading="5-7 kW" subheading="(14-20 panels)"/>
                <Card title="" heading="" subheading=""/>
                </Slider>
            </div>
        </div>
        )}
        {/* <div className='flex items-end gap-2 mt-5'>
            <img src={AVATAR} alt="" className='h-10 w-10 rounded-full'/>
            <div className='bg-gray-200 p-4 rounded-t-[1rem] rounded-br-[1rem] w-[35rem]'>
                <p className='text-[1.8rem] text-[#3a3a3a] mb-4'>Check out these savings!</p>
                <Slider {...settings}>
                <Card title="Approximate Lifetime Savings" heading="$325,281" subheading="Over 25 years"/>
                <Card title="Increase in Home Value" heading="4.1%" subheading="According to Zillow"/>
                <Card title="Environmental Impact" heading="260" subheading="Trees grown in 10 years"/>
                <Card title="Recommended System" heading="5-7 kW" subheading="(14-20 panels)"/>
                <Card title="" heading="" subheading=""/>
                </Slider>
            </div>
        </div> */}

        <ChatBubble message="Ready to see ballpark pricing?" />
        <div className="flex mt-5 gap-2">
            <button onClick={()=>{setStep(step-1)}} className='border-[1px] border-[#03a9f4] h-[3rem] w-[4rem] flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#03a9f4]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button onClick={()=>{setStep(step+1)}} className='bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>I'M READY</button>
        </div>
    </div>
  )
}

export default Result