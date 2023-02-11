import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-md-5 py-md-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="#"><img width="80px" src="/image/svg/logo.svg" alt=""  /></Link>
                <div className="w-100">
                    <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active px-4">
                                <Link className="nav-link text-white" to="/home">Home</Link>
                            </li>
                            <li className="nav-item active px-4">
                                <Link className="nav-link text-white" to="/cources">Courses</Link>
                            </li>
                            <li className="nav-item active px-4">
                                <Link className="nav-link text-white" to="/careers">Careers</Link>
                            </li>
                            <li className="nav-item active px-4">
                                <Link className="nav-link text-white" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/AboutUs">About Us</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 d-flex">
                            {/* <input className="form-control mr-sm-2 mx-md-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                        <Button title="Login" customClass="bg-white px-5 ms-3" customClassStyle="text-black"/>
                        <Button title="Sign Up" customClass="ms-3 px-5 in_active bg-lignt-green" customClassStyle="text-white"/>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header