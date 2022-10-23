import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import logo from '../assets/images/hero.png'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Category from '../components/UI/Category/Category';
import '../styles/Home.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Info from '../components/UI/Info/Info';
import Service from '../components/UI/Service/Service';
import AllFoods from './AllFoods';

const Home = () => {


    return (
        <Helmet title='Home'>
            <section className='home_container'>
                <div className=''>
                    <h1 className='home_subtitle'>Easy way to make an order</h1>
                    <h1 className='home_title'><span>Hungry!</span> <br /> just wait food at your home</h1>
                    <p className='home_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita reiciendis quasi distinctio voluptatem placeat doloribus dolores repellat esse quis.</p>
                    <div className='home_button_section'>
                        <button className='home_button'>Order now <span><ArrowRightAltIcon /></span></button>
                        <button className='home_button'>See all foods <span><ArrowRightAltIcon /></span></button>
                    </div>
                    <div className='home_info_section'>
                        <p><span><DirectionsCarIcon /></span>No shipping charge </p>
                        <p><span><GppGoodIcon /></span>100% secure checkout </p>
                    </div>
                </div>
                <div>
                    <img className='' src={logo} alt="" />
                </div>
            </section>
            <section>
                <Category />
            </section>
            <section>
                <Info />
            </section>
            <section>
                <Service />
            </section>

            <section>
                <AllFoods />
            </section>

        </Helmet>
    )
}

export default Home