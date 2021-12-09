import React from 'react'
import './Header.css'

export default ({black}) => {

    let logo = require('../assets/logo.png')
    let avatar = require('../assets/avatar.png')
    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src={logo.default} alt="logo" />
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src={avatar.default} alt="user" />
                </a>
            </div>
        </header>
    )
}