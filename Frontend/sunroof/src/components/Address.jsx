import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import BG from '../assests/map-mobile.webp'
import AVATAR from '../assests/shutterstock_1733849612_5_SotxDZS.jpg'


function Address({setUserId,setCity,setState,address,setZipCode,setAddress,step,setStep}) {

    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const center = { lat: 50.064192, lng: -130.605469 };
    const defaultBounds = {
        north: center.lat + 0.1,
        south: center.lat - 0.1,
        east: center.lng + 0.1,
        west: center.lng - 0.1,
      };
    const options = {
        bounds: defaultBounds,
        componentRestrictions: { country: "us"},
        fields: ["address_components", "geometry", "name"],
        types: ["geocode"]
       };
    
    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );
        
        autoCompleteRef.current.addListener("place_changed", async function () {
            setAddress(inputRef.current.value)
            const place = await autoCompleteRef.current.getPlace();

            setCity(place.address_components.filter(f => JSON.stringify(f.types) === JSON.stringify(['locality', 'political']))[0].long_name)
            setState(place.address_components.filter(f => JSON.stringify(f.types) === JSON.stringify(['administrative_area_level_1', 'political']))[0].long_name)
            setZipCode(place.address_components.filter(f => JSON.stringify(f.types) === JSON.stringify(['postal_code']))[0].long_name)

           });
    }, []);

    const storeAddress = ()=>{
        if(!inputRef.current.value){
            console.log('Input Feild Required')
        }else{
            setAddress(inputRef.current.value)
            try{
                axios.post('http://localhost:8000/api/store-address', {address:inputRef.current.value})
                    .then(response =>{setUserId(response.data)} );
                setStep(step+1)
            }catch(e){
                console.log(e)
            }
        }
    }
  return (
    <div className='w-screen h-screen lg:h-[30rem] lg:w-[40rem]'>
        <div className="h-[12rem] relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage:`url(${BG})` }}>
            <div className="w-full flex justify-center">
                <img src={AVATAR} alt="" className='absolute bottom-[-2rem] h-[7rem] w-[7rem] rounded-full border-[5px] border-orange-400'/>
            </div>
        </div>
        <div className="px-3 py-[2rem]">
            <div className="w-full flex justify-center">
                <p className='flex justify-center w-[35rem] text-center text-[1.8rem] leading-[1.75rem] text-[#3a3a3a]'>Hey! I'm Sarah. I'll get you a custom solar estimate in seconds using satellites!</p>
            </div>

            <div className='w-full flex justify-center px-[2rem] mt-5'>
                <label htmlFor="address" className="relative">
                    <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} ref={inputRef} placeholder="123 Sunshine Way" className='border-[1px] border-black p-2 w-[20rem] focus:border-2 focus:outline-none border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200'/>
                </label>
            </div>
            <div className="w-full flex justify-center px-[2rem] mt-5">
                <button onClick={()=>{storeAddress()}} className='text-white bg-[#03a9f4] w-[20rem] font-semibold py-2'>START ESTIMATE</button>
            </div>
        </div>
    </div>
  )
}

export default Address