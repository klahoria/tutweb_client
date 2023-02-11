import React from 'react'
import './Card.css'

function DetailCard(props) {
    return (
        <div className='p-5'>
            <div className='card_rounded py-4 px-3'>
                <img src={props.img} alt="" className='image_card_top' />
                <h6 className='pb-2'>{props.sub1} <br /> {props.sub2}</h6>
                <div className='wrap light-gray py-2'>{props.subText}</div>
            </div>
        </div>
    )
}

export default DetailCard;