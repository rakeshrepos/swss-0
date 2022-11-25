import React from 'react'

function Card({title,heading,subheading}) {
  return (
    <div>
        {(() => {
            if (title!=="") {
              return (
                 <div className='mr[-10rem] rounded-lg w-[12rem] border'>
                    <div className='bg-[#ff9900d9] flex justify-center items-center py-[0.5rem] rounded-t-[0.3rem] h-[42px]'>
                        <p className='text-[0.75rem] font-[700]'>{title}</p>
                    </div>
                    <div className='bg-white w-full flex flex-col justify-center items-center rounded-b-[0.3rem]'>
                        <p className='text-[2.5rem] font-[700] p-[0.5rem]'>{heading}</p>
                        <p className='text-[0.85rem] text-gray-500 mb-2'>{subheading}</p>
                    </div>
                </div>
              )
            }
          })()}
    </div>
  )
}

export default Card