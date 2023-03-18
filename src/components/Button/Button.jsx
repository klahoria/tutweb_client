import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <>
            {!props.variant ? <button type={props.type || 'submit'} tabIndex={props.tabIndex || 1} className={'px-4 py-2  text-white border-0 custom_button ' + props.customClass  + " " + (props.rounded || 'rounded-pill')} onClick={props.click}>
                <span className={props.customClassStyle}>
                    {props.title}
                </span>
            </button> :
                <>
                    <button type={props.type || 'submit'} tabIndex={props.tabIndex || 1} className={'px-4 py-2 rounded-pill ' + props.customClass} onClick={props.click} style={{ border: `1px solid ${props.border || '#fff'}`, color: props.Textcolor, background: `${props.background}`, maxWidth: props.maxWidth || "unset" }}>
                        <span className={props.customClassStyle}>
                            {props.title}
                        </span>
                    </button>
                </>
            }
        </>
    )
}

export default Button;