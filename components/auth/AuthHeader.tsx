"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { MouseEventHandler, useState } from 'react'

const AuthHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = (): MouseEventHandler<HTMLSpanElement> | undefined => {
        setIsDropdownOpen(!isDropdownOpen);
        return;
    }

    return (
        <header className='fixed inset-0 z-50 bg-white flex items-center justify-between border border-[#F3F4F7] max-h-[6.1875rem] px-6 lg:px-[3.125rem] py-8'>
            <Image 
                src="/images/syncspace-logo-black.svg"
                width={131}
                height={35}
                alt="SyncSpace Black Logo"
            />
            <div className="relative block sm:hidden">
                <button onClick={() => toggleDropdown()} className='flex link font-medium text-sm gap-2 items-center'>
                    <span>Resources</span>
                    <span className="icon-[fluent--arrow-circle-down-12-filled] text-dark-950"></span>
                </button>

                {
                    isDropdownOpen ? 
                        <div className="w-full fixed top-[6.1875rem] right-0 left-0 p-4 bg-white shadow-xl resources-dropdown">
                    <ul className='w-full flex flex-col'>
                        <li className='pb-4 px-0 border-b border-[#e7e7e7'>
                            <Link className='flex justify-between items-center link font-medium text-sm' href="/resources/blog">
                                <span>Visit our blog</span>
                                <span className="icon-[fluent--arrow-up-right-24-regular] text-dark-950"></span>
                            </Link>
                        </li>
                        <li className='py-4 px-0'>
                            <Link className='flex justify-between items-center link font-medium text-sm' href="/resources/faqs">
                                <span>See more FAQs</span>
                                <span className="icon-[fluent--arrow-up-right-24-regular] text-dark-950"></span>
                            </Link>
                        </li>
                    </ul>
                        </div>
                        :
                        null
                }
            </div>
            <div className="hidden sm:flex justify-start items-center gap-x-7 lg:gap-x-12">
                <Link className='link font-medium text-sm' href="/resources/blog">Visit our blog</Link>
                <Link className='link font-medium text-sm' href="/resources/faqs">See more FAQs</Link>
            </div>
        </header>
    )
}

export default AuthHeader