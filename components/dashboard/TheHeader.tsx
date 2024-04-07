"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { toggleMobileNav } from '@/store/reducers/mobileNavSlice';
import { useAppDispatch } from '@/store';

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
                <div className="flex justify-start items-center gap-x-3 cursor-pointer border border-transparent rounded-2xl p-3 md:hover:bg-slate-100 md:hover:border md:hover:border-janna-200 transition-colors duration-300 ease-in-out">
                    <div className="overflow-hidden w-[36px] h-[36px] rounded-full flex justify-center items-center">
                        <Image 
                            src="/images/user-avatar.png"
                            width={36}
                            height={36}
                            alt="User Avatar"
                        />
                    </div>
                    {/* User Details */}
                    <div className="hidden md:flex items-center justify-start gap-x-1">
                        <span className='text-[15px] font-normal text-dark-950'>Ademola Kehinde</span>
                        <span className="icon-[fluent--caret-down-20-filled] text-dark-950"></span>
                    </div>
                </div>
                <button onClick={() => handleToggleMobileNav()} className="md:hidden w-6 h-6 flex-center select-none">
                    <Icon icon="fluent:line-horizontal-3-20-regular" className='w-6 h-6' />
                </button>
            </div>
        </header>
    )
}

export default TheHeader