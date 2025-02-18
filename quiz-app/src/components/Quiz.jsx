import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions'

import Question from './Question';
import Summary from './Summary';

export default function Quiz() {

  const [userAnswers, setUserAnswers] = useState([]);
  
  const activeQuestionIndex = userAnswers.length;
  const isQuizCompleted = QUESTIONS.length === userAnswers.length;

   const handleSelectAnswers =  useCallback((selectedAnswer)=>{

   
    setUserAnswers((prev)=>{
        return [...prev, selectedAnswer]
    })

  
   },[])

   const handleSkippedQuestion = useCallback(() => {

    handleSelectAnswers(null)
  },[handleSelectAnswers]);

  
  if(isQuizCompleted){
    return <Summary answers={userAnswers} />
  }

   



  return (
    <div id='quiz' >
 <Question
  key={activeQuestionIndex}
  index={activeQuestionIndex}
  onSkipQuestion={handleSkippedQuestion}
   onSlectAnswer={handleSelectAnswers} 

  />
</div> 
  )
}
