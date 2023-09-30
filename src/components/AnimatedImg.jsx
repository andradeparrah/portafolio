'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

const desdeIzquierda={
    initial:{
        opacity:0,
        x:-50,
    }, 
    animate:{
        opacity:1,
        x:0,
        transition:{
            duration:3,
        }
    }
}

export const AnimatedImg = ({src}) => {
  return (
    <>
              <motion.div initial='initial' animate='animate' variants={desdeIzquierda} className='w-full md:w-1/2 '>
            <Image src={src} width="500" height="500" alt='post'/>
          </motion.div>
    </>
  )
}
