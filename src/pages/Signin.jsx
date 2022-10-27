import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import '../styles/Signin.css'

const Signin = () => {
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

    return (
        <Helmet title='Sign in'>
            <CommonSection />
            <section className="singin_section">
                <h1 className='signin_title'>Sign in</h1>
                <div className="singin_part">
                    <form onSubmit={handleSubmit}>
                        <div className="form_signin">
                            <input name='name' type="text" placeholder='Enter your name' required />
                        </div>
                        <div className="form_signin">
                            <input name='email' type="email" placeholder='Enter your email' required />
                        </div>
                        <input className='home_button' type="submit" value="Submit" />
                    </form>
                </div>
                <h1>Don't have an account? <Link to='/singup'>Sing up</Link></h1>
            </section>
        </Helmet>
    )
}

export default Signin