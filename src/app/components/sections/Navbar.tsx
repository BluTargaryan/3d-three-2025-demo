import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-between py-5 mx-auto c-space'>
                <Link href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors duration-300'>
                  Peace
                </Link>
                <button>
                    <FaBars className='w-6 h-6'/>
                </button>
            </div>
        </div>
        </header>
  )
}

export default Navbar