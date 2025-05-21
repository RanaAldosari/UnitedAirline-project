import React from 'react'

function Qline() {
  return (
  <>
  <div className='md:flex mx-4  mt-5 justify-between hidden'>
    <div className='flex gap-3'>
<h2 className='text-blue-700 font-semibold text-[12px] hover:text-blue-900 cursor-pointer' >About United <i class="fa-solid fa-arrow-down"></i></h2>
<h2 className='text-blue-700 font-semibold text-[12px] hover:text-blue-900 cursor-pointer'>Products and services <i class="fa-solid fa-arrow-down"></i></h2>
<h2 className='text-blue-700 font-semibold text-[12px] hover:text-blue-900 cursor-pointer'>Popular destinations <i class="fa-solid fa-arrow-down"></i></h2>
<h2 className='text-blue-700 font-semibold text-[12px] hover:text-blue-900 cursor-pointer'>Careers <i class="fa-solid fa-arrow-up-right-from-square"></i></h2>
    </div>
    <div>
        <h2 className='text-blue-700 font-semibold text-[12px] hover:text-blue-900 cursor-pointer'><i class="fa-solid fa-circle-exclamation"></i> Important notices</h2>
    </div>
  </div>


  {/* sm */}
    <div className='sm:flex flex-col  mt-5 justify-between bg-amber-50 md:hidden'>
    <div className='flex flex-col justify-center  p-5'>
<h2 className='text-black font-semibold text-[12px] pb-3 hover:text-blue-900 cursor-pointer ' >About United <i class="fa-solid fa-arrow-down"></i></h2>
<hr />
<h2 className='text-black font-semibold text-[12px] pb-3 hover:text-blue-900 cursor-pointer'>Products and services <i class="fa-solid fa-arrow-down"></i></h2>
<hr />
<h2 className='text-black font-semibold text-[12px] pb-3 hover:text-blue-900 cursor-pointer'>Popular destinations <i class="fa-solid fa-arrow-down"></i></h2>
    <hr />
    </div>
    <div className='flex justify-between px-5 py-2'>
<h2 className='text-blue-700 font-semibold text-[12px] hover:text-blue-900 cursor-pointer'>Careers <i class="fa-solid fa-arrow-up-right-from-square"></i></h2>
        <h2 className='text-blue-700 font-semibold text-[12px] hover:text-blue-900 cursor-pointer'><i class="fa-solid fa-circle-exclamation"></i> Important notices</h2>
    </div>
  </div>
  </>
  )
}

export default Qline