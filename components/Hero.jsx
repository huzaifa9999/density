"use client"
import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <>
      <div className="flex  justify-center items-center">
        <div className="flex w-[80%] h-[75vh] m-[3rem] p-[1rem] items-center justify-evenly flex-row rounded-[30px] z-[-1] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        
        <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
        ease: [0, 0.70, 0.2, 1.05]}}
        >
 
        <div className="flex flex-row w-[30px] p-[4px] m-[4rem] text-black">

<h1 className="text-[3rem] font-semibold text-center">

Welcome to <span className="text-[3.5rem] font-bold">DENSITY</span></h1>


        </div>
        </motion.div>
        <div className="flex m-[3rem] p-[1rem]">

        <motion.div
 className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
>
       
        <Image
      src="/intro.png"
      alt="Picture of the author"
      width={500}
      height={500}
	  quality={100}
    />
        
        </motion.div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
