'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavAbout = () => {
    const pathname = usePathname()

    const navLink = [
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "Contact",
            link: "/contact"
        },
    ];

    return (
        <nav className='max-w-7xl text-white mx-auto px-8 py-7'>
            <ul className='flex justify-center items-center mx-auto text-lg gap-6'>
                {navLink.map(({ link, name }) => (
                    <Link key={name} href={link} className={`${pathname == link ? 'bg-white text-black hover:text-[rgb(60,224,247)]' : ''} text-[rgb(60,224,247)] py-2 px-3 hover:text-white`}>
                        {name}
                    </Link>
                ))
                }

            </ul>
        </nav>
    );
}

export default NavAbout;
