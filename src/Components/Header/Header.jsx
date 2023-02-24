import React from 'react'

import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import { FiMenu } from 'react-icons/fi'
const Header = () => {
    return (

        <div className="header">
            <div className="menu">
                <p>About Us</p>
                <p>Services</p>
                <p>Contact</p>
            </div>
            <div className="log">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
            </div>
            <div className="buttons">
                <button className='btn2'> Sign Up</button>
                <button className='btn1'> Login</button>
            </div>
            <FiMenu className='fil' />
        </div>
    )
}

export default Header