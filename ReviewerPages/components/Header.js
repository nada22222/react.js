import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Header.css';
import  img1   from "../imgs/logo.png";
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
       
        <header>
        <div className="uper-nav bg-nav">
          
              <div className="container">
      <div className="row d-flex justify-content-between align-content-center align-items-center">
        <div className="col-md-4">
          <div className="Head">
            <h2 className="fs-4 ">Journal of Computer And Artificial Intelligance</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content text-center">
            <img
              src={img1}
              alt=""
              style={{ width: "120px", height: "120px" }}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="login">
            <ul className="list-unstyled d-flex justify-content-end gap-3">
              <li className="d-flex justify-content-center align-content-center align-items-center gap-2 ">
              <FontAwesomeIcon className='fs-5 pt-1 ' icon={faArrowRight} />                    
              <Link  className ='nav-link fs- fs-5'to={"/login"}>login</Link>
              </li>
              <li className="d-flex justify-content-center align-content-center align-items-center gap-2">
              <FontAwesomeIcon className='fs-6' icon={faUser} />                    
                <Link  className ='nav-link fs-small fs-5'to={"/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

        </div>
        <nav className="navbar navbar-expand-lg bg-nav p-0">
          <div className="container-fluid container p-0 pb-3">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-4 text-white ">
                <li className="nav-item  ">
                <Link  className ='nav-link fs-small fs-5 nav-white'to={""}>Home</Link>

                </li>
                <li className="nav-item">
                <Link  className ='nav-link fs-small fs-5 nav-white'to={""}>Archive</Link>

                </li>
                <li className="nav-item">
                <Link  className ='nav-link fs-small fs-5 nav-white'to={""}>Contact us</Link>

                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2 search-box" type="text" placeholder="Search" />
                <button className="srh" type="submit">Search
                 
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
  

    );
};

export default Header;