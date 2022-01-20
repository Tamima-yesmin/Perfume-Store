import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './login.css'

function Register() {
    const [user, setUser] = useState({
        name: '', email: '', password: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/register', { ...user })

            localStorage.setItem('firstLogin', true)


            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div id="signIn" className="">
            <div className="text-center mb-4"><i class="far fa-user-circle rounded-circle  "></i></div>
            <form onSubmit={registerSubmit}>

                <input type="text" name="name" required
                    placeholder="Name" value={user.name} onChange={onChangeInput}
                    className="form-control form-control-lg mb-4 input" />

                <input type="email" name="email" required
                    placeholder="Email" value={user.email} onChange={onChangeInput}
                    className="form-control form-control-lg mb-4 input" />

                <input type="password" name="password" required autoComplete="on"
                    placeholder="Password" value={user.password} onChange={onChangeInput}
                    className="form-control form-control-lg mb-4 input" />

                <div className="row">
                    <button className="btn btn-outline-dark" type=" submit">Register</button>
                    <p className="or">OR</p>
                    <button className="btn btn-outline-dark " type="submit"><Link to="/login" className="link">Login</Link></button>
                    {/* <Link to="/login">Login</Link> */}
                </div>
            </form>
        </div>
    )
}

export default Register