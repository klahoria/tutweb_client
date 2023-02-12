import React from 'react'

function Card(props) {

    const stles = {
        background: '#FBFBFB',
        boxShadow: '0px 15px 44px rgba(13, 15, 28, 0.12)',
        height: "60px",
        width: "60px"
    }

    return (
        <div className='rounded-pill p-3' style={stles}>
            <img src={props.image} alt="" style={{maxWidth: '40px'}} />
        </div>
    )
}

export default Card