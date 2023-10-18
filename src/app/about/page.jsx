import React from 'react'
import Characteristics from '@/components/Characteristics'
import NavAbout from '@/components/NavAbout'


export default function page() {
    return (
        <main className='mb-20'>
            <section className='mt-40'>
                <div className="container mx-auto px-4 py-2">
                    <NavAbout />
                </div>
            </section>
            <section>
                <div className='container mx-auto px-4 py-6'>
                    <div className='max-w-5xl mx-auto mt-8'>
                        <Characteristics />
                    </div>
                </div>
            </section>
        </main>
    )
}
