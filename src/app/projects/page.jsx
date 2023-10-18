import React from 'react'
import Project from '@/components/Projects'
import NavAbout from '@/components/NavAbout'


export default function page() {
  return (
    <main>
      <section className='mt-40'>
        <div className="container mx-auto px-4 py-2">
          <NavAbout />
        </div>
      </section>
      <Project />
    </main>
  )
}
