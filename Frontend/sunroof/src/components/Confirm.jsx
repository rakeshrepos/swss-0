import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
function Confirm({userId,name,setName,number,setNumber,email,setEmail,address,setAddress,appartment,setAppartment,city,setCity,state,setState,zipcode,setZipCode,date,region,time,step,setStep}) {

    const confirm = ()=>{
        try{
            axios.post('http://localhost:8000/api/confirm', {user_id:userId,name:name,number:number,email:email,address:address,appartment:appartment})
                .then(response =>{console.log(response)} );
        }catch(e){
            console.log(e)
        }

        setStep(step+1)
    }
  return (
    <div className='w-screen lg:w-[50rem] px-[1rem] lg:px-[6rem] py-[3rem]'>
        <div className='space-y-3'>
            
        </div>

        <div>
            <div className='w-full text-2xl flex justify-center'>
                <p className="text-center text-3xl flex justify-center">Please confirm the meeting time & your information.</p>
            </div>
            {/* <p>{date} {time}, {region}</p> */}
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Name</p>
                <input type="text" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Mobile phone number</p>
                <input type="text" name="" id="" value={number} onChange={(e)=>{setNumber(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Email</p>
                <input type="text" name="" id="" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Address</p>
                <input type="text" name="" id="" value={address} onChange={(e)=>{setAddress(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Appartment/Unit Number</p>
                <input type="text" name="" id="" value={appartment} onChange={(e)=>{setAppartment(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">City</p>
                <input type="text" name="" id="" value={city} onChange={(e)=>{setCity(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">State</p>
                <input type="text" name="" id="" value={state} onChange={(e)=>{setState(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
            <div className="relative mt-2">
                <p className=" text-sm mt-[-7px]">Zipcode</p>
                <input type="text" name="" id="" value={zipcode} onChange={(e)=>{setZipCode(e.target.value)}} className='w-full py-[10px] px-[14px] border-[1px] border-black'/>
            </div>
        </div>
        <div className="flex mt-5 gap-2">
            <button onClick={()=>{setStep(step-1)}} className='border-[1px] border-[#03a9f4] h-[3rem] w-[4rem] flex justify-center items-center'>
            <ChevronLeftIcon className='text-[#03a9f4] h-6 w-6'/>
            </button>
            <button onClick={()=>{confirm()}} className='bg-[#03a9f4] w-full text-white text-xl font-bold h-[3rem]'>CONFIRM</button>
        </div>
    </div>
  )
}

export default Confirm