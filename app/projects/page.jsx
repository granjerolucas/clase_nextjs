"use client"
import React, { useState } from 'react'
import Card from './Card'
import { projectList } from './projectList'
import Link from 'next/link'

export default function page() {
  const [projects, setProjects] = useState(projectList)

  return (
    <div className='container w-3/5 mx-auto flex-col '>
      <h1 className='text-center text-5xl'>
        Projects Showcase
      </h1>
      <main className='flex flex-wrap gap-11 w-full mt-8 justify-center'>

        {projects.map(pro =>
             <Link href={`projects/view/${pro.id}`}>
          <Card
            image={pro.image}
          />   
             
             </Link>
          
        )


        }





      </main>


    </div>

  )
}
