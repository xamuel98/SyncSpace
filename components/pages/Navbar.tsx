"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { togglePageNavbar } from '@/store/reducers/mobileNavSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const Navbar = () => {
    const dispatch = useAppDispatch();

    const pageNavbarState = useAppSelector((state) => state.mobileNav.pageNavbar);

    /**
     * @description Handle navigation sidebar open and closing on mobile
     */
    const handleTogglePageNavbar = () => {
        dispatch(togglePageNavbar());
    }

    return (
        <header className='fixed inset-0 z-50 bg-white flex items-center justify-between border border-[#F3F4F7] max-h-[5rem] px-6 lg:px-[3.125rem] py-4'>
            <Link href="/">
                <Image 
                    src="/images/syncspace-logo-black.svg"
                    width={131}
                    height={35}
                    alt="SyncSpace Black Logo"
                />
            </Link>
            <div className="">
                <div className="hidden md:flex justify-start items-center gap-x-3">
                    <Link className='link font-medium text-sm text-dark-950 border border-dark-100 rounded-xl py-3 px-4 bg-white hover:bg-dark-50 transition-colors duration-300 ease-in-out' href="/login">
                        Log in
                    </Link>
                    <Link className='link font-medium text-sm !text-white border border-dark-950 rounded-xl py-3 px-4 bg-dark-950 hover:bg-[#3d3d3d] transition-colors duration-300 ease-in-out' href="/register">
                        See it in action
                    </Link>
                </div>
                <button onClick={() => handleTogglePageNavbar()} className="md:hidden w-6 h-6 flex-center select-none">
                    { !pageNavbarState ? <Icon icon="fluent:line-horizontal-3-20-regular" className='w-6 h-6' /> : <Icon icon="fluent:dismiss-20-regular" className='w-6 h-6' /> }
                    
                </button>
            </div>
        </header>
    )
}

export default Navbar