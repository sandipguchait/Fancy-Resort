import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';



class NavBar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    closeToggle = () => {
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" >
                        <img src={logo} alt="beach Resort" />
                        </Link>
                        <button 
                            type="button" 
                            className="nav-btn" 
                            onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav": "nav-links"}>
                      <li onClick={this.closeToggle}>
                          <Link to="/">Home</Link>
                      </li>
                      <li onClick={this.closeToggle}>
                          <Link to="/rooms">Rooms</Link>
                      </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;