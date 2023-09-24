import Link from 'next/link'
import React from 'react'
import { DribbbleIcon, GitHubIcon, LinkedInIcon, PinterestIcon, XIcon } from './Icons'


const NavBar = () => {
  return (
    <>
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
        </nav>

        <div className='w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl rounded-full'>
          HA
        </div>

        <nav className='flex items-center justify-center flex-wrap gap-2'>
            <a className='h-10 w-10' href=""><XIcon/></a>
            <a className='h-10 w-10' href="https://github.com/andradeparrah" target="_blank" ><GitHubIcon/></a>
            <a className='h-10 w-10' href="https://www.linkedin.com/in/horacio-andrade-b7510a133/" target="_blank"><LinkedInIcon/></a>
        </nav>
    </header>
    </>
  )
}

export default NavBar