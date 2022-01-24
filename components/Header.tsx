import Image from 'next/image';

const Header = () => {
    return ( 
        <div className='flex items-center justify-center shadow-md'>
            <div className='flex items-center'>
                <img src="/logo.svg" className='w-[150px] h-[100px] lg:w-[400px] lg:h-[250px]' />
            </div>
            <div className='flex items-center justify-center '>
                <h1 className='text-4xl lg:text-[100px] capitalize font-bold whitespace-nowrap '>bills hub</h1>
            </div>
        </div>
     );
}
 
export default Header;

