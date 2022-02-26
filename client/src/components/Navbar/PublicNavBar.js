import React from "react";
import { Nav, NavLogo, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

function PublicNavbar(props) {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLogo to="/">
            <div className="navbar-logo-container">
              <img
                className="navbar-logo"
                src={props.logo}
                alt="logo is still loading.."
              ></img>
            </div>
          </NavLogo>
        </NavMenu>
        <NavBtn>
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
        </NavBtn>
      </Nav>
    </>
  );
}

export default PublicNavbar;
