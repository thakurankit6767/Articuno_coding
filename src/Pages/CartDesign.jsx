import React from 'react'

import { CartDetails } from '../Components/CartDetails'
import { Form } from '../Components/Form'
import { Payment } from '../Components/Payment';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RiTruckLine,RiArrowLeftLine} from 'react-icons/ri'

export const CartDesign = ({userData,setUserData}) => {

  const handlePay = (e) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_kf0EPqTIKWvHNS",
      key_secret: "N6ox4VXfAFsT3bNfqW4baTRz",
      amount:  20000.00,
      currency: "INR",
      name: "Articuno Coding LLP",
      description: " WE offer high end solutions for your business",
      handler: function (response) {
          alert(response.razorpay_payment_id);
        //Toast({ type: "success", msg: "Payment Successful🎉" });
     
      },
      prefill: {
        name: "demo user",
        email: "demo@gmail.com",
        contact: "9876543210",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: '#7ad0a7',
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };


  return (
    <section>
      <div className='flex justify-between px-6 pb-8 pt-10'>
        <p className='text-lg'>Shipping and Payment</p>
        <div className='flex gap-4 items-center'>
          <span className='border-2 border-green-500 rounded-full p-1.5'>
            <AiOutlineShoppingCart size={'1.2rem'} className='m-auto'/> 
          </span> 
           <div className='text-gray-800  w-[80px] h-[2px] bg-gray-200'></div> 
          <span className='border-2 border-green-500 bg-green-500 text-white rounded-full p-1.5'>
            <RiTruckLine size={'1.2rem'}/> </span>
        </div>
      </div>
      <div className='flex p-2 gap-4'>
        <Form userData={userData} setUserData={setUserData}/>
        <Payment/>
        <CartDetails/>
      </div>
      <div className='flex justify-between px-6 pb-8 pt-10'>
        <button className='flex gap-4 items-center text-gray-700'>
          <RiArrowLeftLine size={'1.2rem'} /><span> Back</span>
        </button>
        <div className='flex gap-4 m-4 p-2'>
          <button className='py-2 px-6 rounded-full border border-gray-600'>CONTINUE SHOPPING</button>
          <button onClick={ handlePay} className='py-2 px-6 rounded-full bg-green-500 text-white' >PROCEED TO PAYMENT</button>           
        </div>
      </div>
    </section>
  )
}
