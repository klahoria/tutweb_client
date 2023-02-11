import React, { useEffect } from 'react'
import Button from '../Button/Button';
import './Card.css'

function DetailCardImage(props) {
    const bgImage = {
        background: props.bg_image,
    };

    return (
        <>
            {props.bg_image &&
                <div className='p-5 card_design'>
                    <div className='card_rounded py-4 px-3 h-100 d-flex flex-wrap align-items-center justify-content-center flex-column' style={{ backgroundImage: `url(${props.bg_image})`, backgroundRepeat: 'no-repeat', backgroundSize:'auto' }}>
                        {props.img && <img src={props.img} alt="" className='image_card_top' />}
                        <h3 className='pb-2 text-white'>{props.sub1} <br /> {props.sub2}</h3>
                        {props.subText && <div className='wrap light-gray py-2'>{props.subText}</div>}
                        <div className='w-100'>
                            <Button customClass={props.customClass} variant={props.variant} title={props.buttonText} {...props} borderColor={props.border} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DetailCardImage