import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Jimmy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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
        </div>
      </div>
    </nav>
  )
};

export default Navbar;