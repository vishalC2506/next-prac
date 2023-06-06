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
    <section className="flex row w-full h-[58%]  relative  mt-[-2%]  ">
      <Image
        src="/images/mainImage.png"
        width={560}
        height={10}
        className=" h-full"
  />
      <div className="w-[560px]  mt-2 rounded-2xl  ml-4 ">
        <div className="flex m-2 ">
          <button className="ml-8">
            <Image
              src="/images/horizontalCrop.png"
              width={13.33}
              height={16.67}
              className="w-[13.33px] h-[16.67]"
            />
          </button>
          <button className="ml-8">
            <Image
              src="/images/vertical.png"
              width={13.33}
              height={16.67}
              className="w-[13.33px] h-[16.67]"
            />
          </button>
          <button className="ml-8">
            <Image
              src="/images/ImageClick.png"
              width={13.33}
              height={16.67}
              className="w-[13.33px] h-[16.67]"
            />
          </button>
          <button className="ml-8">
            <Image
              src="/images/brightness.png"
              width={13.33}
              height={16.67}
              className="w-[13.33px] h-[16.67]"
            />
          </button>
          <button className="ml-8">
            <Image
              src="/images/filterIcon.png"
              width={13.33}
              height={16.67}
              className="w-[13.33px] h-[16.67]"
            />
          </button>
        </div>
        <div className="flex items-center align-center mt-4 ">
          {" "}
          <select className="bg-Nobel-black text-white mt-2"></select>
          <h5 className="text-white ml-4">Color</h5>
        </div>

        <div className="w-[524px] h-[90px]  mt-2">
          <div className="flex justify-between items-center align-middle">
            <h5 className="text-header-h6 ml-2">HUE</h5>
            <h5 className="text-header-h6  pr-4">{currentColor.hex?currentColor.hex:currentColor}</h5>
          </div>

          <SliderPicker
            color={currentColor}
            onChangeComplete={handleOnChange}
            className="h-[80px] w-[510px]  m-2 mt-2 borde-2 border-yellow-200 "
          />
        </div>
        <div className=" flex mt-4 ml-1 ">
          <select className="bg-Nobel-black text-white"></select>
          <h5 className="text-white  font-semibold">Effects</h5>
        </div>
        <div className="flex  mt-6">
          <h5 className="font-semibold text-sm leading-5 text-white ml-4">
            Flare bokeh
          </h5>
          <div className="flex justify-between">
            <h6 className="text-nav-gen ml-[75%]">0.25,0.75,H255</h6>
            <Image
              src="/images/filter.png"
              alt="load err"
              width={18}
              height={16}
              className="ml-8 w-[18px] h-[16px]"
            />
            <Image
              src="/images/Eye.png"
              alt="load err"
              width={18}
              height={11.37}
              className="ml-8 w-[18px] h-[11.37px]"
            />
          </div>
        </div>
        <div className="flex  mt-6 ">
          <h5 className="font-semibold text-sm leading-5 text-white ml-4  w-[150px] ">
            Gaussian blur
          </h5>
          <div className="flex  w-full">
            <h6 className="text-nav-gen  text-sm  ml-[45%]">
              0.33
            </h6>
            <Image
              src="/images/filter.png"
              alt="load err"
              width={18}
              height={16}
              className=" w-[18px] h-[16px] ml-[12%] "
            />
            <Image
              src="/images/hideview.png"
              alt="load err"
              width={18}
              height={11.37}
              className="  w-[18px] h-[11.37px] ml-[7%] "
            />
          </div>
        </div>
        <div className="flex h-12 mt-6 justify-center items-center">
          <Image
            src="/images/AddIcon.png"
            width={15}
            height={15}
            alt="load err"
            className="h-[15px] w-[15px] "
          />
          <h5 className="leading-5  text-sm font-Plus text-nav-gen pl-4 font-bold ">
            Add effect
          </h5>
        </div>
        <div className=" mt-2  flex justify-center items-center ">
          <h5 className=" font-bold text-transparent text-lg bg-clip-text bg-gradient-to-b from-slate-200 to-gray-800 opacity-40">
            Hue/Saturation
          </h5>
          
        </div>
      </div>
    </section>
  );
};

export default ImageFilter;
