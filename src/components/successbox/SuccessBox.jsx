import React from 'react'
import './successbox.css'
function SuccessBox({timeLeft}) {
    
  return (
    <>
    <div className='successbox'>
        <img src='/success.png' alt='Success'/>
          <div className='heading'>
              <div className='title'>Success Submitted</div>
              <div style={{marginTop:'30px'}} className='description'>Congratulations</div>
              <div className='success-message'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</div>   
          </div>
       
    </div>

    <div className='redirect-msg'>Redirecting you to Homepage in <span className='time'> {timeLeft} Seconds</span></div>  
    </>
  )
}

export default SuccessBox