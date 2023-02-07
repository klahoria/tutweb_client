import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <button type={props.type || 'submit'} tabIndex={props.tabIndex || 1} className={'px-4 py-2 rounded-pill text-white border-0 custom_button' + ' ' + props.customClass} onClick={props.click}>
            <span className={props.customClassStyle}>
                {props.title}
            </span>
        </button>
    )
}

export default Button;