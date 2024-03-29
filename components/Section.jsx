"use client"
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

const Section = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
    <span
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.20, 0.60, 0.60, 2) 0.9s"
      }}
    >
      {children}
    </span>
  </section>
  )
}

export default Section