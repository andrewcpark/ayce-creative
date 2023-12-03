import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import ProfileImg from "../public/assets/profile.jpg";
import Image from "next/image";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen">
      <div className="max-w-[1240px] w-full h-full flex md:flex mx-auto p-2 flex-col-reverse md:flex-row justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 text-center md:text-start">
            {" "}
            Hey, I'm <span className="text-[#008060]"> Andrew Park </span>{" "}
          </h1>
          <h1 className="py-2 text-gray-700 text-center md:text-start">
            {" "}
            A Shopify Developer{" "}
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] text-center md:text-start">
            {" "}
            I'm experienced in Shopify Theme Development. Based in Los Angeles,
            CA.{" "}
          </p>
          <div className="flex py-6 justify-center md:justify-start">
            <Link href="/#contact">
              <li className="py-2 px-6 text-sm text-white font-medium flex items-center rounded-lg uppercase bg-[#008060] border border-[#008060]  ease-in duration-300 hover:text-black hover:bg-transparent">
                {" "}
                Contact Me{" "}
              </li>
            </Link>
          </div>
        </div>
        <div className="max-w-[400px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image src={ProfileImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Main;
