import React from 'react'
import "../utils/Login.css"
import Widget101 from '../componets/Widget101'
import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Login = () => {
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        setTimeout(() => { setDelay(true) }, 1000)
    }, [])
    return (
        <>
            <div className="container-fluid">
                {delay === false ? "" : <Widget101 />}
                <div className="container-fluid page-body-wrapper full-page-wrapper mt-5">
                  <div className="login-sub-main">
                  <h3 className="card-title text-center mt-5 mb-3">| Login | Account |</h3>
                    <form className='login-form card-gradient'>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" className="data" placeholder="Enter Email" />

                        </div>
                        <div className="form-group">
                            <label>Password *</label>
                            <input type="password" className="data " placeholder="Enter Password" />
                        </div>
                        <div className="form-group d-flex align-items-center justify-content-between">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox"  className="form-check-input" /> Remember me </label>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn log-btn btn-warning btn-block enter-btn">Login</button>
                        </div>
                        <p className="text-center mt-2 sign-up">Don't have an Account?<Link to="/register" className="text-warning"> Sign Up</Link></p>
                    </form>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Login