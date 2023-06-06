import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="bg-nav-bg flex flex-col items-start p-0 w-full min-h-[110px] rounded-[20px]">
      <div>
        <h4 className="w-[163px] h-[32px] font-Plus font-bold text-xl leading-8 text-white mt-2 ml-4">
          Orbital Oddysey
        </h4>
        <h6 className="text-sm  font-medium leading-5 font-Plus text-header-h6 ml-4">
          Marketing Campaign for a new TV series Launch
        </h6>
      </div>
      <div className="flex absolute left-[74%] top-4">
        <Image src="/images/header1.png" width={32} height={32} />
        <Image src="/images/header2.png" width={32} height={32} />
        <Image src="/images/header3.png" width={32} height={32} />
        <Image src="/images/header4.png" width={32} height={32} />
        <Image src="/images/header5.png" width={32} height={32} />
      </div>
      <div className="flex absolute left-[88%] top-6">
        <Image src="/images/share.png" width={13.33} height={15} />
        <button className="font-semibold text-sm text-nav-gen">Share</button>
      </div>
      <div className="absolute left-[94%] top-4">
        {" "}
        <Image
          src="/images/Buttonicon.png"
          height={40}
          width={40}
          className=""
        />
      </div>

      <div className="flex  mt-3 ml-4">
        <Image src="/images/greenTriangle.png" width={15} height={15} />
        <h5 className="text-search-button font-semibold text-sm leading-5 pl-2">
          Artificium
        </h5>
      </div>
      <div className="flex absolute mt-[5%] ml-[12%]">
        <Image src="/images/message.png" width={15} height={15} />
        <h5 className="text-header-h6 font-semibold text-sm leading-5 pl-2">
          Chat
        </h5>
      </div>
      <div className="flex absolute top-[11.5%] ml-[21%]">
        <Image src="/images/library.png" width={15} height={15} />
        <h5 className="text-header-h6 font-semibold text-sm leading-5 pl-2">
          Library
        </h5>
      </div>
      <div className="bg-under-Line h-2 shadow-box-shadow rounded-t mt-2   top-[14.8%] ml-4 w-[92px]">

      </div>
    </div>
  );
};

export default Header;
