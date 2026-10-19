import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png";

const Footerpage = () => {
    return (
   <footer className="border-t border-white/5 py-5 px-6 md:px-12">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">

    <div className="flex justify-center md:justify-start gap-2">
      <Image src={logo} alt="FitLog Logo" className="w-6 h-auto" />
      <p className='font-bold'>FITLOG</p>
    </div>

    <div className="text-gray-400 text-sm text-center md:text-right text-mist-600 font-light">
      © 2026 FitLog-Workout Library. Train Hard, Log Honest.
    </div>

  </div>
</footer>
    );
};

export default Footerpage;