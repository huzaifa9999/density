// import Image from 'next/image'
import React from "react";
// import background from "../public/bg-1.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="flex  justify-center items-center">
        <div className="flex w-[80%] h-[75vh] m-[3rem] p-[1rem] items-center justify-evenly flex-row rounded-[60px] z-[-1] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="flex flex-row w-[30px] p-[4px] m-[4rem] text-black">
<h1 className="text-[3rem] font-bold">Mastering things to master emotions</h1>
        </div>
        <div className="flex m-[3rem] p-[1rem]">

        <Image
      src="/avatar-1.png"
      alt="Picture of the author"
      width={500}
      height={500}
	  quality={100}
    />
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
