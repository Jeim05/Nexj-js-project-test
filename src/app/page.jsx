'use client'
import React from 'react'
import Slider from "../components/Slider";
import Image from 'next/image';


export default function IndexPage() {
  return (
    <main className='App'>
      <section className="bg-[url('/banner.jpg')]">
        <div className="container mx-auto px-2 py-10">
          <div className='max-w-7xl px-8 md:py-12 flex flex-wrap mx-auto mt-14'>
            <div className='flex-1'>
              <h1 className='font-semibold text-5xl pr-28 py-4 leading-tight'>This is only a test <span className='text-[#2657A4]'> project</span>. </h1>
              <p className='pr-48 py-2 text-lg text-[#51565E] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla nulla etiam turpis quam diam et.
                Arcu nisi, sed aenean sit nisl.</p>
                <button className='bg-[#2657A4] text-white py-2 px-3 rounded-md'>Try A Live Demo</button>
            </div>
            <div className='flex-1'>
              <Image src="/banner-image.png" width={500} height={300} alt='' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-screen-xl mx-auto p-4 '>
          <Slider />
        </div>
      </section>

    </main>

  )
}
