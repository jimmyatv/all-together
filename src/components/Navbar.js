import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCustomerService2Fill } from "react-icons/ri";
import logo from '../assets/ar-dark.png'
import './Navbar.css';

const Navbar = () => {
  const [openContact, setOpenContact] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const handleBugerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className='logo' src={logo} alt='' /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleBugerMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${burgerMenuOpen ? 'show' : ''} d-lg-flex justify-content-between px-4`} id="navbarNav">
          <ul className="navbar-nav d-lg-flex"> {/* Dodajemo d-lg-flex klasu ovde */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="fetch">Fetch</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="hooks">Hooks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="fetch-dogs">Fetch-Dogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="crud">CRUD</Link>
            </li>
          </ul>
          <div onClick={() => { setOpenContact(!openContact) }} className='contact'>
            <span className={`${openContact ? 'is-active' : ''}`}><a href='tel:+381606546***'>+381606546***</a></span>
            <span><RiCustomerService2Fill /></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
