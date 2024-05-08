import React from 'react'
import './carousel.css'
import Indicators from './Indicators'
function Carousel() {
  return (
    <div className='carousel'>
        <div className='heroimg'>
            <img style={{position:'static',margin:'auto'}} src='/Hero.png' alt='Image'/>
            <div className='features'>
                <div className='feature-headline-1'>40%</div>
                <div className='feature-description-1'>Achieved reduction in project execution time by optimising team availability</div>
            </div>

            <div className='chip'>
                <img src='rocket.svg' alt='Image'/>
                <div className='chip-text'>
                    <div className='chip-text-heading'>10 Days</div>
                    <div className='chip-text-description'>Staff Development</div>
                </div>
            </div>

              <div className='features-2'>
                  <div className='feature-headline-2'>$0.5 <span style={{fontFamily: 'Switzer',fontSize: '22.81px',fontWeight: 500,lineHeight: '31.94px',letterSpacing: '0.01em',textAalign: 'left',color: '#A6A3A0'}}>MILLION</span></div>
                  <div className='feature-description-2'>Achieved reduction in project execution time by optimising team availability</div>
              </div>


        </div>
       
       <div className='content'>

        <div className='content-headline'>
            <div className='content-heading'>Enhance fortune 50 company’s insights teams research capabilities</div>
            <Indicators/>
        </div>
        
        <div className='explore-cta'>
            <span style={{padding:'8px'}}>Explore More</span>
            <img src='arrow.svg' alt='Image'/>
        </div>

       </div>

    </div>
  )
}

export default Carousel