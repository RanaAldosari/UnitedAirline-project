import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Break the Wi-Fi barrier",
    subtitle:
      "Join MileagePlus® to access the fastest connectivity in the sky, for free. Now available on select United flights.",
    img: "https://media.united.com/assets/m/730a5b86b08a82b3/original/1265_Starlink_BelowTheFold_500x300-new.jpg",
    buttonText: "Join now",
  },
  {
    title: "Travel assistance ",
    subtitle:
      "Do the smart thing with your smart phone. Use our app to check-in for your flight, view your boarding pass, track bags.",
    img: "https://media.united.com/assets/m/337be9cec1909e48/original/c3483c91-7704-4c0e-b9f7-7ff46ff5ad49.jpg",
    buttonText: "Download app",
  },
  {
    title: "Travel inspiration with you in mind",
    subtitle:
      "Enjoy curated itineraries and hidden gems from Hemispheres®. ",
    img: "https://media.united.com/assets/m/3d5fcbf8b5f1cd19/original/Final_Collage.jpg",
    buttonText: "Get inspired",
  },
  {
    title: "Explore modern-day Rome",
    subtitle:
      "The Colosseum, the Pantheon, the Forum Romanum — visiting ancient Rome is fun. Pasta making, wine tasting, big bus tours — visiting modern Rome is better.",
    img: "https://media.united.com/assets/m/421167b5f796bb32/original/rome.jpg",
    buttonText: "Book now",
  },
  {
    title: "New look, new planes",
    subtitle:
      "Who's excited for more overhead bin space, better entertainment options, bluetooth at every seat and updated United Clubs? Because we sure are.",
    img: "https://media.united.com/assets/m/4cecf49eceb77eef/original/unitednext.jpg",
    buttonText: "Learn more",
  },
  {
    title: "Save by bundling your flight.",
    subtitle:
      "Take your trip to new heights with United Packages. Plus, MileagePlus members earn 1,000 bonus miles. Spend more time exploring and less time planning.",
    img: "https://media.united.com/assets/m/7193fb3ffaa41a7f/original/upackages_082124.jpg",
    buttonText: "Book ",
  },
];

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx + slides.length - 1) % slides.length);
  const next = () => setIdx((idx + 1) % slides.length);

  return (
    <div>
{/* lg */}
<div className="lg:block hidden relative w-full h-80 bg-black m-auto mb-5  flex justify-center items-center mt-6">
{slides.map((slide, i) => (
<div key={i} className={`absolute inset-0 p-6 flex flex-col md:flex-row items-center justify-between ${
      i === idx ? "opacity-100" : "opacity-0"
 }`}
  >
  <div className="text-white flex flex-col gap-5">
   <h2 className="text-2xl md:text-3xl font-bold">{slide.title}</h2>
      <p className="text-white text-[12px] mt-20">{slide.subtitle}</p>
       <button className="mt-2 px-6 py-2 w-40 bg-white text-blue-600 rounded-4xl border-blue-600 border-2 hover:bg-blue-700 transition">
         {slide.buttonText}
  </button>
    
    </div>
 <img src={slide.img} alt="" className="w-90 h-auto object-contain md:mt-0"
 />
 </div>
))}
 <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">
          <FaChevronLeft />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">
          <FaChevronRight />
        </button>
</div>

{/* sm */}
<div className="flex justify-center items-center">
<div className="lg:hidden h-90 sm:flex flex-col relative w-full bg-black mb-3 mt-6">
<div className="flex flex-col items-center justify-center p-4 gap-4 opacity-100">
    <div className="text-white text-center">
      <h2 className="text-2xl font-bold">{slides[0].title}</h2>
      <p className="text-white text-[12px]">{slides[0].subtitle}</p>
      <button className="mt-2 px-6 py-2 w-40 bg-white text-blue-600 rounded-4xl border-blue-600 border-2 hover:bg-blue-700 transition">
        {slides[0].buttonText}
      </button>
    </div>
    <img
      src={slides[0].img}
      className="w-60 h-40 object-contain"
    />
  </div>
  <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10" >
    <FaChevronLeft />
  </button>
  <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10">
    <FaChevronRight />
  </button>
</div>

</div>
    </div>
  );
}
