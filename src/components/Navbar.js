import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-none">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/images/home-jam-logo.svg" alt="" width="86" height="44" class="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" activeClassName="navLinkActive" to="/">
              Search</NavLink>
            <NavLink className="nav-link" activeClassName="navLinkActive" to="/features">Help</NavLink>
            <NavLink className="nav-link" activeClassName="navLinkActive" to="/pricing">Account</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
