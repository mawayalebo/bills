import Image from 'next/image';
import {MenuIcon } from '@heroicons/react/solid'
const Header = () => {
    return ( 
        <div className='flex shadow-md'>
            <div className='flex items-center flex-1'>
                <img src="/logo.svg" className='w-28 sm:w-32 md:w-36  lg:w-56 object-contain p-0' />
                <h1 className='text-2xl sm:text-3xl  md:text-5xl lg:text-7xl  font-bold whitespace-nowrap p-0 '>Bills hub</h1>
            </div>
            <div className='flex items-center justify-end  p-5 md:p-10'>
                <ul className='hidden md:flex space-x-5'>
                    <li className='hover: transition duration-300 ease-out delay-150 hover:font-bold hover:scale-105 hover:text-blue-900'><a href="/">Home</a></li>
                    <li className='hover: transition duration-300 ease-out delay-150 hover:font-bold hover:scale-105 hover:text-blue-900'><a href="/about">About</a></li>
                    <li className='hover: transition duration-300 ease-out delay-150 hover:font-bold hover:scale-105 hover:text-blue-900'><a href="/about">Resourses</a></li>
                </ul>
                <div className='flex items-center justify-center p-2 bg-blue-900 rounded-full md:hidden'>
                    <MenuIcon className='w-5 text-white'/>
                </div>
            </div>
        </div>
     );
}
 
export default Header;

