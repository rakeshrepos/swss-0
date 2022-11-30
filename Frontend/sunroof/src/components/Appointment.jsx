import React from 'react'
import { CameraIcon } from '@heroicons/react/24/outline'
function Appointment({step,setStep}) {
  return (
    <div className='w-[50rem] px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            
        </div>

        <div className="w-full flex-col items-center">
            <p className='text-center text-3xl mb-2'>Appointment Confirmed</p>
            <p className='text-center text-xl mb-3'>Now the Last Step!</p>
            <p className='text-center'>To accurately size your custom solar panel system, we will need copies of your last electric bills.</p>
        </div>
        <button onClick={()=>{setStep(step+1)}} className="w-full bg-[#03a9f4] flex items-center px-5 py-2 ">
            <CameraIcon className='h-6 w-6 text-white' />
            <p className='w-full text-white text-2xl font-semibold'>UPLOAD YOUR BILLS</p>
        </button>
    </div>
  )
}

export default Appointment