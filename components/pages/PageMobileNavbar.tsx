"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { closePageNavbar } from "@/store/reducers/mobileNavSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { gsap } from 'gsap';

const PageMobileNavbar = () => {
	const nodeRef = useRef(null);

	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const pageNavbarState = useAppSelector(
		(state) => state.mobileNav.pageNavbar
	);
    const [shouldRender, setShouldRender] = useState<boolean>(pageNavbarState);

    // On page resize when window width is greater than 768 close mobile navigation
	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth > 768) {
				dispatch(closePageNavbar());
			}
		});

		return () => window.removeEventListener("resize", () => {
            if (window.innerWidth > 768) {
                dispatch(closePageNavbar());
            }
        });
	}, [dispatch, pathname]);

    // Handle the animate in and out of the slider
    useEffect(() => {
        if (pageNavbarState) {
            // Animate in
            setShouldRender(true);
            // Wait for the next frame to ensure the element is in the DOM
            requestAnimationFrame(() => {
                if (nodeRef.current) {
                    gsap.to(nodeRef.current, {
                        y: '0%',
                        ease: 'power3.out',
                        duration: 0.5,
                    });
                }
            });
        } else {
            // Animate out
            gsap.to(nodeRef.current, {
                y: '-100%',
                ease: 'power3.in',
                duration: 0.5,
                onComplete: () => {
                    setTimeout(() => setShouldRender(false), 500);
                },
            });
        }
    }, [pageNavbarState]);

    if (!shouldRender) return null;

	return (
        <aside
            ref={nodeRef}
            className={cn("page-mobile-navbar")}
        >
            <ul className="page-mobile-navbar-menu"></ul>
            <div className="page-mobile-navbar-actions">
                <Link
                    className="link font-medium text-sm text-center text-dark-950 border border-dark-100 rounded-xl py-3 px-4 bg-white hover:bg-dark-50 transition-colors duration-300 ease-in-out"
                    href="/login"
                >
                    Log in
                </Link>
                <Link
                    className="link font-medium text-sm text-center !text-white border border-dark-950 rounded-xl py-3 px-4 bg-dark-950 hover:bg-[#3d3d3d] transition-colors duration-300 ease-in-out"
                    href="/login"
                >
                    See it in action
                </Link>
            </div>
        </aside>
	);
};

export default PageMobileNavbar;
