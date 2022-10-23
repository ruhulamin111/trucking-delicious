import React from 'react'
import network from '../../../assets/images/network.png'
import '../../../styles/Testimonial.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Testimonial = () => {

    return (
        <div className='testimonial_section'>
            <div>
                <div className="qa_text">
                    <h1 className='qa_title'>Client Reviews</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequuntur explicabo omnis debitis voluptates doloremque fuga quaerat! Ullam, cum incidunt!</p>
                    <div className='qa_item'>
                        <i><CheckCircleOutlineIcon /></i>
                        <span>Food reviews</span>
                    </div>
                    <p>Amet consectetur adipisicing elit. Architecto, id?</p>
                    <div className='qa_item'>
                        <i><CheckCircleOutlineIcon /></i>
                        <span>Delivery reviews</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, id?</p>
                    <div className='qa_item'>
                        <i><CheckCircleOutlineIcon /></i>
                        <span>Service reviews overall</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div className='testimonial_img'>
                <img src={network} alt="" />
            </div>
        </div>
    )
}

export default Testimonial
