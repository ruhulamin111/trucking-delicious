import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import product from '../assets/images/product_01.1.jpg'
import '../styles/FoodDetails.css'

const FoodDetails = () => {
    return (
        <Helmet title='Food Details'>
            <CommonSection />
            <section className='food_details_section'>
                <div className="product_img">
                    <div className="img_item">
                        <img src={product} alt="" />
                    </div>
                    <div className="img_item">
                        <img src={product} alt="" />
                    </div>
                    <div className="img_item">
                        <img src={product} alt="" />
                    </div>
                </div>
                <div className="product_main_img">
                    <img src={product} alt="" />
                </div>
                <div className='single_product_content'>
                    <h1 className="product_title">Pizza with mashroom</h1>
                    <div className='product_price'>
                        <p>Price: </p>
                        <span>$123</span>
                    </div>
                    <div className="product_price">
                        <p>Category: </p>
                        <span>Burger</span>
                    </div>
                    <button className='home_button'>Add to cart</button>
                </div>

            </section>
        </Helmet>
    )
}

export default FoodDetails