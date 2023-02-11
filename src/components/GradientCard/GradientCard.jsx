import React from 'react'
import './GradientCard.css'

export default function GradientCard(props) {
    return (
        <div className='text-center p-5 card_grad'>
            <div className='text-center h1'><span>{props.textMain}</span></div>
            <div className='text-center h4'><span>{props.subText}</span></div>
        </div>
    )
}
