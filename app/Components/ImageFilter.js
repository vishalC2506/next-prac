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
    <section className="flex row  ">
      <Image
        src="/images/mainImage.png"
        width={560}
        height={560}
        className="w-[560px] h-[560px] mt-4"
      />
      <div className="w-[560px] h-[560px] mt-4 rounded-2xl relative  ">
        <div className="flex m-3 ">
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
        <div className="flex items-center align-center ">
          {" "}
          <select className="bg-Nobel-black text-white mt-6 mb-6"></select>
          <h5 className="text-white ml-4">Color</h5>
        </div>

        <div className="w-[524px] h-[180px]  ">
          <div className="flex justify-between items-center align-middle">
            <h5 className="text-header-h6 ml-2">HUE</h5>
            <h5 className="text-header-h6 ">{currentColor.hex}</h5>
          </div>

          <SliderPicker
            color={currentColor}
            onChangeComplete={handleOnChange}
            className="h-[80px] w-[510px]  m-2 mt-6 borde-2 border-yellow-200 "
          />
        </div>
        <div className=" flex ">
          <select className="bg-Nobel-black text-white"></select>
          <h5 className="text-white  font-semibold">Effects</h5>
        </div>
        <div className="flex  mt-8">
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
        <div className="flex  mt-8">
          <h5 className="font-semibold text-sm leading-5 text-white ml-4  w-[150px] ">
            Gaussian blur
          </h5>
          <div className="flex justify-between w-full">
            <h6 className="text-nav-gen  text-sm  absolute right-[30%]">
              0.33
            </h6>
            <Image
              src="/images/filter.png"
              alt="load err"
              width={18}
              height={16}
              className=" w-[18px] h-[16px] absolute right-[20.8%] "
            />
            <Image
              src="/images/hideview.png"
              alt="load err"
              width={18}
              height={11.37}
              className="absolute  w-[18px] h-[11.37px] right-[12%]"
            />
          </div>
        </div>
        <div className="flex">
          <Image
            src="/images/AddIcon.png"
            width={15}
            height={15}
            alt="load err"
            className="absolute bottom-[12%] right-[25%] left-[35%]"
          />
          <h5 className="leading-5 font-medium text-sm font-Plus text-nav-gen bottom-[12%] absolute right-[17%] left-[42%]">
            Add effect
          </h5>
        </div>
        <div className="absolute bottom-0  w-full   flex justify-center z-0 ">
          <h5 className=" font-bold text-transparent text-lg bg-clip-text bg-gradient-to-b from-slate-200 to-gray-800 opacity-40">
            Hue/Saturation
          </h5>
          
        </div>
      </div>
    </section>
  );
};

export default ImageFilter;
