'use client'
import React from 'react'
import Slider from "../components/Slider";
import Image from 'next/image';


export default function IndexPage() {
  return (
    <main className='App'>
      <div className='max-w-screen-xl mx-auto p-4 '>
      <Slider />
      </div>
    </main>

  )
}
