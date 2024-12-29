"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {

    const [open, setOpen] = useState(false)
  return (
    <div>
        <Image alt='' src={'/menu.png'} height={28} width={28} className='cursor-pointer ' onClick={() => setOpen((before) => !before)} />

        {open && (
            <div className='absolute bg-black  left-0 top-20 text-white w-full h-[calc(100vh-80px)] flex flex-col gap-8 justify-center items-center'> 
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Shop</Link>
                <Link href={'/'}>Deals</Link>
                <Link href={'/'}>Contact</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Logout</Link>
                <Link href={'/'}>Cart (1)</Link>
                 </div>
        )}
    </div>
  )
}

export default Menu