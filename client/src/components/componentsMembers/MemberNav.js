import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/tovalidate" className="nav-link">
                        Register
                    </Link>
                </li>

            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="/Logout" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>

            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center"
                    id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        {localStorage.usertoken ? userLink : loginRegLink}
                        <li className="nav-item">
                            <a href="http://localhost/blogafvp/" target="_blank" rel="noopener noreferrer" className="nav-link">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)