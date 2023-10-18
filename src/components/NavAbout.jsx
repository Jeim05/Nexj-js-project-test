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
        <nav className='max-w-7xl mx-auto px-8 py-7'>
            <ul className='flex justify-center items-center mx-auto text-lg gap-6'>
                {navLink.map(({ link, name }) => (
                    <Link key={name} href={link} className={`${pathname == link ? 'bg-[#2657A4] text-white rounded-md  hover:text-black' : ''} text-[#2657A4] py-2 px-6 rounded-lg hover:text-[#51565E] border border-transparent hover:border-gray-300`}>
                        {name}
                    </Link>
                ))
                }
            </ul>
        </nav>
    );
}

export default NavAbout;
