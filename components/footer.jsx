"use client"
import Image from 'next/image'
// import Slide from 'react-reveal/Slide';
import React from 'react'
import Section from './Section'
const Footer = () => {
  return (
   <>
    <div className='flex flex-col p-[3rem] m-[4rem] '>
    <div style={{borderRadius: '30px', overflow: 'hidden'}}>
    <Section>
<Image
    src="/av1.jpg"
    height="175"
    width="600"
    alt="hey"
/></Section>
</div>
<br/>
        <h2 className='text-center text-[2rem]'>Still Thinking?
        </h2>
<br/>
      <Section>
        <h3 className='text-center text-[1.75rem]'>Give us a call at 9988776655</h3>
        <h2 className='text-center text-[1.75rem]'>Always there for you </h2>
        </Section>
        {/* </Slide> */}
    </div>
   </>
  )
}

export default Footer