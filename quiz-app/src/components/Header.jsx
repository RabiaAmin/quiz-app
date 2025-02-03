import React from 'react'
import logoImage from '../assets/quiz-logo.png'

export default function Header() {
  return (
     <header>
        <img src={logoImage} alt="logo" />
        <h1>Quize App</h1>
     </header>
  )
}
