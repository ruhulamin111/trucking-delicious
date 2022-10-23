import React, { useEffect, useState } from 'react'
import '../../../styles/HotPizza.css'
import data from '../../../assets/fake-data/products'
import FoodCard from '../FoodCard/FoodCard'


const HotPizza = () => {
    const [pizza, setPizza] = useState([])
    useEffect(() => {
        const filtered = data.filter(item => item.category === 'Pizza')
        const pizzaSlice = filtered.slice(0, 4)
        setPizza(pizzaSlice)
    }, [])

    return (
        <div className='hot_pizza_section'>
            <h1 className="hot_pizza">Hot Pizza</h1>
            <div className='all_food_section'>
                {
                    pizza.map((item, i) =>
                        <FoodCard key={i} item={item} />
                    )
                }
            </div>
        </div>
    )
}

export default HotPizza
