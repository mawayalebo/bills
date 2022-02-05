import Image from 'next/image';
import {MenuIcon } from '@heroicons/react/solid'
import { useState } from 'react';
const Header = () => {
    const [show, setShow] = useState(false);
    
    return ( 
        <header className='flex shadow-md'>
            <div className='flex items-center flex-1'>
                <img src="/logo.svg" className='w-28 sm:w-32 md:w-36  lg:w-56 object-contain p-0' />
                <h1 className='text-2xl sm:text-3xl  md:text-5xl lg:text-7xl  font-bold whitespace-nowrap p-0 '>Bills hub</h1>
            </div>
            <div className='flex items-center justify-end  p-5 md:p-10'>
                <ul className='hidden md:flex space-x-5'>
                    <li className='hover: transition duration-300 ease-out delay-150 hover:font-bold hover:scale-105 hover:text-blue-900'><a href="/">Home</a></li>
                    <li className='hover: transition duration-300 ease-out delay-150 hover:font-bold hover:scale-105 hover:text-blue-900'><a href="#documents">Documents</a></li>
                    <li className='hover: transition duration-300 ease-out delay-150 hover:font-bold hover:scale-105 hover:text-blue-900'><a href="#contact">Contact us</a></li>
                </ul>
                <div className='relative flex items-center justify-center p-2 bg-blue-900 rounded-full md:hidden z-30'>
                    <MenuIcon className='w-5 text-white' onClick={()=> setShow(!show)}/>
                </div>
                <div className={!show?'hidden' :'absolute z-20 bg-yellow-400 rounded-3xl top-10 right-1 p-3 flex flex-col justify-center'}>
                        <ul className='flex flex-col justify-center items-center mt-5'>
                            <li className=' text-white hover: transition duration-300 ease-out delay-150 hover:font-bold hover:scale-105 hover:text-blue-900'  onClick={()=> setShow(!show)}><a href="/">Home</a></li>
                            <li className='text-white hover: transition duration-300 ease-out delay-150 hover:font-bold hover:scale-105 hover:text-blue-900'  onClick={()=> setShow(!show)}><a href="#documents">Documents</a></li>
                            <li className='text-white hover: transition duration-300 ease-out delay-150 hover:font-bold hover:scale-105 hover:text-blue-900'  onClick={()=> setShow(!show)}><a href="#contact">Contact us</a></li>
                        </ul>
                </div>
            </div>
        </header>
     );
}
 
export default Header;

