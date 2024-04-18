"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import UserDropdownMenu from './UserDropdownMenu'
import { Icon } from '@iconify/react';
import { toggleMobileNav } from '@/store/reducers/mobileNavSlice';
import { useAppDispatch } from '@/store/hooks';

const TheHeader = () => {
    const dispatch = useAppDispatch();

    /**
     * @description Handle navigation sidebar open and closing on mobile
     */
    const handleToggleMobileNav = () => {
        dispatch(toggleMobileNav());
    }

    return (
        <header className='fixed inset-0 z-50 bg-white flex items-center justify-between border-b border-[#F3F4F7] max-h-[5rem] px-6 lg:px-[3.125rem] py-4'>
            <Link href="/">
                <Image 
                    src="/images/syncspace-logo-black.svg"
                    width={131}
                    height={35}
                    alt="SyncSpace Black Logo"
                />
            </Link>
            <div className="flex justify-end items-center">
                <UserDropdownMenu />
                <button onClick={() => handleToggleMobileNav()} className="md:hidden w-6 h-6 flex-center select-none">
                    <Icon icon="fluent:line-horizontal-3-20-regular" className='w-6 h-6' />
                </button>
            </div>
        </header>
    )
}

export default TheHeader