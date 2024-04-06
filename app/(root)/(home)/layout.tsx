import React from 'react'

const HomeLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <main>
        Navbar
        {children}
        Footer
    </main>
  )
}

export default HomeLayout