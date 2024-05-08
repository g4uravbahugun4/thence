import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
          
          <div style={{ fontFamily: 'Manrope', fontSize: '18px', fontWeight: '500', lineHeight: '19.8px', textAlign: 'left' }}>&#169; Talup 2023. All rights reserved</div>
          
          <div style={{display:'flex',gap:'50px'}}>
            <div>Terms & Condition</div>
            <div>Privacy Policy</div>

          </div>
    </div>
  )
}

export default Footer