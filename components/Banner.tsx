import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <div className='relative flex w-full h-80 overflow-hidden'>
        <Image loading="lazy" src="/banner1.jpg" layout='fill'/>
        <div className="absolute bg-gradient-to-r from-gray-900 flex-1 h-full w-full p-2 sm:p-10 flex flex-col" >
            <p className='text-white text-5xl sm:text-7xl uppercase font-bold' >legal cost consultants</p>
            <p className='text-white text-5xl sm:text-7xl uppercase font-bold' >handled better </p>
        </div>
    </div>
    )
}

export default Banner;
