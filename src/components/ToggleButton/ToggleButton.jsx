import React from 'react'
import Button from '../Button/Button';
import './ToggleButton.css'

function ToggleButton(props) {
    return (
        <div className='px-3 py-2 custom_toggle rounded-pill'>
            <Button click={props.changeActive} title="Login" customClass={` w-50 ${props.active == 'Login' ? '' : 'in_active'}`} />
            <Button click={props.changeActive} title="Register" customClass={` w-50 ${props.active == 'Register' ? '' : 'in_active'}`} />
        </div>
    )
}

export default ToggleButton;