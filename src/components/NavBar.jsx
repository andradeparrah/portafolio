import Link from 'next/link'
import React from 'react'
import DefaultDropdown from './InlineDropdown'


const NavBar = () => {
  return (
    <>
    <header className='flex items-center justify-between border-b border-gray-400 py-8 px-10'>
        <nav className='flex font-bold gap-2 '>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
        <div className='w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl rounded-full'>
        <Link href="/">HA</Link>
        </div>

        <nav className='flex items-center justify-center flex-wrap gap-2'>
            <DefaultDropdown/>
        </nav>

        
    </header>
    </>
  )
}

export default NavBar