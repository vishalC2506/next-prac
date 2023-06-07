'use client'
import React, { useState,useEffect} from "react";
import Image from "next/image";
const Search = () => {
  const [inputValue,setInputValue]=useState('');
 
    const handleInputChange=(e)=>{
      setInputValue(e.target.value);
      console.log(inputValue)
    }
 
  
  return (
    <div className="w-full h-[76px] sm:h-[96px] bg-nav-bg  rounded-[20px] flex flex-row items-center align-center gap-4 p-4 absolute bottom-6">
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
        className="bg-nav-bg w-[75%]  border-slate-900 rounded-2xl h-[24px] pl-4 opacity-50 text-white sm:h-[47px] "
        onChange={handleInputChange}
        value={inputValue}
      />
      <Image
        src="/images/attachicon.png"
        width={18}
        height={10.5}
        alt="load err"
        className="h-[12.5px] w-[22px] ml-2"
       
      />
      <button className="">
        <Image
          src="/images/sendbutton.png"
          alt="load err"
          width={48}
          height={48}
          className=""
        />
      </button>
    </div>
  );
};

export default Search;
