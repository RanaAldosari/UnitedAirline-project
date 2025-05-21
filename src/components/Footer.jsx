import React from 'react'
import { FaTiktok, FaFacebook, FaYoutube, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiGlobalLine } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#000000" }}>
        {/* 1 */}
<div className='flex flex-col sm:flex-col md:flex-row justify-between items-center text-white py-4 px-6'>
 <div className='flex flex-col sm:flex-col md:flex-row items-center md:items-start gap-3'>
    <button className='bg-white text-blue-700 font-normal px-4 py-2 rounded hover:text-blue-900 text-sm sm:text-xs'>
    <CiSearch className="inline-block mr-1" /> Search
            </button>
<div className='flex items-center text-sm  sm:text-xs text-[12px] gap-1'>
      <RiGlobalLine className="text-lg" />
    <h2 className='hover:underline'>English - United States |</h2>
    <h2 className='hover:text-blue-300'>Español</h2>
    </div>
 </div>
 <div className='flex gap-4 mt-4 sm: tetx-xs text-[15px]'>
  {[FaTiktok, FaFacebook, BsTwitterX, FaYoutube, FaInstagramSquare, FaLinkedinIn].map((Icon, index) => (
<Icon key={index} className='text-white hover:text-blue-300 cursor-pointer text-md sm:text-sm' />
))}
  </div>
        </div>
        {/* 2 */}
<div className='text-blue-300 text-xs sm:text-[10px] flex flex-col gap-5 px-4 md:px-20 py-6'>
<div className='font-normal flex flex-wrap justify-center md:justify-around gap-2 sm:text-xs text-[12px]'>
    {[
     "Contract of carriage",
      "Lengthy tarmac delay plan",
      "Legal information",
       "Our United Customer Commitment",
       "Help Center",
       "Accessible travel",
       "Privacy Policy"
    ].map((item, i) => (
    <a key={i} href="#" className='underline hover:no-underline hover:text-blue-800'>
 {item}
 </a>
))}
  </div>
 <div className='flex flex-wrap justify-center md:justify-around gap-2'>
   {[
   "Do Not Sell or Share My Personal Information",
    "Interest Based Ads",
    "United Jetstream",
    "Cargo",
    "Electronic Invoice"
].map((item, i) => (
  <a key={i} href="#" className='underline hover:no-underline hover:text-blue-800 flex items-center gap-1'>
    {item} <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
 </a>
 ))}
 </div>
 <div className="flex flex-col md:flex-row justify-between items-center text-white gap-6 md:gap-20 text-[11px] sm:text-[10px]">
  <p className="text-start max-w-md  md:text-left">
    <i className="fa-solid fa-arrow-up-right-from-square text-[8px] mr-1"></i>
    Indicates an external site that may or may not meet accessibility guidelines. 
    Copyright © 2025 United Airlines, Inc. All rights reserved.
  </p>
  
  <div className="flex items-center gap-4 mt-4 md:mt-0">
    <img className="w-24" src="https://www.united.com/3149651732b3c9591453.UnitedLogoInverted.svg" alt="United Logo" />
    <img className="w-10" src="https://www.united.com/dd45368f41b2bc6e1df9.StarAlliance.svg" alt="Star Alliance" />
  </div>
</div>
<div className='flex justify-center mt-4'>
        <button className='bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:text-blue-900 text-sm sm:text-xs'>
              <i className="fa-solid fa-arrow-right mr-1"></i> CoBrowse
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
