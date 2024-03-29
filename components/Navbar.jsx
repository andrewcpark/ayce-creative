import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import logoImg from "../public/assets/ayce-logo.png";

const Navbar = () => {
  // HOOK TO INITIALIZE AND SET STATE
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavbg] = useState("#eeeeee");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  // LOGIC TO TOGGLE BETWEEN STATE
  const handleNav = () => {
    setNav(!nav);
  };

  // LOGIC TO GIVE SHADOW ON NAVBAR ONCE SCROLLING
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (router.asPath === "/vendOMatic") {
      setNavbg("transparent");
      setLinkColor("#f8f8f8");
    } else {
      setNavbg("#eeeeee");
      setLinkColor("#1f2937");
    }
  }, [router]);

  return (
    <div
      id="navbar"
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-auto shadow-xl z-[100]"
          : "fixed w-full h-auto z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full px-8 my-2 2xl:px-16">
        <Link href="/">
          <Image src={logoImg} alt="/" width="150" height="75" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm flex items-center uppercase border-[#008060] hover:border-b">
                {" "}
                Home{" "}
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm flex items-center uppercase border-[#008060] hover:border-b">
                {" "}
                About{" "}
              </li>
            </Link>
            <Link href="/#expertise">
              <li className="ml-10 text-sm flex items-center uppercase border-[#008060] hover:border-b">
                {" "}
                Expertise{" "}
              </li>
            </Link>
            {/* <Link href='/#skills'>
            <li className='ml-10 text-sm uppercase border-[#008060] hover:border-b'> Skills </li>
          </Link> */}
            <Link href="/#projects">
              <li className="ml-10 text-sm flex items-center uppercase border-[#008060] hover:border-b">
                {" "}
                Projects{" "}
              </li>
            </Link>
            {/* <Link href='/'>
            <li className='ml-10 text-sm uppercase border-[#1e97f3] hover:border-b'> Blog </li>
          </Link> */}
            <Link href="/#contact">
              <li className="ml-10 py-2 px-4 text-sm text-white font-medium flex items-center rounded-lg uppercase bg-[#008060] border border-[#008060]  ease-in duration-300 hover:text-black hover:bg-transparent">
                {" "}
                Contact{" "}
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} fill="#008060" />
          </div>
        </div>
      </div>

      {/*MOBILE NAVBAR AND MENU */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#eeeeee] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logoImg} alt="/" width="150" height="75" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shawdow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase border-[#008060] hover:border-b"
                >
                  {" "}
                  Home{" "}
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase border-[#008060] hover:border-b"
                >
                  {" "}
                  About{" "}
                </li>
              </Link>
              <Link href="/#expertise">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase border-[#008060] hover:border-b"
                >
                  {" "}
                  Expertise{" "}
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase border-[#008060] hover:border-b"
                >
                  {" "}
                  Skills{" "}
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm uppercase border-[#008060] hover:border-b"
                >
                  {" "}
                  Projects{" "}
                </li>
              </Link>
              {/* <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm uppercase border-[#008060] hover:border-b'> Blog </li>
              </Link> */}
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-medium uppercase text-[#008060] border-[#008060] hover:border-b"
                >
                  {" "}
                  Contact{" "}
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#008060]">
                {" "}
                Let's Connect{" "}
              </p>
              <div className="flex items-center justify-evenly my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/andrew-c-park/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#008060]">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/aycecreative"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#008060]">
                    <FaInstagram  />
                  </div>
                </a>
                <Link href="/#contact">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#008060]">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
