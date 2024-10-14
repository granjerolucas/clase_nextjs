import React, { useState } from 'react'
import { projectList } from './projectList'
export default function Card({image}) {
  
  
  return (
    <div className='card w-80 h-96 rounded-3xl overflow-hidden'>
    <figure className='w-full h-full'>
   <img src={image} 
    className='w-full h-full  object-cover'
   alt="" />
    </figure>


    </div>
  )
}
