import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import avatar1 from '../../../assets/images/ava-1.jpg'
import avatar2 from '../../../assets/images/ava-2.jpg'
import avatar3 from '../../../assets/images/ava-3.jpg'
import avatar4 from '../../../assets/images/ava-4.jpg'
import '../../../styles/Client.css'

const Client = () => {

    return (
        <div className='client_section'>
            <h1 className='client_title'>Client Revies</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
            >
                <SwiperSlide>
                    <div className='client_avatar'>
                        <img src={avatar1} alt="" />
                    </div>
                    <div className='client_text'>
                        <p>Web Developer</p>
                        <em>John knedy</em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='client_avatar'>
                        <img src={avatar2} alt="" />
                    </div>
                    <div className='client_text'>
                        <p>Web Developer</p>
                        <em>John knedy</em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='client_avatar'>
                        <img src={avatar3} alt="" />
                    </div>
                    <div className='client_text'>
                        <p>Web Developer</p>
                        <em>John knedy</em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='client_avatar'>
                        <img src={avatar4} alt="" />
                    </div>
                    <div className='client_text'>
                        <p>Web Developer</p>
                        <em>John knedy</em>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Client
