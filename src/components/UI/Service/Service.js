import React from 'react'
import img1 from '../../../assets/images/service-01.png'
import img2 from '../../../assets/images/service-02.png'
import img3 from '../../../assets/images/service-03.png'
import '../../../styles/Service.css'

const Service = () => {
    const service = [
        {
            name: 'Quick Delivery',
            img: img1,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, placeat.'
        },
        {
            name: 'Super Dine In',
            img: img2,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, placeat.'
        },
        {
            name: 'Easy Pick Up',
            img: img3,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, placeat.'
        }
    ]
    return (
        <div className='service_section'>
            {
                service.map((item, i) => (
                    <div key={i} className="">
                        <img src={item.img} alt="" />
                        <h1 className='service_title'>{item.name}</h1>
                        <p className=''>{item.desc}</p>
                    </div>
                ))
            }


        </div>
    )
}

export default Service
