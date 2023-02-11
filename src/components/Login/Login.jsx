import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'

function Login() {
    return (
        <>
            {/* login-username */}
            <div className="login_input mt-3">
                <Input placeholder='Enter your User name' type="text" title="Username" />
            </div>

            {/* Password Field */}
            <div className="login_input mt-3">
                <Input type="password" placeholder='Enter your Password' title="Password" />
            </div>

            <div className='checkbox pt-3 '>
                <div className="d-flex flex-wrap justify-content-between">
                    <Input type="checkbox" title="Remember Me" customClass="flex-grow-1" />
                    <span className="fw-light">Forgot Password?</span>
                </div>
            </div>

            {/* button login */}
            <div className="login_button">
                <div className="d-flex flex-wrap justify-content-end">
                    <div className="button_field mt-4 w-50">
                        <Button click={() => alert('hello tere')} title={"Login"} customClass="w-100" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login