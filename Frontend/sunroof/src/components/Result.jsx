import React from 'react'
import Slider from "react-slick";
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
function Result() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true
        // centerPadding: $('.slick').find('.single-slide-whatever-you-named-it').outerWidth() / 2
      };
  return (
    <div className='w-[50rem] px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            <div className='w-1/3 flex justify-end'>
                <p className='text-[1rem] text-gray-500'>(Step 1 of 3)</p>
            </div>
            <div className='h-[15px] w-full bg-gray-200 rounded-lg'>
                <div className='w-1/3 bg-[#ff9900d9] rounded-lg h-[15px]'></div>
            </div>
        </div>

        <div className='flex items-end gap-2 mt-5'>
            <img src={AVATAR} alt="" className='h-10 w-10 rounded-full'/>
            <div className='bg-gray-200 p-4 rounded-t-[1rem] rounded-br-[1rem] w-[35rem]'>
                <p className='text-[1.8rem] text-[#3a3a3a]'>Check out these savings!</p>
                <Slider {...settings}>
                <Card title="Approximate Lifetime Savings" heading="$325,281" subheading="Over 25 years"/>
                <Card title="Increase in Home Value" heading="4.1%" subheading="According to Zillow"/>
                <Card title="Environmental Impact" heading="260" subheading="Trees grown in 10 years"/>
                <Card title="Recommended System" heading="5-7 kW" subheading="(14-20 panels)"/>
                <Card title="" heading="" subheading=""/>
                </Slider>
            </div>
        </div>

    </div>
  )
}

export default Result