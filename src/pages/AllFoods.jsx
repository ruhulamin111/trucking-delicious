import React, { useEffect, useState } from 'react'
import '../styles/AllFoods.css'
import category1 from '../assets/images/hamburger.png'
import category2 from '../assets/images/pizza.png'
import category3 from '../assets/images/bread.png'
import data from '../assets/fake-data/products'
import FoodCard from '../components/UI/FoodCard/FoodCard'

const AllFoods = () => {
    const [category, setCategory] = useState('All')
    const [allProduct, setAllProduct] = useState(data)

    useEffect(() => {
        if (category === 'All') {
            setAllProduct(data)
        }
        if (category === 'Burger') {
            const filtered = data.filter(item => item.category === 'Burger')
            setAllProduct(filtered)
        }
        if (category === 'Pizza') {
            const filtered = data.filter(item => item.category === 'Pizza')
            setAllProduct(filtered)
        }
        if (category === 'Bread') {
            const filtered = data.filter(item => item.category === 'Bread')
            setAllProduct(filtered)
        }

    }, [category])


    return (
        <div>
            <div className='food_list'>
                <button className={`${category === 'All' ? 'active_food' : ''}`} onClick={() => setCategory('All')}>All</button>
                <button className={`food_list_item ${category === 'Burger' ? 'active_food' : ''}`} onClick={() => setCategory('Burger')} >
                    <img src={category1} alt="" />
                    Burger
                </button>
                <button className={`food_list_item ${category === 'Pizza' ? 'active_food' : ''}`} onClick={() => setCategory('Pizza')}>
                    <img src={category2} alt="" />
                    Pizza
                </button>
                <button className={`food_list_item ${category === 'Bread' ? 'active_food' : ''}`} onClick={() => setCategory('Bread')}>
                    <img src={category3} alt="" />
                    Bread
                </button>
            </div>
            <div className='all_food_section'>
                {
                    allProduct.map((item, i) =>
                        <FoodCard key={i} item={item} />
                    )
                }
            </div>
        </div>
    )
}

export default AllFoods