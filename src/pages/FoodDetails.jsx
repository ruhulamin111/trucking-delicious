import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import img1 from '../assets/images/product_01.1.jpg'
import '../styles/FoodDetails.css'
import { useParams } from 'react-router-dom'
import products from '../assets/fake-data/products'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shoppingCart/cartSlice'
import FoodCard from '../components/UI/FoodCard/FoodCard'

const FoodDetails = () => {
    const [tab, setTab] = useState('desc')
    const { id } = useParams()
    const product = products.find(product => product.id === id)
    const { title, price, desc, category, image01 } = product;
    const [previewImg, setPreviewImg] = useState(product.image01)
    const relatedProduct = products.filter(item => category === item.category)
    const disPatch = useDispatch()
    useEffect(() => {
        setPreviewImg(product.image01)
    }, [product])
    const addToCart = () => {
        disPatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <Helmet title='Food Details'>
            <CommonSection title={title} />
            <section className='food_section'>
                <div className='food_details_section'>
                    <div className="product_img">
                        <div className="img_item" onClick={() => setPreviewImg(product.image01)}>
                            <img src={product.image01} alt="" />
                        </div>
                        <div className="img_item" onClick={() => setPreviewImg(product.image02)}>
                            <img src={product.image02} alt="" />
                        </div>
                        <div className="img_item" onClick={() => setPreviewImg(product.image03)}>
                            <img src={product.image03} alt="" />
                        </div>
                    </div>
                    <div className="product_main_img">
                        <img src={previewImg} alt="" />
                    </div>
                    <div className='single_product_content'>
                        <h1 className="product_title">{title}</h1>
                        <div className='product_price'>
                            <p>Price: </p>
                            <span>$ {price}</span>
                        </div>
                        <div className="product_price">
                            <p>Category: </p>
                            <span>{category}</span>
                        </div>
                        <button className='home_button' onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
                <div className="product_desc">
                    <div className="tab">
                        <h5 className={`${tab === 'desc' && 'active_tab'}`} onClick={() => setTab('desc')}>Description</h5>
                        <h5 className={`${tab === 'rev' && 'active_tab'}`} onClick={() => setTab('rev')}>Reviews</h5>
                    </div>
                    {tab === 'desc' ?
                        <div className="tab_content">
                            <p>{desc}</p>
                        </div> : <>
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
                                <form onSubmit={handleSubmit}>
                                    <div className="form_group">
                                        <input type="text" name="" id="" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div className="form_group">
                                        <input type="email" name="" id="" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="form_group">
                                        <textarea rows={5} type="text" name="" id="" placeholder='Enter your comments' onChange={(e) => setMessage(e.target.value)} required />
                                    </div>
                                    <input className='message_button' type="submit" value="Send message" />
                                </form>
                            </div>
                        </>
                    }
                </div>
                <div>
                    <h1 className='related_title'>You might also like</h1>
                    <div className='all_food_section'>
                        {
                            relatedProduct.map((item, i) =>
                                <FoodCard key={i} item={item} />
                            )
                        }
                    </div>
                </div>

            </section>
        </Helmet>
    )
}

export default FoodDetails