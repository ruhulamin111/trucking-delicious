import React from 'react'
import { useSelector } from 'react-redux'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import '../styles/Checkout.css'

const Checkout = () => {
    const shippingInfo = []
    const handleSubmit = (event) => {
        event.preventDefault()
        const userInfo = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            country: event.target.country.value,
            code: event.target.code.value,
            city: event.target.city.value,
        }
        shippingInfo.push(userInfo)
    }

    const totalAmount = useSelector(state => state.cart.totalAmount)
    const shippingCost = 50;
    const grandTotal = totalAmount + Number(shippingCost)

    return (
        <Helmet title='Checkout'>
            <CommonSection />
            <div className="checkout_section">
                <div className=' checkout_form'>
                    <h1 className='checkout_title'>Shipping Information</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form_checkout">
                            <input name='name' type="text" placeholder='Enter your name' required />
                        </div>
                        <div className="form_checkout">
                            <input name='email' type="email" placeholder='Enter your email' required />
                        </div>
                        <div className="form_checkout">
                            <input name='phone' type="number" placeholder='Phone number' required />
                        </div>
                        <div className="form_checkout">
                            <input name='country' type="text" placeholder='Country' required />
                        </div>
                        <div className="form_checkout">
                            <input name='city' type="text" placeholder='City' required />
                        </div>
                        <div className="form_checkout">
                            <input name='code' type="text" placeholder='Postal code' required />
                        </div>
                        <input className='home_button' type="submit" value="Submit" />
                    </form>
                </div>
                <div className='checkout_bill'>
                    <h2>Shipping: $ <span>50</span></h2>
                    <h2>Sub total : $ <span>{totalAmount}</span></h2>
                    <h2>Grand total : $ <span>{grandTotal}</span></h2>
                </div>
            </div>
        </Helmet>
    )
}

export default Checkout