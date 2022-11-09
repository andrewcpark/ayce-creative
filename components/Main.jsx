import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'> Hi, I'm <span className='text-[#008060]'> Andrew </span> </h1>
                <h1 className='py-2 text-gray-700'> A Shopify Developer </h1>
                <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'> I'm experienced in Shopify Theme and App Development. Based in Los Angeles, CA. </p>
                <div className='flex items-center justify-evenly max-w-[330px] m-auto py-6'>
                    <a
                    href='https://www.linkedin.com/in/andrew-c-park/'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div title='LinkedIn' className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#008060]'>
                        <FaLinkedinIn/>
                    </div>
                    </a>
                    <a
                    href='https://github.com/andrewcpark'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div title='GitHub' className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#008060]'>
                    <FaGithub />
                    </div>
                    </a>
                    <Link href='/#contact'>
                    <div title='Message' className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#008060]'>
                    <AiOutlineMail/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
