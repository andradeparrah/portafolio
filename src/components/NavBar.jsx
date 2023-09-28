import Link from 'next/link'
import React from 'react'
import DefaultDropdown from './InlineDropdown'


const NavBar = () => {
  return (
    <>
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>

        <div className='w-16 h-16 bg-indigo-600 text-white flex items-center justify-center font-bold text-2xl rounded-full hover:p'>
          HA
        </div>

        <nav className='flex items-center justify-center flex-wrap gap-2'>
            <DefaultDropdown/>
        </nav>

        
    </header>
    </>
  )
}

export default NavBar