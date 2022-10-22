import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/FoodCard.css'

const FoodCard = ({ item }) => {
    const { id, title, price, image01 } = item;

    return (
        <div className='food_card_item'>
            <div className='food_card_item_img'>
                <img src={image01} alt="" />
            </div>
            <div className='food_card_item_title'>
                <h5><Link to={`/foods/${id}`} >{title}</Link></h5>
            </div>
            <div className='food_card_item_price'>
                <span>$ {price}</span>
                <button className='home_button'>Add to cart</button>
            </div>
        </div>
    )
}

export default FoodCard
