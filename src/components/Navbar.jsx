import React from 'react'
import assets from '../assets/assets'

function Navbar({theme, setTheme}) {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-white'>

        <img className='w-32 sm:w-40' src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="logo" />

        <div className='text-gray-700 dark:text-white sm:text-sm max-sm:60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all
'>
            <a href="#" className='sm:hover:border-b'>Home</a>
            <a href="#Services" className='sm:hover:border-b'>Services</a>
            <a href="#Our-Work" className='sm:hover:border-b'>Our Work</a>
            <a href="#Contact-Us" className='sm:hover:border-b'>Contact Us</a>
        </div>

    </div>
  )
}

export default Navbar