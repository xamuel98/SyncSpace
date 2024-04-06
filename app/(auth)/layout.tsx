"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import AuthHeader from '@/components/auth/AuthHeader'
import { gsap } from 'gsap';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	const collageRef = useRef(null);

	useEffect(() => {
		const avatars = gsap.utils.toArray('.collage-avatar', collageRef.current);
        
        gsap.fromTo(avatars, {
            opacity: 0,
            y: 20, // Initial y offset
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.2, // Delay between each avatar animation
            ease: 'power3.inOut',
            duration: 1, // Duration of each animation
        });
    }, []);

	// useEffect(() => {
	// 	gsap.to("#gradient1", {
	// 		duration: 2,
	// 		attr: { x1: "100%" },
	// 		repeat: -1,
	// 		yoyo: true,
	// 		ease: "none"
	// 	  });
	// }, []);

	return (
		<main className='relative w-full'>
			<AuthHeader />
			<section className='relative min-h-screen'>
				<aside className='bg-white w-full sm:w-[70%] lg:w-[45%] mx-auto lg:mx-0 min-h-screen max-xs:px-[24px] sm:px-[30px] lg:px-[50px] 2xl:px-[132px] auth-layout--pt pb-10'>
					{children}
				</aside>
				<aside className='fixed right-0 top-0 bottom-0 bg-[#FFFFF5] w-full lg:w-[55%] h-screen hidden lg:flex flex-col auth-layout--pt overflow-hidden'>
					<div className="user-collage" ref={collageRef}>
						{/* Row 1 */}
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-1.png" 
								width={130}
								height={130}
								alt="Avatar 1"
							/>
						</div>
						<div className="collage-avatar"></div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-2.png" 
								width={130}
								height={130}
								alt="Avatar 2"
							/>
						</div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-3.png" 
								width={130}
								height={130}
								alt="Avatar 3"
							/>
						</div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-4.png" 
								width={130}
								height={130}
								alt="Avatar 4"
							/>
						</div>

						{/* Row 2 */}
						<div className="collage-avatar"></div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-5.png" 
								width={130}
								height={130}
								alt="Avatar 5"
							/>
						</div>
						<div className="collage-avatar"></div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-6.png" 
								width={130}
								height={130}
								alt="Avatar 6"
							/>
						</div>
						<div className="collage-avatar"></div>

						{/* Row 3 */}
						<div className="collage-avatar"></div>
						<div className="collage-avatar"></div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-8.png" 
								width={130}
								height={130}
								alt="Avatar 8"
							/>
						</div>
						<div className="collage-avatar"></div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-9.png" 
								width={130}
								height={130}
								alt="Avatar 9"
							/>
						</div>

						{/* Row 4 */}
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-10.png" 
								width={130}
								height={130}
								alt="Avatar 10"
							/>
						</div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-11.png" 
								width={130}
								height={130}
								alt="Avatar 11"
							/>
						</div>
						<div className="collage-avatar"></div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-12.png" 
								width={130}
								height={130}
								alt="Avatar 12"
							/>
						</div>
						<div className="collage-avatar">
							<Image 
								src="/images/avatar-13.png" 
								width={130}
								height={130}
								alt="Avatar 13"
							/>
						</div>
					</div>
					<div className="fixed bottom-0 z-40 w-full bg-[#FFFFF5] flex flex-col gap-2.5 border-t border-dark-950 px-[4.6875rem] pt-9 pb-[3.625rem]">
						<div className="w-full flex flex-col gap-7">
							<h6 className='uppercase text-dark-950 text-[0.9375rem] font-normal'>Where Conversations Sync Seamlessly</h6>
							<div className="flex flex-col gap-2">
								<h3 className="text-dark-950 font-medium text-xl bricolage">Unlock your collaboration potential with SyncSpace</h3>
								<p className='text-dark-950 text-[0.9375rem] font-normal'>Empowering teams to sync, create, and innovate together</p>
							</div>
						</div>
					</div>
					{/* <svg width="1266" height="1166" viewBox="0 0 1266 1166" fill="none" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<linearGradient id="gradient1" gradientUnits="userSpaceOnUse">
								<stop offset="0%" stop-color="#0000FF" />
								<stop offset="100%" stop-color="#FF0000" />
							</linearGradient>
						</defs>
						<path d="M61.2069 1L1 288.655L389 870.655H61.2069L255.207 1165H723.483L783.69 884.035L201.69 1H61.2069Z" stroke="url(#gradient1)" stroke-width="0.5"/>
						<path d="M482.655 288.655L536.172 1H1004.45L1205.14 288.655L884.035 295.345L1265.34 870.655L1218.52 1165H1071.34L482.655 288.655Z" stroke="url(#gradient1)" stroke-width="0.5"/>
					</svg> */}
					<div 
						className="absolute inset-0 bg-cover bg-[top_left] bg-no-repeat w-full h-full" 
						// style={{backgroundImage: 'url("data:image/svg+xml;utf8,<svg width=\'1266\' height=\'1166\' viewBox=\'0 0 1266 1166\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><defs><linearGradient id=\'gradient1\' gradientUnits=\'userSpaceOnUse\'><stop offset=\'0%\' stop-color=\'#0000FF\' /><stop offset=\'100%\' stop-color=\'#FF0000\' /></linearGradient></defs><path d=\'M61.2069 1L1 288.655L389 870.655H61.2069L255.207 1165H723.483L783.69 884.035L201.69 1H61.2069Z\' stroke=\'url(#gradient1)\' stroke-width=\'0.5\'/><path d=\'M482.655 288.655L536.172 1H1004.45L1205.14 288.655L884.035 295.345L1265.34 870.655L1218.52 1165H1071.34L482.655 288.655Z\' stroke=\'url(#gradient1)\' stroke-width=\'0.5\'/></svg>")'}}
						style={{backgroundImage: `url(/images/syncspace-stroke-logo.svg)`}}
					></div>
				</aside>
			</section>
		</main>
	)
}

export default AuthLayout