import React from 'react'
import Card from './Card'

export default function page() {
  return (
   <div className='container w-3/5 mx-auto flex-col '>
    <h1 className='text-center text-5xl'>
        Projects Showcase
    </h1>
     <main className='flex flex-wrap gap-11 w-full mt-8'>
       
       <Card/>
       <Card/>
       


        </main> 
     

   </div>

  )
}
