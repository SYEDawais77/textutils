import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                    </ul>

                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="toggleMode" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault" id='themeModelable'>{props.mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string

}

Navbar.defaultProps = {
    title: "Set Title",
    about: "About"
}
