import React from 'react'
import categoryImg1 from '../../../assets/images/category-01.png'
import categoryImg2 from '../../../assets/images/category-02.png'
import categoryImg3 from '../../../assets/images/category-03.png'
import categoryImg4 from '../../../assets/images/category-04.png'

const Category = () => {
    const categoryData = [
        {
            name: 'Fast food ',
            img: categoryImg1
        },
        {
            name: 'Pizza ',
            img: categoryImg2
        },
        {
            name: 'Bangali Food',
            img: categoryImg3
        },
        {
            name: 'Row Meat ',
            img: categoryImg4
        },
    ]
    return (
        <div className='grid grid-col'>
            {
                categoryData.map((category, i) => <div key={i}>
                    <div>
                        <img src={category.img} alt="" />
                    </div>
                    <h1>{category.name}</h1>
                </div>)
            }

        </div>
    )
}

export default Category