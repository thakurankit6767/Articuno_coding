import React, {useEffect } from 'react';
import {GrFormDown} from 'react-icons/gr'

export const Form = ({userData,setUserData}) => {  
    useEffect(() => {      
        localStorage.setItem("user",JSON.stringify(userData))    
    }, [userData])
    
    const loginHandler = ()=>{
        setUserData(()=>({
            name:'user',
            email:'user@gmail.com',
            password:'user@123'
        }))
    }
  return (
    <section className=''>
        <div className='flex gap-4 m-4 p-2'>
            <button onClick={loginHandler} className='py-2 px-6 rounded-full bg-green-500 text-white'>
                LOG IN
            </button>
            <button className='py-2 px-6 rounded-full border border-green-500'>SIGN UP</button>
        </div>
        <p className='text-left text-lg text-gray-800 m-6'>Shipping Information</p>
        <form className='flex flex-col gap-4 m-4 p-1'>
            <div className='flex gap-8'>
                <input type={'text'} placeholder='Email' className='text-gray-300 py-2 px-4 border-2 rounded-full'/>
                <input type={'text'} placeholder='Address' className='text-gray-300 py-2 px-4 border-2 rounded-full'/>
            </div> 
            <div className='flex gap-8'>
                <input type={'text'} placeholder='First name' className='text-gray-300 py-2 px-4 border-2 rounded-full'/>
                <input type={'text'} placeholder='City' className='text-gray-300 py-2 px-4 border-2 rounded-full'/>
            </div> 
            <div className='flex gap-8'>
                <input type={'text'} placeholder='Last name' className='text-gray-300 py-2 px-4 border-2 rounded-full'/>
                <input type={'text'} placeholder='Postal code / ZIP' className='text-gray-300 py-2 px-4 border-2 rounded-full'/>
            </div> 
            <div className='flex gap-8'>
                <input type={'tel'} placeholder='Phone no' className='text-gray-300 py-2 px-4 border-2 rounded-full'/>
                <button class="w-full text-gray-400  py-2 px-4   border-2 rounded-full flex justify-between items-center">
                <span class="mr-1">Poland</span>
                <GrFormDown/>
                </button>
            </div> 
        </form>
    </section>
  )
}
