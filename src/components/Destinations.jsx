import React from 'react';

function Destinations() {
  return (
    <>
   <div className='md:flex flex-col hidden'>
        {/* Content */}
  <div className='m-3'>
<h2 className='font-bold'>Explore Destinations</h2>
<p className='font-light'>
Not sure where to go? Use our interactive map to find flights to great destinations.
</p>
<button className='border-1 bg-red-100 border-red-700 font-light rounded p-2'>
     <i className='text-red-700  fa-solid fa-triangle-exclamation'></i>
      Sorry, no results have been found. Please enter a different origin location or expand your search area.
</button>
</div>

        {/* form */}
  <div className='flex flex-col '>
  <div className='flex flex-wrap justify-around items-center'>
  <div className='flex flex-col'>
  <label>Flying from</label>
  <input type="text" placeholder='Riyadh RUH' className='border rounded p-2' />
   </div>

   <div className='flex flex-col'>
<label>Search type</label>
<select className='border rounded p-2'>
<option value="Roundtrip">Roundtrip</option>
<option value="One way">One way</option>
</select>
    </div>

    <div className='flex flex-col'>
      <label>Dates</label>
       <input  type="date" className='border rounded p-2' />
  </div>

    <div className='flex flex-col'>
      <label>Max price</label>
      <input type="number" placeholder='2000$' className='border rounded p-2' />
</div>
          <button className='bg-blue-700 text-white px-5 py-1 rounded-2xl mt-4 w-auto hover:bg-blue-900'>Search</button>
          <h2 className='mt-4 text-blue-600 hover:text-blue-800'>
            <i className="fa-solid fa-arrow-right"></i> Refine search
          </h2>
          </div>

        </div>
      </div>

      {/* sm */}
 <div className='sm:flex flex-col mt-4 md:hidden m-4'>
    <div className='flex flex-col mb-4'>
    <label>Flying from</label>
<input type="text" placeholder='Riyadh RUH' className='border rounded p-2' />
  </div>

<div className='flex flex-col mb-4'>
<label>Search type</label>
   <select className='border rounded p-2'>
     <option value="Roundtrip">Roundtrip</option>
    <option value="One way">One way</option>
     </select>
          </div>

          <div className='flex flex-col mb-4'>
            <label>Dates</label>
            <input type="date" className='border rounded p-2' />
          </div>

          <div className='flex flex-col mb-4'>
            <label>Max price</label>
            <input type="number" placeholder='2000$' className='border rounded p-2' />
          </div>
<div className='flex items-center justify-around'>
          <button className='bg-blue-700 text-white px-3 py-2 rounded-2xl mt-4 w-20 hover:bg-blue-900'>Search</button>
          <h2 className='mt-4 text-blue-600 hover:text-blue-800'>
            <i className="fa-solid fa-arrow-right"></i> Refine search
          </h2>
</div>
        </div>
 
    </>
  );
}

export default Destinations;
