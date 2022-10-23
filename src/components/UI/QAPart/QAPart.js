import React from 'react'
import qaimg from '../../../assets/images/location.png'
import '../../../styles/QAPart.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Check } from '@mui/icons-material';

const QAPart = () => {

    return (
        <div className='qa_section'>
            <div className='qa_img'>
                <img src={qaimg} alt="" />
            </div>
            <div className="qa_text">
                <h1 className='qa_title'>Why Trucking Delicious</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequuntur explicabo omnis debitis voluptates doloremque fuga quaerat! Ullam, cum incidunt!</p>
                <div className='qa_item'>
                    <i><CheckCircleOutlineIcon /></i>
                    <span>Freash and tasty food</span>
                </div>
                <p>Amet consectetur adipisicing elit. Architecto, id?</p>
                <div className='qa_item'>
                    <i><CheckCircleOutlineIcon /></i>
                    <span>Quality food</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, id?</p>
                <div className='qa_item'>
                    <i><CheckCircleOutlineIcon /></i>
                    <span>Order from any location</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
    )
}

export default QAPart
