import React from 'react';
import banner from "@/assets/banner.png"
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='grid grid-cols-2  mt-20 ml-20 mr-20 bg-[#151819] rounded-xl min-h-[400px]'>

            <div className='ml-10 mt-10'  >
   <p className='text-[#C2F800] mb-4'>Workout Library</p>
   <h1 className='text-5xl font-bold mb-4'>  <span className="whitespace-nowrap">TRAIN WITH INTENT. LOG</span> <br /> EVERY SET.</h1>
   <p className='text-gray-400 mb-8'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into <br /> today's plan, and watch the week's work add up.</p>
   <button className='bg-[#c1f017] px-4 py-2 rounded-md text-black font-semibold'>BROWSE WORKOUT</button>
 </div>

    <div className='ml-30 mt-6' >
  <Image src={banner} alt="fgf"/>
  </div>

        </div>
    );
};

export default Banner;