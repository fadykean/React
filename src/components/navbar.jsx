import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {};
    render() {
        const { user } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                <div className="container">
                    <Link className="nav-item nav-link" to="/">
                        Real App
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/about">
                                    About
                                </NavLink></li>
                            <li className="nav-item">
                                {user?.biz && (
                                    <NavLink className="nav-item nav-link" to="/my-cards">
                                        My Cards
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {!user && (
                                <React.Fragment>

                                    <li className="nav-item">
                                        <NavLink className="nav-item nav-link" to="/signin">
                                            Signin
                                        </NavLink></li>
                                    <li className="nav-item">
                                        <NavLink className="nav-item nav-link" to="/signup">
                                            Signup
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-item nav-link" to="/biz-signup">
                                            Business
                                        </NavLink>
                                    </li>
                                </React.Fragment>
                            )}

                            {user && (
                                <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/logout">
                                        Logout
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

            </nav>
        )

    }

}

export default Navbar;