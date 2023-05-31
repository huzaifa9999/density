import Image from 'next/image'
import React from 'react'
const Footer = () => {
  return (
   <>
    <div className='flex flex-col p-[3rem] m-[4rem] '>
    <div style={{borderRadius: '30px', overflow: 'hidden'}}>
<Image
    src="/av1.jpg"
    height="175"
    width="600"
    alt="hey"
/>
</div>
<br/>
        <h2 className='text-center text-[2rem]'>Still Thinking?
        </h2>
<br/>
        <h3 className='text-center text-[1.75rem]'>Give us a call at 9988776655</h3>
        <h2 className='text-center text-[1.75rem]'>Always there for you </h2>
    </div>
   </>
  )
}

export default Footer