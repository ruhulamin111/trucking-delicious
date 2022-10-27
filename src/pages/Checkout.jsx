import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import '../styles/Checkout.css'

const Checkout = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <Helmet title='Checkout'>
            <CommonSection />
            <div className="checkout_section">
                <div className=' checkout_form'>
                    <h1 className='checkout_title'>Shipping Information</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form_checkout">
                            <input type="text" placeholder='Enter your name' required />
                        </div>
                        <div className="form_checkout">
                            <input type="email" placeholder='Enter your email' required />
                        </div>
                        <div className="form_checkout">
                            <input type="number" placeholder='Phone number' required />
                        </div>
                        <div className="form_checkout">
                            <input type="text" placeholder='Country' required />
                        </div>
                        <div className="form_checkout">
                            <input type="text" placeholder='City' required />
                        </div>
                        <div className="form_checkout">
                            <input type="text" placeholder='Postal code' required />
                        </div>
                        <input className='home_button' type="submit" value="Submit" />
                    </form>
                </div>

            </div>
        </Helmet>
    )
}

export default Checkout