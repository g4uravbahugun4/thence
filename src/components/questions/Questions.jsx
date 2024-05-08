import React from 'react'
import './question.css'
import Faqs from '../faqs/Faqs'
function Questions() {
  return (
      <div className='qna'>
        
        <div style={{display:'flex',flexDirection:'column',gap:'100px'}}>
        <div className='heading-question'>
          <div className='title-question'>Whats on your mind</div>
          <div className='description-question'>Ask Questions</div>
      </div>
      <img src='/Union.svg' alt='abc'/>
      </div>
      <Faqs/>
      </div>
  )
}

export default Questions