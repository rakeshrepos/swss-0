import React, { useRef, useState } from 'react'
import { ArrowUpOnSquareIcon, ChevronLeftIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
function BillUpload({userId,step,setStep}) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthIndex = (new Date().getMonth());
    const firstMonth = monthNames[monthIndex-1].toUpperCase();
    const secondMonth = monthNames[monthIndex-2].toUpperCase();
    const thirdMonth = monthNames[monthIndex-3].toUpperCase();
    const fourtMonth = monthNames[monthIndex-4].toUpperCase();

    const [firstFile,setFirstFile] = useState(null);
    const [secondFile,setSecondFile] = useState(null);
    const [thirdFile,setThirdFile] = useState(null)
    const [fourthFile,setFourthFile] = useState(null);

    const firstFileReference= useRef(null);
    const secondFileReference= useRef(null);
    const thirdFileReference= useRef(null);
    const fourthFileReference= useRef(null);

    const firstFileChange= (e) => {
        setFirstFile(e.target.files[0])
    };

    const secondFileChange = (e) => {
        setSecondFile(e.target.files[0])
    };

    const thirdFileChange = (e) => {
        setThirdFile(e.target.files[0])
    };

    const fourthFileChange = (e) => {
        setFourthFile(e.target.files[0])
    };
    
    const clickElement = (ref) => {
        ref.current.dispatchEvent(
          new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
            buttons: 1,
          }),
        );
      };

      const fileUpload = () => {
     
        const formData = new FormData();
        formData.append('user_id',userId);
        if(firstFile!=null){
            formData.append("first_file",firstFile,firstFile.name);
        }
        if(secondFile!=null){
            formData.append("second_file",secondFile, secondFile.name);
        }
        if(thirdFile!=null){
            formData.append("third_file",thirdFile,thirdFile.name);
        }
        if(fourthFile!=null){
            formData.append("fourth_file",fourthFile,fourthFile.name);
        }
    
        axios.post("http://localhost:8000/api/upload-bills", formData)
            .then(response =>{
                console.log(response)
                setStep(step+1)
            } );;

      };

  return (
    <div className='w-screen lg:w-[50rem] px-[1rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
        
        </div>

        <div className="w-full flex-col items-center">
            <p className='text-center text-3xl mb-2'>Please upload a copy of your last electric bill</p>
            <p className='text-center'>If your bill does not show more than one month's usage, please upload at least two bills.</p>
        </div>

        <button  onClick={() => clickElement(firstFileReference)} className="w-full border-[1px] border-[#03a9f4] flex items-center px-5 py-2 ">
            <ArrowUpOnSquareIcon className='h-6 w-6' />
            <p className='w-full text-2xl font-semibold text-[#03a9f4]'>{firstMonth} BILL</p>
        </button>

        <input type="file" name="" id="" onChange={(e)=>{firstFileChange(e)}} ref={firstFileReference} className="hidden"/>

        <button onClick={() => clickElement(secondFileReference)} className="w-full mt-4 border-[1px] border-[#03a9f4] flex items-center px-5 py-2 ">
            <ArrowUpOnSquareIcon className='h-6 w-6' />
            <p className='w-full text-2xl font-semibold text-[#03a9f4]'>{secondMonth} BILL</p>
        </button>

        <input type="file" name="" id="" onChange={(e)=>{secondFileChange(e)}} ref={secondFileReference} className="hidden"/>

        <button onClick={() => clickElement(thirdFileReference)} className="w-full mt-4 border-[1px] border-[#03a9f4] flex items-center px-5 py-2 ">
            <ArrowUpOnSquareIcon className='h-6 w-6' />
            <p className='w-full text-2xl font-semibold text-[#03a9f4]'>{thirdMonth} BILL</p>
        </button>

        <input type="file" name="" id="" onChange={(e)=>{thirdFileChange(e)}} ref={thirdFileReference} className="hidden"/>

        <button onClick={() => clickElement(fourthFileReference)} className="w-full mt-4 border-[1px] border-[#03a9f4] flex items-center px-5 py-2 ">
            <ArrowUpOnSquareIcon className='h-6 w-6' />
            <p className='w-full text-2xl font-semibold text-[#03a9f4]'>{fourtMonth} BILL</p>
        </button>

        <input type="file" name="" id="" onChange={(e)=>{fourthFileChange(e)}} ref={fourthFileReference} className="hidden"/>

        <div className="flex mt-5 gap-2">
            <button onClick={()=>{setStep(step-1)}} className='border-[1px] border-[#03a9f4] h-[3rem] w-[4rem] flex justify-center items-center'>
                <ChevronLeftIcon className='text-[#03a9f4] h-6 w-6'/>
            </button>
            <button onClick={()=>{fileUpload()}} className='flex justify-center items-center gap-2 bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>
                <p> UPLOAD</p>
                <ArrowUpTrayIcon className='text-white h-4 w-4' />
            </button>
        </div>
    </div>
  )
}

export default BillUpload