/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
/* eslint-enable no-unused-vars */
import './style.css'
import axios from 'axios'


const Login = () => {
    const[values, setValues] = useState({
        email: '',
        password:''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5173/auth/adminlogin')
        .then (result => console.log(result))
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <h2>Login</h2>
                <form onSubmit={ handleSubmit }>
                    <div className='mb-3'>
                        <lable htmlFor="email"><strong>Email</strong></lable>
                        <input type="email" name='email' autoComplete='off' placeholder='Enter your email'
                          onChange={ (e) => setValues({...values, email : e.target.value})}
                        className='form-control rounded-0'/>
                    </div>

                    <div className='mb-3'>
                        <lable htmlFor="password"><strong>Password</strong></lable>
                        <input type="password" name='password' autoComplete='off' placeholder='enter your password'
                                                  onChange={ (e) => setValues({...values, password : e.target.value})}
                        className='form-control rounded-0'/>
                    </div>

                    <button className='btn btn-success w-100 rounded-0 mb-2'>Login</button>

                    <div className='mb-1'>
                        <input type="checkbox" name="tick" id="tick" className='me-2' />
                        <lable htmlFor="password"> Agree with Terms & Conditions </lable>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

