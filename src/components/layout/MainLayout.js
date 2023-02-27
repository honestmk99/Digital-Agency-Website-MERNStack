import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ count }) => {
    return (
        <>
            <Header count={count} />
            <div className='pt-80 relative z-0'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
