import React, {useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Nav = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: '#e6c2bf' }} />
            ) : (
              <FaBars size={30} style={{ color: '#e6c2bf' }} />
            )}
          </div>
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            {<ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/MyWork" className="nav-link">My Work</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">Contact</Link>
              </li>
            </ul>}
          </div>
        </div>
      );
    };

export default Nav;
