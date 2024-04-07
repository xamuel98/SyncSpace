"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/utils/constants'
import { SidebarLink } from '@/types/Sidebar'
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { closeMobileNav } from '@/store/reducers/mobileNavSlice';
import { useAppSelector, useAppDispatch } from '@/store'

const MobileNav = () => {
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    
    const mobileNavState = useAppSelector((state) => state.mobileNav.isMobileNavOpen);

    /**
     * @description Handle closing sidebar navigation on mobile
     */
    const handleCloseMobileNav = () => {
        dispatch(closeMobileNav());
    }

	useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                dispatch(closeMobileNav());
            }
        })

        dispatch(closeMobileNav())
    }, [pathname]);

    return (
        <>
            <aside className={cn('mobile-nav', {'mobile-nav--open': mobileNavState})}>
                <div className="flex w-full justify-end items-center pt-4">
                    <button onClick={() => handleCloseMobileNav()} className='flex-center space-x-2 border border-slate-200 rounded-full p-2 font-normal text-sm mr-6'>
                        <span className="icon-[fluent--dismiss-24-regular] text-dark-950 w-4 h-4"></span>
                        <span>Close</span>
                    </button>
                </div>
                <ul className='h-full sidebar-items'>
                    {
                        sidebarLinks && Array.isArray(sidebarLinks) ?
                            sidebarLinks.map(({name, path, icon}: SidebarLink, index: number) => {
                                const linkIsActive = pathname === path;

                                return (
                                    <li key={index} className={cn('sidebar-item', {'sidebar-item--active': linkIsActive})}>
                                        <Link href={path} className={cn('sidebar-item-link', {'sidebar-item-link--active': linkIsActive})}>
                                            <Icon icon={`${icon}${linkIsActive ? '-filled' : '-regular'}`} className={cn('sidebar-item-link--icon', {'text-dark-950': linkIsActive})} />
                                            <span>{name}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        :
                            null
                    }
                </ul>
            </aside>

            { mobileNavState && <div className="mobile-overlay"></div> }
        </>
    )
}

export default MobileNav