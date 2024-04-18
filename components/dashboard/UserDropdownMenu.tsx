"use client"

import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { useAppSelector } from '@/store/hooks';
import { logOut } from '@/store/reducers/auth';
import { clearUser } from '@/store/reducers/user';
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/utils/constants";
import type { User } from '@/types/User';

const links = [
    { href: '/account-settings', label: 'Set status' },
    { href: '/support', label: 'Profile & account' },
    { href: '/license', label: 'Settings' },
    { href: '/sign-out', label: 'Sign out' },
]

const UserDropdownMenu = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const userCredentials = useAppSelector((state) => state.user.user) as User;

    const getUserFullname = () => {
        return `${userCredentials.first_name} ${userCredentials.last_name}`;
    }

    /**
     * @decription Clear cookie storage
     */
    const clearTokenFromCookie = () => {
        document.cookie = "token=;path=/;max-age=0;Secure";
    };

    /**
     * @decription Handle the log out of user
     */
    const logOutUser = async () =>{
        clearTokenFromCookie() // Clear token from cookie storage

        dispatch(logOut());
        dispatch(clearUser());

        await router.replace(PAGE_ROUTES.LOGIN_ROUTE)
    }

    return (
        userCredentials  
            ? (<Menu as="div" className="relative inline-block text-left">
                <Menu.Button>
                    <div className="flex justify-start items-center gap-x-3 cursor-pointer border border-transparent rounded-2xl p-3 md:hover:bg-slate-100 md:hover:border md:hover:border-janna-200 transition-colors duration-300 ease-in-out">
                        <div className="overflow-hidden w-[36px] h-[36px] rounded-full flex justify-center items-center">
                            {userCredentials.profile_photo_url ? (
                                <Image 
                                    src={userCredentials.profile_photo_url}
                                    width={36}
                                    height={36}
                                    alt="User Avatar"
                                />
                                ) : (
                                    <Image 
                                        src="/images/no-user.png"
                                        width={36}
                                        height={36}
                                        alt="User Avatar"
                                    />
                                )
                            }
                        </div>
                        {/* User Details */}
                        <div className="hidden md:flex items-center justify-start gap-x-1">
                            <span className='text-[15px] font-normal text-dark-950'>{getUserFullname()}</span>
                            <span className="icon-[fluent--caret-down-20-filled] text-dark-950"></span>
                        </div>
                    </div>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="dropdown-menu">
                        <div className="block px-4 py-2 mb-1.5 whitespace-nowrap border-b border-gray-100">
                            <div className="flex items-center">
                                <div className="avatar avatar-sm avatar-circle">
                                    {userCredentials.profile_photo_url ? (
                                        <Image 
                                            src={userCredentials.profile_photo_url}
                                            width={38.5}
                                            height={38.5}
                                            alt="User Avatar"
                                        />
                                        ) : (
                                            <Image 
                                                src="/images/no-user.png"
                                                width={38.5}
                                                height={38.5}
                                                alt="User Avatar"
                                            />
                                        )
                                    }
                                </div>
                                <div className="grow ml-4">
                                    <h5 className="font-semibold text-sm leading-5 text-dark-950 mt-0">{getUserFullname()}</h5>
                                    <p className='text-slate-600 text-sm/5 font-normal'>{userCredentials.email}</p>
                                </div>
                            </div>
                        </div>
                        {links.slice(0, 3).map(({label, href}) => (
                            <Menu.Item key={label}>
                                {({ active }) => (
                                    <Link
                                        className={`${active && '!bg-janna-100'} dropdown-item`}
                                        href={href}
                                    >
                                        {label}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                        <div className="dropdown-divider"></div>
                        {links.slice(3, 4).map(({label}) => (
                            <Menu.Item key={label}>
                                {({ active }) => (
                                    <button
                                        onClick={() => logOutUser()}
                                        className={`${active && '!bg-janna-100'} dropdown-item`}
                                    >
                                        {label}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>) :
        null
    )
}

export default UserDropdownMenu;