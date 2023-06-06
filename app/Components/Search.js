import React from "react";
import Image from "next/image";
const Search = () => {
  return (
    <div className="w-full h-[96px] bg-nav-bg mt-3 rounded-[20px] flex flex-row items-center gap-6 p-6">
      <Image
        src="/images/micIcon.png"
        width={12}
        height={18}
        alt="load err"
        className="w-3 h-[18px] ml-4"
      />
      <input
        type="text"
        placeholder="What you want to do with this asset?"
        className="bg-nav-bg w-[75%]  border-slate-900 rounded-2xl h-7 pl-4 opacity-50"
      />
      <Image src="/images/attachicon.png" width={18} height={10.5} alt='load err' className="h-[10.5px] w-[18px] ml-6" />
      <button><Image src="/images/sendbutton.png" alt="load err" width={48} height={48} className="w-12 h-12 ml-12" /></button>
    </div>
  );
};

export default Search;
