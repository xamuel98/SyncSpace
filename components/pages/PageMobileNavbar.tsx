"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { closePageNavbar } from '@/store/reducers/mobileNavSlice';
import { useAppDispatch, useAppSelector } from '@/store'

const PageMobileNavbar = () => {
    const pathname = usePathname();
    const dispatch = useAppDispatch();

    const pageNavbarState = useAppSelector((state) => state.mobileNav.pageNavbar);

	useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                dispatch(closePageNavbar());
            }
        })

        dispatch(closePageNavbar())
    }, [pathname]);

    return (
        <aside className={cn('page-mobile-navbar', {'page-mobile-navbar-open': pageNavbarState})}>
            <ul className='page-mobile-navbar-menu'>

            </ul>
            <div className="page-mobile-navbar-actions">
                <Link className='link font-medium text-sm text-center text-dark-950 border border-dark-100 rounded-xl py-3 px-4 bg-white hover:bg-dark-50 transition-colors duration-300 ease-in-out' href='/login'>
                    Log in
                </Link>
                <Link className='link font-medium text-sm text-center !text-white border border-dark-950 rounded-xl py-3 px-4 bg-dark-950 hover:bg-[#3d3d3d] transition-colors duration-300 ease-in-out' href='/login'>
                    See it in action
                </Link>
            </div>
        </aside>
    )
}

export default PageMobileNavbar