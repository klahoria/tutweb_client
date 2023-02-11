import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'

function Register() {
    return (
        <>

            {/* Email input box */}
            <div className="login_input mt-3">
                <Input placeholder='Enter your Email address' type="text" title="Email" />
            </div>

            {/* login-username */}
            <div className="login_input mt-3">
                <Input placeholder='Enter your User name' type="text" title="Username" />
            </div>

            {/* Password Field */}
            <div className="login_input mt-3">
                <Input type="password" placeholder='Enter your Password' title="Password" />
            </div>


            {/* button login */}
            <div className="login_button">
                <div className="d-flex flex-wrap justify-content-end">
                    <div className="button_field mt-4 w-50">
                        <Button click={() => alert('hello tere')} title={"Register"} customClass="w-100" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register