import Link from 'next/link'
import React from 'react'
import Menu from './menu'

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative '>
            <div className='flex h-full items-center justify-between'>
                {/* MOBILE */}
            <Link href={'/'}>
            <p className='tracking-wide text-2xl'>Sure Store</p></Link>
            <Menu />
            </div>

        </div>
    )
}

export default Navbar