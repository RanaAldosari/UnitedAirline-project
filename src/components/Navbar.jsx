import React from 'react'
import { RiGlobalLine } from "react-icons/ri";
function Navbar() {
  return (
  <>
  <div className='md:flex justify-between p-3 items-center fixed top-0 left-0 right-0 z-50 backdrop-blur-md text-white  bg-black hidden' >
    <div className='flex gap-2 items-center'>
        <img className='w-8' src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg" alt="logo" />
        <ul className='flex gap-5 text-[12px]'>
            <li>Book</li>
            <li>My trips</li>
            <li>Travel info</li>
            <li>MileagePlus</li>
            <li>Deals</li>
            <li>Help</li>
        </ul>
    </div>

    <div>
        <div className='flex items-center text-sm  sm:text-xs text-[12px] gap-1'>
              <RiGlobalLine className="text-lg" />
            <h2 className='hover:underline text-[12px]'>English - US $ </h2>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-cart-shopping"></i>
            </div>
    </div>
  </div>

{/* sm */}
  <div className='flex justify-between p-3 bg-black items-center md:hidden'>
    <div>
        <img className='w-8' src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg" alt="" />
    </div>
    <div className='flex gap-2 text-white text-[12px]'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-bars"></i>
    </div>
  </div>
  </>
  )
}
export default Navbar