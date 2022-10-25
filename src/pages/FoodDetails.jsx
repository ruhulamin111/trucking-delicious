import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import img1 from '../assets/images/product_01.1.jpg'
import '../styles/FoodDetails.css'
import { useParams } from 'react-router-dom'
import products from '../assets/fake-data/products'

const FoodDetails = () => {
    const [tab, setTab] = useState('desc')
    const { id } = useParams()
    const product = products.find(product => product.id === id)
    const [previewImg, setPreviewImg] = useState(product.image01)

    return (
        <Helmet title='Food Details'>
            <CommonSection />
            <section className=''>
                <div className='food_details_section'>
                    <div className="product_img">
                        <div className="img_item" onClick={() => setPreviewImg(product.image01)}>
                            <img src={product.image01} alt="" />
                        </div>
                        <div className="img_item" onClick={() => setPreviewImg(product.image01)}>
                            <img src={product.image02} alt="" />
                        </div>
                        <div className="img_item" onClick={() => setPreviewImg(product.image01)}>
                            <img src={product.image03} alt="" />
                        </div>
                    </div>
                    <div className="product_main_img">
                        <img src={previewImg} alt="" />
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
                <div className="review">
                    <p className='review_name'>John Doe</p>
                    <p className='review_mail'>abc@gmail.com</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, iste.</p>
                </div>
                <div className="review">
                    <p className='review_name'>John Doe</p>
                    <p className='review_mail'>abc@gmail.com</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, iste.</p>
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