
import React from "react";
import banner from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 lg:mt-20 mx-4 md:mx-10 lg:mx-20 bg-[#151819] rounded-xl overflow-hidden min-h-[400px]">

      {/* Left Side */}
      <div className="flex flex-col justify-center items-start p-6 md:p-10 lg:p-12">
        <p className="text-[#C2F800] mb-4">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-[clamp(1.7rem,3vw,3rem)] font-bold mb-4 leading-tight">
          TRAIN WITH INTENT. LOG <br className="hidden 2xl:block" />
          EVERY SET.
        </h1>

        <p className="text-gray-400 mb-8 text-sm md:text-base">
          FitLog is a dark, no-nonsense gym companion:
          pick a lift, lock it into today's plan, and
          watch the week's work add up.
        </p>

        <a
          href="#library"
          className="bg-[#C2F800] px-5 py-3 rounded-md text-black font-semibold text-sm hover:bg-[#d8ff55] transition-colors"
        >
          BROWSE WORKOUTS ↗
        </a>
      </div>

      {/* Right Side */}
      
      <div className="flex items-center justify-center px-6 py-8 lg:py-12 lg:ml-10">
  <Image
    src={banner}
    alt="FitLog Banner"
    width={400}
    height={320}
    className="w-full max-w-[320px] h-auto object-contain"
  />
</div>

    </div>
  );
};

export default Banner;
