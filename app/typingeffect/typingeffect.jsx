"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Typingeffect = () => {
  return (
    
    <div>
      <Typewriter
            words={['CODER', 'TECH ENTHUSIAST', 'DESIGNER', 'LEARNER','THINKER']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        
        
          />
      
    </div>
  )
}

export default Typingeffect
