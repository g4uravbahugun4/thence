import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Questions from '../components/questions/Questions'
import Footer from '../components/footer/Footer'

function Home() {
  return (
    <>
          <Navbar />
          <Hero/>
          <Questions />
          <Footer />
      </>
  )
}

export default Home