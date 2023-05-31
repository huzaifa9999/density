"use client";
import Image from "next/image";
import { Roll } from "react-reveal";
import Section from "./Section";
const Intro = () => {
  return (
    <div className="flex  sm:flex sm:flex-col justify-center items-center">
      <div className="flex w-[80%]  m-[3rem] p-[1rem] items-center justify-evenly flex-col border-2 border-white">
        <Roll left>
          <div className="flex sm:flex-row flex-col m-[2rem] p-[2rem] items-center justify-between">
            <Image
              src="/intro.png"
              alt="Picture of the author"
              width={250}
              height={250}
              quality={100}
            />

            <h1 className="text-white font-bold text-[2rem] ">
              {" "}
              WELL,
              <br></br>
              <span className="text-[4rem] font-bold text-green-400 ">
                Who are we exactly
              </span>{" "}
            </h1>
          </div>
        </Roll>
        <Section>
          <div className="flex  flex-col justify-left items-center bottom-[3rem] top-[3rem] p-[3rem]">
            <h2 className="text-white text-[2rem] font-bold text-left">
              {" "}
              We are driven to provide excellent solutions to the most mundane
              yet overwhelming problems
            </h2>
            <br />

            <h3 className="text-green-400 text-[1.75rem] text-right font-semibold ">
              {" "}
              Come join us to have a look at what we bring to the plate , try
              our sevices now
            </h3>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Intro;
