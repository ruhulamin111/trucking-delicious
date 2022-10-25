import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import '../styles/Cart.css'


const Cart = () => {


    return (
        <Helmet title='Cart'>
            <CommonSection title='Your Cart' />
            <section className="cart_section">
                <section className="cart_table">
                    <table className=''>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        </Helmet>
    )
}

export default Cart
