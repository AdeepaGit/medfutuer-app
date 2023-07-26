import React from "react";
import { Outlet, Link } from "react-router-dom";
//import { Navbar, Nav, Container} from "react-bootstrap";
import './header.css';

import logo from '../Images/logo.png';

function Header() {

  return (
    <>
      { /* <Navbar className="navbar_content">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto headerLinks">
                  <Link to="/">HOme</Link>
                  <Link to="/Candidates">Candidates</Link>
                  <Link to="/Candidates">Employers</Link>
                  <Link to="/Candidates">Job Search</Link>
                  
          </Nav>
        </Container>
</Navbar>*/
      }
      <div>
        <nav className="navigation">
          <a href="/" className="brand-name">
            <img src={logo} className='lionicon' alt='' />
          </a>

          <div className="navigation-menu">
            <ul>
              <li>
                <Link className="link active" to="/Candidates">Candidates</Link>
              </li>
              <li>
                <Link className="link" to="/">Employers</Link>
              </li>
              <li>
                <Link className="link" to="/contact">Job Search</Link>
              </li>
            </ul>
            <div className="callButton" >
              <div className="callButton_wrapper" />
              <div className="callButton_content">Call Now</div>
            </div>
          </div>
        </nav>
      </div>











      <Outlet />
    </>
  );

}

export default Header;