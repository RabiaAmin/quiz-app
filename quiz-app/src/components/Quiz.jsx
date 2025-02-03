import React, { useState } from 'react'
import QUESTIONS from '../questions'

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  let activeQuestionIndex = userAnswers.length;

  

   function handleSelectAnswers(selectedAnswer){

    setUserAnswers((prev)=>{
        return [...prev, selectedAnswer]
    })
   }



  return (
    <div id='quiz' >

   <div id='question'>
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id='answers'>
        {
            QUESTIONS[activeQuestionIndex].answers.map((answer)=>(

                <li key={answer} className='answer'><button onClick={()=>{handleSelectAnswers(answer)}} >{answer}</button></li>
            ))
        }
      </ul>

    </div>
</div> 
  )
}
