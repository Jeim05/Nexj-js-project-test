'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname()

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-10 py-4 bg-[url('/banner.jpg')]">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-16">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image
                src="/next.svg"
                width={120}
                height={100}
                alt="logo"
                className="focus:border-none active:border-none"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <Image
                    src="/hamburguer-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}>
            <ul className="h-screen font-medium md:h-auto items-center text-lg justify-center md:flex ">
              <li className={`pb-6 text-[#51565E]  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-[#2657A4] md:hover:bg-transparent ${pathname == "/" ? 'text-purple-900' : ''}`}>
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className={`pb-6 text-[#51565E]  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-[#2657A4] md:hover:bg-transparent ${pathname == "/about" ? 'text-purple-900' : ''}`}>
                <Link href="/about" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li className={`pb-6 text-[#51565E]  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-[#2657A4] md:hover:bg-transparent ${pathname == "/blog" ? 'text-purple-900' : ''}`}>
                <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                  Blogs
                </Link>
              </li>
              <li className={`pb-6 text-[#51565E]  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-[#2657A4] md:hover:bg-transparent ${pathname == "/contact" ? 'text-purple-900' : ''}`}>
                <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>
              <li className={`pb-6 text-[#51565E]  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-[#2657A4] md:hover:bg-transparent ${pathname == "/projects" ? 'text-purple-900' : ''}`}>
                <Link href="/projects" onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
