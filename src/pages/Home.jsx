import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import logo from '../assets/images/hero.png'

const Home = () => {

    return (
        <Helmet title='Home'>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <h1 className='text-xl mt-5'>Easy way to make an order</h1>
                    <h1 className='text-4xl font-bold mt-5 '>Hungry! just wait food at your home</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita reiciendis quasi distinctio voluptatem placeat doloribus dolores repellat esse quis.</p>
                </div>
                <div>

                    <img className='' src={logo} alt="" />
                </div>

            </div>
        </Helmet>
    )
}

export default Home