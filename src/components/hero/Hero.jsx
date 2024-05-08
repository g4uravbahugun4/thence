import React from 'react'
import './hero.css'
import Carousel from '../carousel/Carousel'
function Hero() {
  return (
    <div className='main'>
        <div className='heading'>
            <div className='title'>Success Stories</div>
            <div className='description'>Every success journey we have encountered.</div>
        </div>
        <Carousel/>
    </div>
  )
}

export default Hero