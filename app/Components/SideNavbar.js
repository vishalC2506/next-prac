"use client";
import Image from "next/image";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "../Redux/navActiveSlice";
const SideNavbar = () => {
  const isActive = useSelector((state) => state.navActiveReducer.value);
   const dispatch = useDispatch();
  const handleMenu = () => {
     dispatch(changeActive());
 
  };

  return (
    <nav
      className={`sm:flex flex-col items-start p-0 sm:w-[20%]
                  h-full bg-nav-bg rounded-[2%] self-stretch 
                  grow-0 relative md:w-[28%]   ${
                    !isActive
                      ? "flex w-screen z-10 opacity-90 absolute left-0 top-0"
                      : " absolute left-[-500px]  "
                  }`}
    >
      <div className="w-full flex flex-col m-2 sm:mt-[5%] sm:ml-[5%] mt-1 ">
        <div className="w-4 h-6  sm:hidden absolute right-4 top-4">
          {!isActive ? (
            <GrClose
              className=" bg-red-200 rounded-md h-4 w-4 "
              onClick={handleMenu}
            />
          ) :" "}
        </div>
        <div>
          <Image
            className="flex-none order-none"
            src="/images/Avatar.png"
            width={48}
            height={48}
            alt="image load err"
          />
          <div className=" flex flex-col m-2">
            <h5 className={` sm:font-medium text-white tracking-wide sm:pl-2 `}>
              Intellisys
            </h5>
            <h6 className="font-medium text-light-green text-xs sm:pl-2">
              12 members
            </h6>
          </div>

          <select className=" absolute w-4 h-4 bg-nav-bg text-white right-2 mt-2 ">
            select
          </select>
        </div>
        <div className="w-full flex flex-col m-4 mt-4">
          <h5 className="font-semibold text-xs text-nav-gen font-Plus">
            GENERAL
          </h5>
          <div className="flex items-center  tracking-[0.15px] leading-5 mt-2 ">
            <Image
              src="/images/search.png"
              width={13.33}
              height={13.33}
              className="mt-2 "
            />

            <button
              className={`text-search-button  w-[40px] h-[20px]  
                            sm:font-semibold font-base text-xs md:min-w-[35%]  
                            sm:w-[25%] sm:text-sm mt-2  text-start pl-2`}
            >
              Search
            </button>
            <Image
              src="/images/swastic.png"
              width={22}
              height={18}
              className=" absolute right-4 mt-2"
            />
          </div>

          <div className="w-full flex mt-8">
            <Image
              src="/images/bal.png"
              width={15}
              height={11.67}
              className="mt-2"
            />
            <button className="text-search-button  w-[40px] h-[20px]  font-base  pt-1 pl-2 text-xs sm:text-sm sm:font-semibold">
              Billing
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col ml-2 mt-6">
          <h5 className="font-semibold text-xs text-nav-gen font-Plus pl-2">
            PROJECTS
          </h5>
          <div
            className={`mt-8 border-box flex flex-row items-center hover:bg-hero-pattern h-[46px] w-full text-xs md:text-sm pl-2 rounded-md `}
          >
            <Image src="/images/orbital.png" width={15} height={15} />
            <button className="text-white w-[149px] h-[20px] font-semibold  md:text-sm leading-5 ml-2 text-left">
              Orbital Oddysey
            </button>
          </div>
          <div
            className={`flex mt-2  border-box  flex-row items-center
           hover:bg-hero-pattern h-[46px] w-full text-xs 
           md:text-sm  rounded-md pl-2`}
          >
            <Image
              src="/images/digital.png"
              width={18.33}
              height={16.67}
              className="w-[18.33px] h-[16.67px] mt-1"
            />
            <button
              className={` text-white md:w-[75%] h-[20px] font-base
                          text-sm  leading-2 ml-2 text-left
                           font-semibold `}
            >
              Digital Product Launch
            </button>
          </div>
          <div
            className="flex mt-2  border-box  flex-row items-center
          hover:bg-hero-pattern h-[46px] w-full text-xs 
          md:text-sm  rounded-md pl-2"
          >
            <Image src="/images/square.png" width={18.33} height={16.67} />
            <button className="text-white w-[75%] h-[20px] font-semibold  leading-5 ml-2 text-left text-sm">
              Brand Refresh
            </button>
          </div>
          <div
            className="flex mt-2  border-box  flex-row items-center
          hover:bg-hero-pattern h-[46px] w-full text-xs 
          md:text-sm  rounded-md pl-2"
          >
            <Image src="/images/social.png" width={18.33} height={16.67} />
            <button className="text-white w-[75%] h-[20px] font-smeibold  leading-5 ml-2 text-left text-sm">
              Social Media Strategy
            </button>
          </div>
          <div
            className="flex mt-2  border-box  flex-row items-center
          hover:bg-hero-pattern h-[46px] w-full text-xs 
          md:text-sm  rounded-md pl-2"
          >
            <Image src="/images/Add.png" width={18.33} height={16.67} />
            <button className="text-nav-gen w-[75%] h-[20px] font-semibold text-sm leading-5 ml-2 text-left">
              Add new project
            </button>
          </div>
        </div>
        <div
          className={`bg-hero-pattern w-[95%] h-[65px] sm:h-[90px] rounded-2xl 
                      flex flex-row  sm:justify-start  items-center 
                      p-2 gap-4 box-border absolute bottom-0 `}
        >
          <Image
            src="/images/navprofile.png"
            width={48}
            height={48}
            className="rounded-[20px] ml-1 sm:ml-2 "
          />
          <div className="flex flex-col boreder-2 border-red-400  ">
            <h6
              className={`tracking-[0.15px] text-white font-plus 
                          sm:font-semibold text-xs sm:text-sm leading-6  
                          flex items-center text-left`}
            >
              John Wick
            </h6>
            <h6 className="font-medium text-light-green text-xs">Premium</h6>
          </div>
          <Image
            src="/images/settingnav.png"
            width={16.16}
            height={18}
            className=" absolute right-[2%]  "
          />
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
