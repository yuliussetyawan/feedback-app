import React from 'react'

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className='feedback-list'>
   
      
    </div>
  )
}

export default FeedbackList
