'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Menu from '../../../../public/assets/menu.svg'
import Close from '../../../../public/assets/close.svg'
import { navLinks } from '@/constants'

const navList = () =>{
  return(
    <ul className='flex flex-col lg:flex-row items-center gap-8'>
      {navLinks.map((item) => ( 
        <li key={item.id}>
          <Link href={item.href} className='text-neutral-400 hover:text-white transition-colors duration-300'>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-between py-5 mx-auto c-space'>
                <Link href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors duration-300'>
                  Peace
                </Link>
                <button 
                className='text-neutral-400 hover:text-white transition-colors duration-300
                focus:outline-none lg:hidden flex 
                '
                aria-label='Toggle Menu'
                onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <Image src={Close} alt='toggle menu' width={24} height={24} />
                  ) : (
                    <Image src={Menu} alt='toggle menu' width={24} height={24} />
                  )}
                </button>

                <nav className={`${isOpen ? 'block' : 'hidden lg:block'} absolute py-10 px-4 top-16 left-0 right-0 bg-black/90 backdrop-blur-sm flex items-center gap-8 lg:relative lg:top-0 lg:left-0 lg:right-0 lg:bg-transparent lg:flex-row lg:items-center lg:gap-8 lg:py-0 lg:px-0 lg:backdrop-blur-none`}>
                  {navList()}
                </nav>
            </div>
        </div>
        </header>
  )
}

export default Navbar