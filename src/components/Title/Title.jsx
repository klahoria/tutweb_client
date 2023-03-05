import React from 'react'

function Title(props) {
    return (
        <div className='text-center'>
            {props.title && <h3 className={'d-md-block d-none ' + (props.custom_title_class || '')}>{props.title} {(props.breakPoint && props.breakPosition == -1 && <><br />{props.breakPoint}</>)}{props.gradient && <span style={{ color: props.gradientColor }}> {props.gradient}</span>}{(props.breakPoint && props.breakPosition == 1) && <><br />{props.breakPoint}</>}</h3>}
            {props.title && <h3 className='d-md-none d-block text-center'>{props.title} {props.breakPoint && <>{props.breakPoint}</>}{props.gradient && <span style={{ color: props.gradientColor }}> {props.gradient}</span>}</h3>}
            {props.subTitle && <p className='mx-auto mt-3 mx-none d-md-block d-none' style={{ maxWidth: props.maxWidth }}>{props.subTitle}</p>}
            {props.subTitle && <p className='mx-auto mt-3 text-start d-md-none d-block' style={{ maxWidth: props.maxWidth }}>{props.subTitle}</p>}
        </div>
    )
}

export default Title;