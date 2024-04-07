"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/utils/constants'
import { SidebarLink } from '@/types/Sidebar'
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

const TheSidebar = () => {
    const pathname = usePathname();

    return (
        <aside className='sidebar'>
            <ul className='sidebar-items'>
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
    )
}

export default TheSidebar