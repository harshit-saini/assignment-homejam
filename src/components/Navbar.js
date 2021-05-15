import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 10px 0;
  color : #ccc;

  & > div{
    display: flex;
    align-items: center;
    justify-content : space-between;
  }
`

const Navigation = styled.div`

  justify-self : end;
  margin-left: auto;


  position : ${props => props.isMenuOpen ? "fixed" : ""};
  top: 0px;
  bottom: 0px;
  right : 0px;
  left: 0px;
  background-color : ${props => props.isMenuOpen ? "#07072D" : "transparent"};
  z-index : ${props => props.isMenuOpen ? "1000" : ""};

  & > div{
    display: flex;
    flex-direction : ${props => props.isMenuOpen ? "column" : "row"};
    align-items: ${props => props.isMenuOpen ? "left" : "center"};
    padding-top: ${props => props.isMenuOpen ? "25%" : "0px"};
    padding-left: ${props => props.isMenuOpen ? "5%" : "0px"};
    @media(max-width: 768px){
      justify-self : end !important;
      margin-left : auto;
    }

    @media(max-width: 768px){
     & .not-on-mobile-navbar{
      display : ${props => props.isMenuOpen ? "inline-block" : "none"};
     }

     & .not_in_mobile_menu{
       display :${props => props.isMenuOpen ? "none !important" : "inline-block"};
     }
    }

  }


  & > div > span {
    margin: 8px 16px;
    
  }
  & > div > span:hover {
    color : #fff;
    cursor : pointer;
  }

`

const MenuIcon = styled.div`
  width : 30px;
  height : 30px;
  cursor: pointer;
  margin-left : 10px;
  z-index : 2000;

  & .burger{
    width :100%;
    height:100%;
    display : ${props => props.isMenuOpen ? "none" : "flex"};
    flex-direction : column;
    justify-content : space-evenly;
    align-items : center;
  }

  & .cross{
    width :100%;
    height:100%;
    display : ${props => props.isMenuOpen ? "flex" : "none"};
    flex-direction : column;
    justify-content : center;
    align-items : center;

  }
  & .cross :nth-child(1){
    transform : rotate(45deg);
  }

  & .cross :nth-child(2){
    transform : rotate(135deg);
  }


  &  span {
    background-color : #ccc;
    width : 80%;
    height : 2px;
  }

  @media(min-width: 768px){
    & {
      display : none;
    }
  }
`



const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(isMenuOpen => (!isMenuOpen));
  }


  return (
    <Nav>
      <div className="container">
        <Link to="/">
          <img src="/images/home-jam-logo.svg" alt="" width="86" height="44" class="d-inline-block align-text-top" />
        </Link>

        <Navigation isMenuOpen={isMenuOpen}>
          <div>
            <span className="not_in_mobile_menu">
              <i className="fas fa-search me-2" style={{ fontSize: "12px" }}></i>
              <span className="not-on-mobile-navbar">Search</span>
            </span>
            <span className="not-on-mobile-navbar">
              Help
            </span>
            <span className="not-on-mobile-navbar">
              Account
            </span>
            <span className="not_in_mobile_menu">
              <i className="fas fa-shopping-bag" style={{ fontSize: "12px" }}></i>
            </span>
          </div>
        </Navigation>

        <MenuIcon isMenuOpen={isMenuOpen} onClick={handleMenuClick}>
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="cross">
            <span></span>
            <span></span>
          </div>
        </MenuIcon>

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