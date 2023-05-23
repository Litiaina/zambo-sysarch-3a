import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Zambo-Sysarch-3A</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <div className="d-inline-block mr-5">
            <Link to="/login" className="btn btn-outline-primary">Login</Link>
          </div>
          <div className="d-inline-block">
            <Link to="/signup" className="btn btn-primary">Sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
