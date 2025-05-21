import React from 'react'

function Qlinks() {
  const cards = [
    {
      title: "Plan your trip",
      description: "Find a destination and any entry requirements."
    },
    {
      title: "Check flight status",
      description: "Real-time flight updates for your journey."
    },
    {
      title: "Book a flight",
      description: "Search and book your next flight easily."
    },
    {
      title: "Manage reservations",
      description: "View or change your upcoming trips."
    },
    {
      title: "Travel updates",
      description: "Stay informed about travel policies."
    },
    {
      title: "MileagePlus® program",
      description: "Earn and use miles for travel and more."
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Useful links for you</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-between items-center border-1 border-gray-300 p-3 rounded shadow hover:shadow hover:border-blue-700 hover:border-2">
            {/* Content */}
            <div>
              <h1 className="font-bold text-lg mb-1">{card.title}</h1>
              <p className="text-sm text-gray-900">{card.description}</p>
            </div>
            {/* icon */}
            <div>
              <i className="fa-solid fa-arrow-right text-blue-700"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Qlinks
