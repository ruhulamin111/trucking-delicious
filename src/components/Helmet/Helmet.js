import React from 'react'

const Helmet = (props) => {
    document.title = 'Trucking Delicious -' + props.title

    return (
        <div>
            {props.children}
        </div>
    )
}

export default Helmet