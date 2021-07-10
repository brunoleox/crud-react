import './Logo.css'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>