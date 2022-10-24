import React from 'react'
import Routers from '../../routes/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Cart from '../UI/Cart/Cart'

const Layout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header />
            <Cart />
            <div>
                <Routers />
            </div>
            <Footer />
        </div>
    )
}

export default Layout