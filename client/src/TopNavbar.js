import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let navItems = "";
  if (props.showNavItems) {
    navItems = (
              <div>
                <Nav pullRight>
                  <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
                </Nav>
              </div>
              );

  }
  return (
    <nav>
      <input placeholder="Search for..."></input>
    </nav>
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
<<<<<<< HEAD
          <NavItem onClick={props.onSignOut}>Sign Out Here</NavItem>
=======
          <NavItem onClick={props.onSignOut}>Sign Out - Sign Out</NavItem>
>>>>>>> a05d6641572c81f4952a3fac27ec858620d6a57b
        </Nav>
        {navItems}
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
