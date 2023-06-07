'use client'
import React from "react";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import { useSelector,useDispatch } from "react-redux";
import { changeActive } from "../Redux/navActiveSlice";
const Header = () => {
  const isActive=useSelector((state)=>state.navActiveReducer.value);
    const dispatch=useDispatch();
    const handleMenu = () => {
      dispatch(changeActive())
    };
  return (
    <div className="bg-nav-bg flex flex-col items-start p-0 w-full  rounded-[20px]">
    <div className="w-4 h-6  sm:hidden absolute right-[50%] top-4">
          {isActive  ? (
            <HiMenu className=" bg-red-200 rounded-md h-4 w-4 " onClick={handleMenu} />
          ) : ""}
          </div>
      <h4 className=" font-Plus font-bold text-xs md:text-sm lg:text-lg leading-8 text-white mt-2 ml-1 sm:ml-2">
        Orbital Oddysey
      </h4>
      <h6 className="text-xs sm:text-sm font-light md:font-medium leading-5 font-Plus text-header-h6 ml-1 sm:ml-2 mt-[-2px] ">
        Marketing Campaign for a new TV series Launch
      </h6>

      <div className="flex absolute right-[20%] top-4  justify-start">
        <Image
          src="/images/header1.png"
          width={32}
          height={32}
          className={`w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px]`}
        />
        <Image
          src="/images/header2.png"
          width={32}
          height={32}
          className={`w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px] `}
        />
        <Image
          src="/images/header3.png"
          width={32}
          height={32}
          className={`w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px]`}
        />
        <Image
          src="/images/header4.png"
          width={32}
          height={32}
          className={`w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px]`}
          alt='err'
        />
        <Image
          src="/images/header5.png"
          width={32}
          height={32}
          className={`w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px]  `}
          alt='err'
        />
      </div>
      <div className="flex absolute right-[16%] md:right-[8%] top-4 sm:top-4  justify-start">
        <Image
          src="/images/share.png"
          width={4}
          height={4}
          className={`w-[10px] h-[10px] hidden lg:block sm:w-[16px] sm:h-[16px] sm:mt-1 mr-1 `}
        />
        <button className="font-semibold text-xs sm:block text-nav-gen w-[8px] h-[8px] sm:w-[16px] sm:h-[16px] ml-2">
          Share
        </button>
      </div>
      <div className="absolute right-2 top-3">
        <Image
          src="/images/Buttonicon.png"
          height={40}
          width={40}
          className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] sm:mt-1"
        />
      </div>
      <div className="flex">
        <div className="flex  mt-3 ml-4">
          <Image
            src="/images/greenTriangle.png"
            width={15}
            height={15}
            className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] mt-1 "
          />
          <h5 className="text-search-button font-base sm:font-semibold text-xs leading-2 sm:leading-5 pl-1 sm:pl-2 sm:text-sm">
            Artificium
          </h5>
        </div>
        <div className="flex mt-3 ml-6">
          <Image
            src="/images/message.png"
            width={15}
            height={15}
            className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] mt-[6px]"
          />
          <h5 className="text-header-h6 font-semibold sm:text-sm leading-5 pl-2 text-xs">
            Chat
          </h5>
        </div>
        <div className="flex mt-3 ml-6">
          <Image src="/images/library.png" width={15} height={15} />
          <h5 className="text-header-h6 font-semibold text-sm leading-5 pl-2">
            Library
          </h5>
        </div>
      </div>
      <div className="bg-under-Line  shadow-box-shadow rounded-t mt-2   top-[14.8%] ml-4 w-[64px] h-[4px] sm:w-[92px]"></div>
    </div>
  );
};

export default Header;
