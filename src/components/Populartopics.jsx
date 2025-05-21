import React from "react";

function Populartopics() {
  const topics = [
    { icon: "fa-solid fa-wifi", topic: "Wi-Fi" },
    { icon: "fa-solid fa-jet-fighter", topic: "Change flight" },
    { icon: "fa-solid fa-clipboard-check", topic: "United Club" },
    { icon: "fa-solid fa-paw", topic: "Traveling with pets" },
    { icon: "fa-solid fa-bookmark", topic: "MileagePlus" },
    { icon: "fa-solid fa-bag-shopping", topic: "Baggage" },
    { icon: "fa-solid fa-money-check-dollar", topic: "Refund" },
    { icon: "fa-solid fa-headset", topic: "Help Center" },
  ];

  return (
    <>
    
    
    <div className="p-2 max-w-md mx-auto w-70 bg-blue-950 md:hidden">
{/* search */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mb-6 bg-white shadow-sm">
        <i className="fa-solid fa-magnifying-glass text-blue-700 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full focus:outline-none text-sm"
        />
      </div>
{/* topics */}
      <h2 className="text-lg font-semibold mb-4 text-white">Popular Topics</h2>

      <div className="grid grid-cols-1 gap-4">
        {topics.map((item, index) => (
          <div
            key={index}
            className=" flex items-center gap-2 p-1 "
          >
            <i className={`${item.icon} text-white text-xl`} />
            <span className="text-sm font-medium underline text-white hover:no-underline cursor-pointer">{item.topic}</span>
          </div>
        ))}
      </div>
    </div>
{/* md */}
 <div className="hidden md:block p-6 bg-blue-950 max-w-4xl mx-auto ">
    <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4 text-white">Popular Topics</h2>

<div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mb-6 bg-white shadow-sm">
        <i className="fa-solid fa-magnifying-glass text-blue-700 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full focus:outline-none text-sm"
        />
      </div>
    </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3  cursor-pointer"
            >
              <i className={`${item.icon} text-white text-lg`} />
              <span className="text-sm text-white underline font-medium hover:no-underline">{item.topic}</span>
            </div>
          ))}
        </div>
      </div>
</>
  );
}

export default Populartopics;
