import React from 'react'
import NavAbout from '@/components/NavAbout'

export default function page() {
  return (
    <main className='container mx-auto px-4'>
      <section className='mt-40 bg-black'>
        <div className="container mx-auto px-4 py-2">
          <NavAbout />
        </div>
      </section>
    </main>
  )
}
