import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import product from '../assets/images/product_01.1.jpg'
import '../styles/FoodDetails.css'

const FoodDetails = () => {
    return (
        <Helmet title='Food Details'>
            <CommonSection />
            <section className=''>
                <div className='food_details_section'>
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
                </div>
                <div className="product_desc">
                    <div className="tab">
                        <h5 className='active_tab'>Description</h5>
                        <h5>Reviews</h5>
                    </div>
                    <div className="tab_content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quam porro minus iste, nihil maxime hic tenetur maiores voluptatibus commodi amet nam magni unde animi quis est? A aliquid, omnis natus voluptate quo, veniam officiis voluptatem molestiae iste tempora, nostrum magnam maiores assumenda incidunt dignissimos ipsam laudantium provident quas. Possimus!</p>
                    </div>
                </div>
                <div className="form">
                    <form                    >
                        <div className="form_group">
                            <input type="text" name="" id="" placeholder='Enter your name' />
                        </div>
                        <div className="form_group">
                            <input type="email" name="" id="" placeholder='Enter your email' />
                        </div>
                        <div className="form_group">
                            <textarea type="text" name="" id="" placeholder='Enter your comments' />
                        </div>
                        <input className='message_button' type="submit" value="Send message" />
                    </form>
                </div>

            </section>
        </Helmet>
    )
}

export default FoodDetails