import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import '../styles/Signin.css'

const Signin = () => {
    const userInfo = []
    const handleSubmit = (event) => {
        event.preventDefault()
        const visitor = {
            email: event.target.email.value,
            password: event.target.password.value,

        }
        userInfo.push(visitor)
    }

    return (
        <Helmet title='Sign in'>
            <CommonSection />
            <section className="singin_section">
                <h1 className='signin_title'>Sign in</h1>
                <div className="singin_part">
                    <form onSubmit={handleSubmit}>
                        <div className="form_signin">
                            <input name='email' type="email" placeholder='Enter your email' required />
                        </div>
                        <div className="form_signin">
                            <input name='password' type="password" placeholder='Enter your password' required />
                        </div>
                        <input className='home_button' type="submit" value="Sign in" />
                    </form>
                </div>
                <h1>Don't have an account? <Link to='/signup'>Sing up</Link></h1>
            </section>
        </Helmet>
    )
}

export default Signin