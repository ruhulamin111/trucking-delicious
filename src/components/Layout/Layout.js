import React from 'react'
import Routers from '../../routes/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = () => {
    return (
        <div className='container mx-auto'>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </div>
    )
}

export default Layout