import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex  justify-center items-center">
      <div className="flex w-[80%]  m-[3rem] p-[1rem] items-center justify-evenly flex-col rounded-[60px] z-[-1] bg-gradient-to-r from-indigo-600 from-10% via-sky-600 via-30% to-emerald-600 to-90%">
        <div className="flex flex-row m-[3rem] p-[2rem] items-center justify-between">
          <Image
            src="/intro.png"
            alt="Picture of the author"
            width={300}
            height={300}
            quality={100}
          />

          <h1 className="text-black font-bold text-[2rem] ">
            {" "}
            WELL,
            <br></br>
            <span className="text-[4rem] font-bold text-green-400 ">
              Who are we exactly
            </span>{" "}
          </h1>
        </div>


<div className="flex  flex-col justify-left items-center bottom-[3rem] top-[3rem] p-[3rem]">
    <h2 className="text-black text-[2rem] font-bold text-left"> We are driven to provide excellent solutions to the most mundane yet overwhelming problems</h2>
    <br/>

    <h3 className="text-black text-[1.75rem] text-right font-semibold "> Come join us to have a look at what we bring to the plate , try our sevicecs now</h3>
</div>    
      </div>
    </div>
  );
};

export default Intro;
