import React, { useState } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import './Auth.css'
import Login from '../Login/Login'
import Register from '../Register/Register'

function Auth() {
    const [activeScreen, Setactive] = useState('Login')
    const setActiveScreen = () => {
        if (activeScreen === 'Login') {
            Setactive('Register')
        }
        else {
            Setactive('Login')
        }
    }
    return (
        <div className='h-100 row mx-0'>
            <div className="col-md-6 d-none d-md-block login_screen">
                <div className="col-12 text-center">
                    <div className="typo_login">
                        <h2 className='text-white'>Lorem Ipsum is simply </h2>
                        <h3 className='text-white'>Lorem Ipsum is simply </h3>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12 auth_fields">
                <>
                    {/* login container */}
                    <div className="login-container h-100 col-12">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="header px-md-5 px-4">
                                <span>
                                    <h4 className='text-center'>Welcome To Lorem Ipsum</h4>
                                </span>

                                <div className='px-md-5 py-4'>
                                    <ToggleButton active={activeScreen} changeActive={() => setActiveScreen()} />
                                </div>

                                {activeScreen === 'Login' && <div className='text-center py-4'>
                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                </div>}
                                <>
                                    {activeScreen === 'Login' ? <Login /> : <Register />}
                                </>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Auth