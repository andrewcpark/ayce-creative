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
                <h1 className='py-4 text-gray-700'> Hey, I'm <span className='text-[#008060]'> Andrew Park </span> </h1>
                <h1 className='py-2 text-gray-700'> A Shopify Developer </h1>
                <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'> I'm experienced in Shopify Theme and App Development. Based in Los Angeles, CA. </p>
                <div className='flex items-center justify-evenly max-w-[330px] m-auto py-6'>
                  <Link href="/#contact">
                    <li className="py-2 px-6 text-sm text-white font-medium flex items-center rounded-lg uppercase bg-[#008060] border border-[#008060]  ease-in duration-300 hover:text-black hover:bg-transparent">
                      {" "}
                      Contact Me {" "}
                    </li>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
