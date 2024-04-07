import React from 'react'
import TheHeader from '@/components/dashboard/TheHeader'
import TheSidebar from '@/components/dashboard/TheSidebar'
import MobileNav from '@/components/dashboard/MobileNav'
import { useAppSelector } from '@/store'

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            {/* Dashboard Mobile Nav */}
            <MobileNav />
            
            <main>
                {/* Dashboard Header */}
                <TheHeader />
                <section className="relative min-h-screen pt-[5rem]">
                    {/* Dashboard Sidebar */}
                    <TheSidebar />

                    {/* Pages */}
                    <main className='dashboard-layout--main'>
                        {children}
                    </main>
                </section>
            </main>
        </>
    )
}

export default DashboardLayout