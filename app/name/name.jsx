"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Name = () => {
  return (
    <div>
        <motion.div className='text-amber-100'
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1
        }}
        >
        
        SABYA<span className='text-gray-900'>SACHI</span>
       </motion.div>
       
       
    </div>
    
    
  )
}

export default Name
