import React from 'react'
import Navbar from '@/components/pages/Navbar'
import PageMobileNavbar from '@/components/pages/PageMobileNavbar'

const RootLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
            <PageMobileNavbar />
            
            <main>
                {/* Page Navbar */}
                <Navbar />
                {children}
                Footer
            </main>
        </>
    )
}

export default RootLayout