import React from 'react'
import '../styles/AllFoods.css'
import category1 from '../assets/images/hamburger.png'
import category2 from '../assets/images/pizza.png'
import category3 from '../assets/images/bread.png'
import { ProductionQuantityLimits } from '@mui/icons-material'
import data from '../assets/fake-data/products'
import FoodCard from '../components/UI/FoodCard/FoodCard'

const AllFoods = () => {
    return (
        <div>
            <div className='food_list'>
                <button className='active_food'>All</button>
                <button className='food_list_item'>
                    <img src={category1} alt="" />
                    Burger
                </button>
                <button className='food_list_item'>
                    <img src={category2} alt="" />
                    Pizza
                </button>
                <button className='food_list_item'>
                    <img src={category3} alt="" />
                    Bread
                </button>
            </div>
            <div className='all_food_section'>
                {
                    data.map((item, i) =>
                        <FoodCard item={item} />
                    )
                }
            </div>

        </div>
    )
}

export default AllFoods