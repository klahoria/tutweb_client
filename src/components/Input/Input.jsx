import React, { useEffect, useRef, useState } from 'react';
import './input.css'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';


function Input(props) {
    const [labelFor, setLabelFor] = useState(null)
    // const inputClass = `px-4 py-3 w-100 border custom_input rounded-pill`
    const inputRef = useRef(null);
    useEffect(() => {

        setLabelFor(Math.random)

        return () => { }
    }, [])

    useEffect(() => {
        if (inputRef.current) {
            // inputRef = inputRef.current[0] && inputRef.current[0].classList
            // if (inputRef.current.type !== 'password' && inputRef.current.type !== 'text') { return }
            if (inputRef.current.type === 'checkbox') {
                inputRef.current.classList.remove('w-100')
            }
        }
        return () => {
        }
    }, [inputRef])

    const [showPassword, setshowPassword] = useState(false)

    return (
        <div className={props.customClass}>
            <label htmlFor={labelFor} className='w-100 form-floating'>
                {(props.type !== 'checkbox' && props.type !== 'radio') && (<p className='mb-1 fw-bold'>
                    {props.title}
                </p>)}
                <input id={labelFor} ref={inputRef} className="px-4 py-3 w-100  custom_input rounded-pill" type={props.type == 'password' ? showPassword ? 'text' : 'password' : props.type} placeholder={props.placeholder} disabled={props.disabled || false} />
                {(props.type === 'checkbox' || props.type === 'radio') && (<span className='mb-1 px-2 fw-bold'>
                    {props.title}
                </span>)}
                {props.type == 'password' && <>
                    <span className='eye_password'>
                        {!showPassword ?
                            <BsFillEyeFill tooltip="show Password" className="pointer" onClick={() => setshowPassword(!showPassword)} />
                            :
                            <BsFillEyeSlashFill tooltip="Hide Password" className="pointer" onClick={() => setshowPassword(!showPassword)} />}
                    </span>
                </>}
            </label>
        </div>
    )
}

export default Input