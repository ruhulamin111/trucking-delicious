import React from 'react'
import { useSelector } from 'react-redux'
import Routers from '../../routes/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Cart from '../UI/Cart/Cart'

const Layout = () => {
    const showCart = useSelector(state => state.cartUI.cartIsVisiable)

    return (
        <div className='w-10/12 mx-auto'>
            <Header />
            {showCart && <Cart />}
            <div>
                <Routers />
            </div>
            <Footer />
        </div>
    )
}

export default Layout