import React from 'react'

function CustomButton(props) {
    return (
        <div className="rounded-pill d-flex align-items-center justify-content-center" role={props.role} style={{ border: `1px solid ${props.border}`, color: props.textColor || '#fff', maxWidth: props.maxWidth || 'unset' }}>
            <p className={props.customClass + ' flex-grow-1 text-center mb-0'}>{props.title}</p>
            <div className={"rounded-pill d-flex align-items-center justify-content-center "} style={{ border: `1px solid ${props.border}`, width: '60px', height: '60px' }}>
                <span className='fs-3 mb-1'>
                    &#8594;
                </span>
            </div>
        </div>
    )
}

export default CustomButton