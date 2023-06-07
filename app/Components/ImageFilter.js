"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SliderPicker } from "react-color";
const ImageFilter = () => {
  const [currentColor, setCurrentColor] = useState("#ff6");
  const handleOnChange = (color) => {
    setCurrentColor(color);
    console.log(color.hsl);
  };
  return (
    <section className="flex  w-full h-[85%]   relative  flex-col lg:flex-row items-center  ">
      <Image
        src="/images/mainImage.png"
        width={560}
        height={10}
        className=" h-[25%] w-[65%] sm:w-full lg:h-full"
      />
      <div className="w-[98%]  mt-[2%]  relative  rounded-2xl h-[95%] ml-[2%] overflow-hidden ">
        <div className="flex m-2  ">
          <button className="ml-8">
            <Image
              src="/images/horizontalCrop.png"
              width={13.33}
              height={16.67}
              className="w-[13.33px] h-[16.67] md:w-[15.5px] md:h-[18.67px] "
              alt="err"
            />
          </button>
          <button className="ml-8">
            <Image
              src="/images/vertical.png"
              width={13.33}
              height={16.67}
              className="w-[13.33px] h-[16.67] md:w-[15.5px] md:h-[18.67px] "
              alt="err"
            />
          </button>
          <button className="ml-8">
            <Image
              src="/images/ImageClick.png"
              width={13.33}
              height={16.67}
              className="w-[13.33px] h-[16.67] md:w-[15.5px] md:h-[18.67px] "
              alt="err"
            />
          </button>
          <button className="ml-8">
            <Image
              src="/images/brightness.png"
              width={13.33}
              height={16.67}
              className="w-[13.33px] h-[16.67] md:w-[15.5px] md:h-[18.67px] "
              alt="err"
            />
          </button>
          <button className="ml-8">
            <Image
              src="/images/filterIcon.png"
              width={13.33}
              height={16.67}
              className="w-[10.33px] h-[10.67px] md:w-[15.5px] md:h-[18.67px]  "
              alt="err"
            />
          </button>
        </div>
        <div className="flex items-center align-center mt-[4%] md:font-medium md:text-xl ">
          {" "}
          <select className="bg-Nobel-black text-white mt-1"></select>
          <h6 className="text-white ml-4 text-xs md:text-lg">Color</h6>
        </div>

        <div className="w-[85%] h-[60px] md:h-[90px] mt-[5%] ">
          <div className="flex justify-between items-center align-middle">
            <h5 className="text-header-h6 ml-2 text-xs md:text-base md:font-bold">
              HUE
            </h5>
            <h5 className="text-header-h6  pr-4 text-xs md:text-sm md:font-bold">
              {currentColor.hex ? currentColor.hex : currentColor}
            </h5>
          </div>

          <SliderPicker
            color={currentColor}
            onChangeComplete={handleOnChange}
            className=" w-[85%]  m-2 mt-1 sm:mt-2  sm:w-full h-[46px] "
          />
        </div>
        <div className=" flex  ml-1 mt-[2%]">
          <select className="bg-Nobel-black text-white w-[14px] h-[14px] sm:mt-2"></select>
          <h5 className="text-white  md:font-semibold text-xs font-base tracking-wide md:text-lg">
            Effects
          </h5>
        </div>
        <div className="flex  mt-[2%] ">
          <h5 className="font-semibold  md:leading-5 text-white ml-2 text-xs leading-3 md:text-lg">
            Flare bokeh
          </h5>
          <div className="flex  absolute right-4">
            <h6 className="text-nav-gen text-xs md:text-lg ">0.25,0.75,H255</h6>
            <Image
              src="/images/filter.png"
              alt="load err"
              width={18}
              height={16}
              className="ml-2 w-[10px] h-[10px] mt-1 sm:ml-8 md:w-[18px] md:h-[16px]"
            />
            <Image
              src="/images/Eye.png"
              alt="load err"
              width={18}
              height={11.37}
              className="ml-4 w-[18px] h-[11.37px] sm:ml-6 md:mt-2"
            />
          </div>
        </div>
        <div className="flex  mt-[2%]  ">
          <h5 className="font-semibold  md:leading-5 text-white ml-2 text-xs leading-3 md:text-lg ">
            Gaussian blur
          </h5>
          <div className="flex  absolute right-4  ">
            <h6 className="text-nav-gen  text-sm  lg:text-lg ">0.33</h6>
            <Image
              src="/images/filter.png"
              alt="load err"
              width={18}
              height={16}
              className=" ml-2 w-[10px] h-[10px] mt-1 sm:ml-8 lg:w-[18px] lg:h-[16px]"
            />
            <Image
              src="/images/hideview.png"
              alt="load err"
              width={18}
              height={11.37}
              className="  ml-4 w-[18px] h-[11.37px] sm:ml-6 mt-1 lg:h-[18px] lg:w-[11.37px]"
            />
          </div>
        </div>
        <div className="h-12 sm:mt-4 justify-center items-center  2xl:absolute 2xl:bottom-[10%] 2xl:right-[45%] flex mt-[6%] ">
          <Image
            src="/images/AddIcon.png"
            width={15}
            height={15}
            alt="load err"
            className="h-[15px] w-[15px] "
          />
          <h5 className="leading-5  text-sm font-Plus text-nav-gen pl-4 font-bold  lg:mt-8px lg:text-lg ">
            Add effect
          </h5>
        </div>
        <div className="   justify-center hidden sm:flex items-center mt:[4%] 2xl:absolute 2xl:bottom-[5%] 2xl:right-[42%]">
          <h5
            className={`font-bold text-transparent 
                        bg-clip-text bg-gradient-to-b from-slate-200
                        to-gray-800 opacity-40 text-xs lg:text-lg md:text-lg`}
          >
            Hue/Saturation
          </h5>
        </div>
      </div>
    </section>
  );
};

export default ImageFilter;
