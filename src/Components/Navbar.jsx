import React from 'react';
import {AiOutlineShoppingCart,AiOutlineUser} from 'react-icons/ai';
import {HiOutlineSearch} from 'react-icons/hi';
// import {FaShopware} from 'react-icons/fa'
import logo from '../assets/logo.png';
export const Navbar = ({user}) => {
  return (
    <nav>
        <div className="app-container flex justify-between items-center p1">
            <a href="/" className="app-logo flex items-center">
                <img src={logo} size='1.5rem' width="40px" className="mr-1.5"/>
                <span className='text-yellow-500'>E-</span>Shop
            </a>

            <ul className=" flex list-none gap-10 items-center">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>

            <ul className=" flex list-none gap-5 items-center">
                <li>
                    <a href='/' className="flex items-center">
                        <HiOutlineSearch size='1.5rem' />
                    </a>
                </li>

                <li>
                    <a href='/' className="flex items-center">
                       <AiOutlineShoppingCart size='1.5rem' />
                    </a>
                </li>

                <li>
                    <a href='/' className="flex items-center">
                    {user?(  <>  <AiOutlineUser size='1.5rem' /><span className='text-xl'>{user.name[0]}</span></>):(<AiOutlineUser size='1.5rem' />)}
                    </a>
                </li>
              
            </ul>
        </div>    
    </nav>
  )
}
