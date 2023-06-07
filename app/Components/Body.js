import React from "react";
import Image from "next/image";
import ImageFilter from "./ImageFilter";

const Body = () => {
  return (
    <div className=" w-full bg-nav-bg rounded-[20px] mt-2 p-2 h-[65%] sm:h-[68%] overflow-hidden  ">
      <div className="flex m-1  h-[56px] items-center w-full  ">
        <button className="pr-2 ml-4">
          <Image
            src="/images/sideArrow.png"
            width={4.65}
            height={10}
            className="mt-[-2px]"
          />
        </button>
        <h6 className="text-white text-[8px] landing-4 font-semibold ml-1  w-[94px] text-left sm:text-sm sm:w-max sm:leading-8 sm:font-bold ">
          Modern spaceship in cosmos
        </h6>
        <Image
          src="/images/Badge.png"
          width={41}
          height={32}
          className="w-[24px] h-[24px] sm:w-[35px] sm:h-[35px] ml-2"
        />
        <Image
          src="/images/star.png"
          width={16}
          height={16}
          className="absolute right-[22%] w-[10px] h-[10px] sm:w-[16px] sm:h-[16px] lg:right-[18%]"
        />
        <h5 className="text-nav-gen leading-4 font-light text-[10px] absolute right-[12%] mt-1 sm:text-[16px]  sm:font-bold sm:leading-6">
          Export
        </h5>
        <Image
          src="/images/download.png"
          width={16}
          height={16}
          className="absolute h-[10px] w-[10px] mt-1 right-[8%] sm:w-[16px] sm:h-[16px]"
        />
        <Image
          src="/images/more.png"
          width={5}
          height={14}
          className="w-[5px] absolute right-[5%] sm:w-[5px] sm:h-[14px]"
        />
      </div>
      <ImageFilter />
     
    </div>
  );
};

export default Body;
