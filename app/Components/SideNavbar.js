import Image from "next/image";
import React from "react";

const SideNavbar = () => {
  return (
    <nav
      className={`flex flex-col items-start p-0 min-w-[312px] h-full bg-nav-bg rounded-[20px] self-stretch grow-0 relative `}
    >
      <div className="w-full flex m-2 mt-4 ">
        <Image
          className="flex-none order-none"
          src="/images/Avatar.png"
          width={48}
          height={48}
          alt="image load err"
        />
        <div className=" flex flex-col m-2">
          <h5
            className={`tracking-[0.15px] text-white font-plus font-semibold text-base leading-6 flex items-center text-center `}
          >
            Intellisys
          </h5>
          <h6 className="font-medium text-light-green text-xs">12 members</h6>
        </div>

        <select className="w-4 h-4 bg-nav-bg text-white ml-[45%] mt-2 ">
          select
        </select>
      </div>
      <div className="w-full flex flex-col m-4 mt-4">
        <h5 className="font-semibold text-xs text-nav-gen font-Plus">
          GENERAL
        </h5>
        <div className="flex items-center text-center tracking-[0.15px] leading-5 mt-2">
          <Image
            src="/images/search.png"
            width={13.33}
            height={13.33}
            className="mt-4"
          />
       
          <button className="text-search-button  w-[49px] h-[20px]  font-semibold text-sm pt-2 pl-2">
            Search
          </button>
          <Image
            src="/images/swastic.png"
            width={22}
            height={18}
            className=" ml-[60%] pt-4"
          />
         
        </div>

        <div className="w-full flex mt-8">
          <Image
            src="/images/bal.png"
            width={15}
            height={11.67}
            className="mt-2"
          />
          <button className="text-search-button  w-[49px] h-[20px]  font-semibold text-sm pt-1 pl-2">
            Billing
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col ml-2 mt-6">
        <h5 className="font-semibold text-xs text-nav-gen font-Plus pl-2">
          PROJECTS
        </h5>
        <div className="mt-8 border-box flex flex-row items-center bg-hero-pattern h-[46px] w-[296px] pl-2 rounded-md ">
          <Image src="/images/orbital.png" width={15} height={15} />
          <button className="text-white w-[115px] h-[20px] font-semibold text-sm leading-5 ml-2">
            Orbital Oddysey
          </button>
        </div>
        <div className="w-full flex mt-6 ml-2">
          <Image src="/images/digital.png" width={18.33} height={16.67} />
          <button className="text-white w-[156px] h-[20px] font-semibold text-sm leading-5 ml-2">
            Digital Product Launch
          </button>
        </div>
        <div className="w-full flex mt-8 ml-2">
          <Image src="/images/square.png" width={18.33} height={16.67} />
          <button className="text-white w-[97px] h-[20px] font-semibold text-sm leading-5 ml-2">
            Brand Refresh
          </button>
        </div>
        <div className="w-full flex mt-8 ml-2">
          <Image src="/images/social.png" width={18.33} height={16.67} />
          <button className="text-white w-[151px] h-[20px] font-semibold text-sm leading-5 ml-2">
            Social Media Strategy
          </button>
        </div>
        <div className="w-full flex  ml-2 mt-8">
          <Image src="/images/Add.png" width={18.33} height={16.67} />
          <button className="text-nav-gen w-[114px] h-[20px] font-semibold text-sm leading-5 ml-2">
            Add new project
          </button>
        </div>
      </div>
      <div className="bg-hero-pattern w-[296px] h-[90px] rounded-2xl flex flex-row justify-between items-center p-4 gap-4 box-border absolute bottom-0">
        <Image
          src="/images/navprofile.png"
          width={48}
          height={48}
          className="rounded-[20px]"
        />
        <div className="flex flex-col absolute ml-12">
          <h5 className="tracking-[0.15px] text-white font-plus font-semibold text-base leading-6 flex items-center text-center">John Wick</h5>
          <h6 className="font-medium text-light-green text-xs">Premium</h6>
        </div>
        <Image src="/images/settingnav.png" width={16.16} height={18} className=" left-[20%]"/>
      </div>
    </nav>
  );
};

export default SideNavbar;
