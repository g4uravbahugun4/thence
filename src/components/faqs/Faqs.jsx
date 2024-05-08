import React, { useState } from 'react'

function Faqs() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleQuestion = (index) => {
        if (expandedIndex === index) {
            // If the same question is clicked again, collapse it
            setExpandedIndex(null);
        } else {
            // Expand the clicked question
            setExpandedIndex(index);
        }
    };
    const faqs=[
        {
            question:"Do you offer freelancers?",
            answer: "yes"
        },
        {
            question: "What’s the guarantee that I will be satisfied with the hired talent?",
            answer: "yess"
        },
        {
            question: "Can I hire multiple talents at once?",
            answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        },
        {
            question: "Why should I not go to an agency directly?",
            answer: "yesssss"
        },
        {
            question: "Who can help me pick a right skillset and duration for me? ",
            answer: "yes"
        }

    ]
  return(
      <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          {faqs.map((item, index) => (
              <div key={index} style={{marginTop:'52px',borderRadius:'16px',padding:'10px'}} className='qna-item'>
              
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',cursor:'pointer' }} onClick={() => toggleQuestion(index)}>
                      <div className='question'>{item.question}</div>
                      <img src={expandedIndex === index ? '/less.png' : '/more.png'} alt='Expand' />
                  </div>
                
                  {expandedIndex === index && (
                      <div className='answer'>{item.answer}</div>
                  )}
              </div>
          ))}
      </div>
    )
}

export default Faqs