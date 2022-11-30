import React, { useEffect, useState } from 'react'
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'
import TypingIndicator from './TypingIndicator';

function ChatBubble({message}) {
  const [stage, setStage] = useState('TYPING');
  useEffect(() => {
    setStage("TYPING");
    setTimeout(() => {
      setStage("DONE");
    }, 1000);
  }, [message]);
  return (
    <div>
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
            <div className='bg-gray-200 p-2 rounded-t-[1rem] rounded-br-[1rem]'>
              <p className='text-[1.8rem] text-[#3a3a3a]'>{message}</p>
            </div>
          </div>
        )}
    </div>
    // <div className='flex items-end gap-2 mt-5'>
    //     <img src={AVATAR} alt="" className='h-10 w-10 rounded-full'/>
    //     <div className='bg-gray-200 p-2 rounded-t-[1rem] rounded-br-[1rem]'>
    //         <p className='text-[1.8rem] text-[#3a3a3a]'>{message}</p>
    //     </div>
    // </div>
  )
}

export default ChatBubble
