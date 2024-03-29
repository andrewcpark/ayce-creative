import React from "react";
import Image from "next/image";
import ContactImg from "../public/assets/contact.jpg";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Script from "next/script";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="tex-xl tracking-widest uppercase text-[#008060]">
          {" "}
          Contact{" "}
        </p>
        <h2 className="py-4"> Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg;p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2"> Andrew Park </h2>
                <p> Shopify Developer </p>
                <p className="py-4">
                  {" "}
                  I'm always looking to expand my network. I'm currently open to
                  working with merchants and agencies. Contact me and let's
                  talk!{" "}
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#008060]">
                  {" "}
                  Connect With Me
                </p>
                <div>
                  <div className="flex items-center justify-evenly py-8">
                    <a
                      href="https://www.linkedin.com/in/andrew-c-park/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#008060]">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/aycecreative"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#008060]">
                        <FaInstagram />
                      </div>
                    </a>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#008060]">
                      <AiOutlineMail />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/95f1e04a-7ff8-478f-a8f3-ec98a6f32f4f"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2"> Name </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      {" "}
                      Phone Number{" "}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2"> Email </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2"> Subject </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2"> Message </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  />
                </div>
                <div
                  className="g-recaptcha"
                  data-sitekey="6LdasC0kAAAAAEsrTdGHFFrS6-Hn1YK9eEF55Vcd"
                  data-callback="enableBtn"
                ></div>
                <button
                  className="w-full p-4 text-gray-100 mt-4 cursor-not-allowed"
                  id="contactBtn"
                  disabled
                >
                  {" "}
                  Send Message{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12 ">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp
              className="m-auto text-[#008060]"
              size={30}
            />
          </div>
        </Link>
      </div>
      <Script>{`
    function enableBtn() {
      document.getElementById("contactBtn").removeAttribute("hidden")
      document.getElementById("contactBtn").style.cursor = "pointer"
    }
`}</Script>
    </div>
  );
};

export default Contact;
