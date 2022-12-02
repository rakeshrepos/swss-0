import React from 'react'
import CLIPART from '../assests/clip-art.png'
function FinalConfirmation() {
  return (
    <div className='w-screen lg:w-[50rem] px-[1rem] lg:px-[6rem] py-[3rem]'>
        <div className='w-full flex justify-center'>
            <img src={CLIPART} alt="" />
        </div>

        <div className="w-full flex-col items-center">
            <p className='text-center text-3xl mb-2'>Your Quote is being prepared</p>
            <p className='text-center'>Our engineers are hard at work designing a custom solar panel system to fit your roof. If we have any questions we Reach Out!</p>

            <p className="text-center mt-5">We look forward to speaking with you on</p>
            <p className='text-center font-bold'>Wednesday, December 7 at 3:30 PM</p>
        </div>

        <a href='https://resoluteb2b.com/swss/' className="w-full flex justify-center border-[1px] border-[#03a9f4] text-[#03a9f4] py-2 font-bold text-xl mt-5">BACK TO OUR HOMEPAGE</a>
    </div>
  )
}

export default FinalConfirmation