import React, { useEffect, useState } from 'react';

const images = [
  'https://media.united.com/assets/m/720162ebce6b39b6/original/1215_UnitedPackages-Sweeps_HP_Takeover_Desktop_img_1366x768_2x.jpg',
  'https://www.americanairlines.co.uk/content/images/homepage/mobile-hero/en_US/Airplane-1.png',
  'https://facts.net/wp-content/uploads/2023/07/50-facts-about-united-states-of-america-1688374179.jpeg'
];

const contentList = [
  {
    title: "WANT FLIGHT DEALS?",
    des: "Enter by June 5 to win a trip to Hawaii with United Packages.",
    subTitle: "Join MileagePlus"
  },
  {
    title: "If you ever fly United, you should probably have a United card.",
    des: "Text JOIN to 71529, and we’ll send low fares and sales!",
    subTitle: "Enter sweepstakes"
  },
  {
    title: "TAKE THE TRIP",
    des: "Break the Wi-Fi barrier. Free Wi-Fi on select flights. Only with MileagePlus.",
    subTitle: "Explore now"
  }
];

function Herosection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const contentInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * contentList.length);
      setCurrentContentIndex(randomIndex);
    }, 5000);
    return () => clearInterval(contentInterval);
  }, []);

  const currentImage = images[currentIndex];
  const currentContent = contentList[currentContentIndex];

  return (
    <>
      <section className="w-full h-screen relative">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          <div className="flex items-center justify-between px-4 py-6 md:px-8 md:py-12">

{/* form */}
            <div className="md:block w-60 md:w-1/2 max-w-sm bg-white mt-6 mx-auto flex flex-col p-2 h-90 rounded-lg shadow-md z-10 hidden">
              <div className="flex border-b p-2 border-gray-300">
                {["Book", "Flight status", "Check-in", "My trips"].map((tab, index) => (
                  <button
                    key={index}
                    className={`flex-1 text-center text-[12px] font-medium ${index === 0 ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-600"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <div className="flex space-x-4 text-sm mb-2 text-[10px]">
                  <label className="flex items-center">
  <input type="radio" name="tripTypeMobile" className="mr-1" defaultChecked />
                    Roundtrip
                  </label>
                  <label className="flex items-center">
  <input type="radio" name="tripTypeMobile" className="mr-1" />One-way
</label>
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label for="vehicle1"> I have a bike</label><br/>
<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
<label for="vehicle2"> I have a car</label><br></br>
  </div>

 <div className="grid grid-cols-2 gap-2 mb-2">
   <div>
   <label className="block text-sm font-medium mb-1">From</label>
     <input type="text" placeholder="Origin" className="w-full border border-gray-300 rounded px-3 py-2 text-sm"/>

  </div>
   <div>
   <label className="block text-sm font-medium mb-1">To</label>
  <input type="text" placeholder="Destination" className="w-full border border-gray-300 rounded px-3 py-2 text-sm"/>
  </div>
</div>
<div className="grid grid-cols-2 gap-2 mb-2">
<div>
   <label className="block text-sm font-medium mb-1">Departure</label>
  <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 text-sm"/>
</div>
<div>
   <label className="block text-sm font-medium mb-1">Return</label>
  <input
                      type="date"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 mb-2">
<div>
<select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
<option>Economy</option>
<option>Premium economy</option>
<option>Business or First</option>
</select>
       </div>
    </div>
<div className='flex justify-between'>
    <div className='flex flex-col text-[10px]'>
<h2 className='text-blue-700'>Advanced search </h2>
<h2>(Certificates, multi-city and upgrades)</h2>
<h2 className='text-blue-700'>Changed bag rules
 <span className='text-black'>and</span> </h2>
<h2 className='text-blue-700'>fees for optional services</h2>
    </div>
    {/* btn */}
    <div className='flex flex-col gap-2'>
    <button className="w-40 bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700">
                  Find flights
                </button>
 <button className="w-40 bg-white text-blue-600 py-2 border-1 border-blue-700 rounded-md text-sm hover:underline">
              Find your travel credits
                </button>
    </div>

</div>
              </div>
            </div>

{/* content */}
            <div className=" md:block w-full md:w-1/2 max-w-sm text-white space-y-4 relative hidden">
              <div className="bg-transparent shadow p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{currentContent.title}</h3>
                <p className="mb-2">{currentContent.des}</p>
                <button className="underline hover:text-gray-300">
                  {currentContent.subTitle}
                </button>
              </div>
              <img
                className="w-80 mt-4"
                src="https://media.united.com/assets/m/2a7990bb8f4e3f70/original/050825_Explorer_60K_HPLOWRT_MYACCNT_864x224.png"
                alt="Explore"
              />
            </div>

{/* sm */}
      <div className=" sm:flex flex-col justify-center items-center mt-20 text-[25px] w-full md:w-1/2 max-w-sm text-white space-y-4 relative md:hidden">
              <div className="p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{currentContent.title}</h3>
                <p className="mb-2">{currentContent.des}</p>
                <button className="hover:text-gray-300">
                  {currentContent.subTitle}
                </button>
              </div>
              <img
                className="w-80 mt-4"
                src="https://media.united.com/assets/m/2a7990bb8f4e3f70/original/050825_Explorer_60K_HPLOWRT_MYACCNT_864x224.png"
                alt="Explore"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
