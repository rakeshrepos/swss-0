import React from 'react'
import ChatBubble from './ChatBubble'


function Messages() {
  return (
    <div className='w-[50rem] px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            <div className='w-2/3 flex justify-end'>
                <p className='text-[1rem] text-gray-500'>(Step 2 of 3)</p>
            </div>
            <div className='h-[15px] w-full bg-gray-200 rounded-lg'>
                <div className='w-2/3 bg-[#ff9900] rounded-lg h-[15px]'></div>
            </div>
        </div>

        <ChatBubble message="Hang on. I am calculating your savings..."/>
        <ChatBubble message="Sizing your solar system based on your bill.."/>
        <ChatBubble message="Checking on energy prices..."/>
    </div>
  )
}

export default Messages