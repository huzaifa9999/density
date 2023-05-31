"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import Data from "./data";
import Card from "./Card";
import Fade from 'react-reveal/Fade';
const Reviews = () => {
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
  };
  return (
    <>
<Fade cascade>
    <h2 className="font-semibold text-green-400 text-[3rem] text-center"> Let our reviews speak the truth</h2>
    </Fade>
      <div className="flex justify-center items-center p-[5rem] m-[5rem]">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          autoPlay
        >
           {Data.map((e)=>{
       return (
       <Card name={e.name} title={e.title}/>
     );})}
        </AliceCarousel>
      </div>
    </>
  );
};

export default Reviews;
