import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 10px 0;
  display: flex;

`


const Navbar = () => {
  return (


    <Nav>
      <div className="container">
        <Link to="/">
          <img src="/images/home-jam-logo.svg" alt="" width="86" height="44" class="d-inline-block align-text-top" />
        </Link>


      </div>
    </Nav>


  )
}

export default Navbar



// <nav className="navbar navbar-expand-lg navbar-dark bg-none">
//   <div className="container">

//     <Link className="navbar-brand" to="/">
//       <img src="/images/home-jam-logo.svg" alt="" width="86" height="44" class="d-inline-block align-text-top" />
//     </Link>



//     <div className="navbar-nav d-flex ms-auto">
//       <NavLink className="nav-link" activeClassName="navLinkActive" to="/search">
//         <i className="fas fa-search me-2" style={{ fontSize: "12px" }}></i>
//         <span className="d-md-inline-block d-none">Search</span>
//       </NavLink>
//       <NavLink className="nav-link" activeClassName="navLinkActive" to="/Help">Help</NavLink>
//       <NavLink className="nav-link" activeClassName="navLinkActive" to="/account">Account</NavLink>
//       <NavLink className="nav-link" activeClassName="navLinkActive" to="/cart"><i className="fas fa-shopping-bag" style={{ fontSize: "12px" }}></i></NavLink>
//     </div>

//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>


//   </div>


    // </nav>