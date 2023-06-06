import React from "react";
import Image from "next/image";
const Body = () => {
  return (
    <div className=" w-full bg-nav-bg rounded-[20px] mt-2 p-2 mb-8">
      <div className="flex m-2  ">
        <button className="pr-2 ml-4">
          <Image src="/images/sideArrow.png" width={4.65} height={10} />
        </button>
        <h4 className="text-white text-xl landing-8 font-Plus ml-4 font-bold">
          Modern spaceship in cosmos
        </h4>
        <Image
          src="/images/Badge.png"
          width={41}
          height={32}
          className="ml-4"
        />
        <Image
          src="/images/star.png"
          width={16}
          height={16}
          className="ml-[41.5%] w-4 h-4 mt-2"
        />
        <h5 className="text-nav-gen leading-6 font-semibold text-base ml-[5%] mt-1">
          Export
        </h5>
        <Image
          src="/images/download.png"
          width={16}
          height={16}
          className="ml-[4%] h-4 w-4 mt-2"
        />
        <Image src="/images/more.png" width={5} height={14} className="w-[5px] h-3.5 mt-2 ml-[4%]"/>
      </div>
    </div>
  );
};

export default Body;
