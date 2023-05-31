// import React from 'react'
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Intro from "@/components/Intro"
import AlternateTimeline from "@/components/timeline"
import Reviews from "@/components/reviews"
import Footer from "@/components/footer"
const Home = () => {
  return (
  <>
    <Nav/>
    <Hero/>
    <Intro/>
    <AlternateTimeline/>
    <Reviews/>
    <Footer/>
  </>
  )
}

export default Home