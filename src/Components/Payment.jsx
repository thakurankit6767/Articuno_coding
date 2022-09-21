import React from 'react';
import paypal from '../assets/paypal.svg';
import discover from '../assets/discover.svg'
import maestro from '../assets/maestro.svg'
import mastercard from '../assets/mastercard.svg'
import visa from '../assets/visa.svg'
import dpd from '../assets/dpd.svg'
import dhl from '../assets/dhl.svg';
import inpost from '../assets/inpost.svg';
import fedex from '../assets/fedex.svg';
import ideal from '../assets/ideal.svg';

export const Payment = () => {
  return (
    <section className=' p-4 '>
        <h1 className='text-left text-base mb-8'>Payment Method</h1>
        <div className='grid grid-cols-3 auto-cols-[20px] gap-4 mb-10'>
            <button className='py-1 px-6 rounded-full border border-green-300'>
                <img src={paypal} width={'38px'} className='m-auto' />
            </button>
            <button className='py-2 px-4 rounded-full border border-green-300'>
                <img src={visa} width={'28px'} className='m-auto'/>
            </button>
            <button className='py-2 px-4 rounded-full border border-green-300'>
                <img src={mastercard} width={'28px'} className='m-auto'/>
            </button>
            <button className='py-2 px-4 rounded-full border border-yellow-300'>
                <img src={maestro} width={'28px'} className='m-auto'/>
            </button>
            <button className='py-2 px-4 rounded-full border border-green-300'>
                <img src={discover} width={'28px'} className='m-auto'/>
            </button>
            <button className='py-2 px-4 rounded-full border border-green-300'>
                <img src={ideal} width={'28px'} className='m-auto'/>
            </button>
        </div>
        <h1 className='text-left text-base mb-6'>Delivery Method</h1>
        <div className='grid grid-cols-2 auto-cols-[20px] gap-4 mb-6'>
            <button className='flex gap-4 items-center justify-center py-2 px-6 rounded-full border border-green-300 text-gray-600 text-sm'>
                <img src={inpost} width={'50px'} />$20.00
            </button>
            <button className='flex gap-4 items-center justify-center py-2 px-4 rounded-full border border-green-300 text-gray-600 text-sm'>
                <img src={dpd} width={'50px'}/>$12.00 
            </button>
            <button className='flex gap-4 items-center justify-center py-2 px-4 rounded-full border border-green-300 text-gray-600 text-sm'>
                <img src={dhl} width={'28px'}/> $15.00
            </button>
            <button className='flex gap-4 items-center justify-center py-2 px-4 rounded-full border border-green-300 text-gray-600 text-sm'>
                <img src={fedex} width={'28px'} />$10.00
            </button>
        </div>
    </section>
  )
}
