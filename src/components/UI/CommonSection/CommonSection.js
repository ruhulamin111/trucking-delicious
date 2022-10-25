import React from 'react'
import '../../../styles/CommonSection.css'

const CommonSection = ({ title }) => {
    return (
        <section className='common_section'>
            <h1 className='text-white font-bold text-2xl ml-16'>{title}</h1>
        </section>
    )
}

export default CommonSection
