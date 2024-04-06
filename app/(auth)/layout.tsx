"use client"

import React from 'react'
import AuthHeader from '@/components/auth/AuthHeader'
import UserCollage from '@/components/auth/UserCollage'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='relative w-full'>
			<AuthHeader />
			<section className='relative min-h-screen'>
				<aside className='bg-white w-full sm:w-[70%] lg:w-[45%] mx-auto lg:mx-0 min-h-screen max-xs:px-[24px] sm:px-[30px] lg:px-[50px] 2xl:px-[132px] auth-layout--pt pb-10'>
					{children}
				</aside>
				<aside className='fixed right-0 top-0 bottom-0 bg-[#FFFFF5] w-full lg:w-[55%] h-screen hidden lg:flex flex-col auth-layout--pt overflow-hidden'>
					{/* User Avatar Collage */}
					<UserCollage />

					<div className="fixed bottom-0 z-40 w-full bg-[#FFFFF5] flex flex-col gap-2.5 border-t border-dark-950 px-[4.6875rem] pt-9 pb-[3.625rem]">
						<div className="w-full flex flex-col gap-7">
							<h6 className='uppercase text-dark-950 text-[0.9375rem] font-normal'>Where Conversations Sync Seamlessly</h6>
							<div className="flex flex-col gap-2">
								<h3 className="text-dark-950 font-medium text-xl bricolage">Unlock your collaboration potential with SyncSpace</h3>
								<p className='text-dark-950 text-[0.9375rem] font-normal'>Empowering teams to sync, create, and innovate together</p>
							</div>
						</div>
					</div>
					<div 
						className="absolute inset-0 bg-cover bg-[top_left] bg-no-repeat w-full h-full" 
						style={{backgroundImage: `url(/images/syncspace-stroke-logo.svg)`}}
					></div>
				</aside>
			</section>
		</main>
	)
}

export default AuthLayout