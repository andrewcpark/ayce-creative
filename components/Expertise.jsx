import React from 'react';
import Image from 'next/image';
import Javascript from '../public/assets/skills/javascript.png';

const Expertise = () => {
  return (
    <div id='expertise' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-xl tracking-widest text-[#008060]'> Expertise </p>
                <h2 className='py-4'> What I know </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Javascript} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> Theme Development </h3>
                            <p className='p-2 text-center mt-8'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Javascript} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> App Development </h3>
                            <p className='p-2 text-center mt-8'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Javascript} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> Store Maintenance </h3>
                            <p className='p-2 text-center mt-8'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Javascript} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> Custom Development </h3>
                            <p className='p-2 text-center mt-8'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                        </div>
                    </div>
                </div>

                </div>
        </div>
    </div>
  )
}

export default Expertise