import React from 'react'
import Link from 'next/link'

function NavAbout() {
    return (
        <nav className='max-w-7xl text-white mx-auto px-8 py-7'>
            <ul className='flex justify-center mx-auto text-lg divide-x '>
                <li className='px-1 py-2 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-md'>
                    <Link href="/" className='text-[rgb(60,224,247)] py-2 px-3 bg-black'>About me</Link>
                </li>
                <li className='px-3'>
                    <Link href="/">Resume</Link>
                </li>
                <li className='px-3'>
                    <Link href="/">Formation</Link>
                </li>
                <li className='px-3'>
                    <Link href="/">Career</Link>
                </li>
                <li className='px-3'>
                    <Link href="/">Dev Skills</Link>
                </li>
                <li className='px-3'>
                    <Link href="/">Other Skills</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavAbout