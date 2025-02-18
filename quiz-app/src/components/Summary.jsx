import React from 'react'
import quizCompleted from '../assets/quiz-Complete.png'
import QUESTIONS from '../questions'


export default function Summary({answers}) {
  const skippedAnswers = answers.filter((answer)=>answer === null);
  const correctAnswers = answers.filter((answer,index)=>answer === QUESTIONS[index].answers[0]);

  const skippedAnswersShare = Math.round((skippedAnswers.length/answers.length)*100);
  const correctAnswersShare = Math.round((correctAnswers.length/answers.length)*100);
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
  return (
      <div id="summary">
            <img src={quizCompleted} alt="quiz completed" />
            <h2>Quiz Completed</h2>

        <div id="summary-stats">
            <p>
                <span className='number'>{skippedAnswersShare}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctAnswersShare}%</span>
                <span className='text'>Correct</span>
            </p>
            <p>
                <span className='number'>{wrongAnswersShare}%</span>
                <span className='text'>Wrong</span>
            </p>
        </div>
        <ol>
            {
                answers.map((answer,index)=>{
                    let cssClass = 'user-answer';

                    if(answer === null){
                        cssClass += ' skipped'
                    }else if(answer === QUESTIONS[index].answers[0]){
                        cssClass += ' correct'
                    }else{
                        cssClass += ' wrong'
                    }
                 return (
                    <li key={index}>
                       <h3>{index+1}</h3>
                       <p className='question'>{QUESTIONS[index].text}</p>
                       <p className={cssClass}>{answer}</p>
                    </li>
                 )
                })
            }
        </ol>
       </div>
  )
}
