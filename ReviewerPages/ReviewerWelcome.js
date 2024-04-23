import React from 'react';
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import '../ReviewerPages/Style/reviewerwelcome.css';


const ReviewerWelcome = () => {
    return (
        <>
      
        <div className="container p-0 ms-0 mx-width ">
        <NavBar />
          <div className="row d-flex ">
            <div
              className="col-3 z-2 "
              style={{ height: "100vh", overflow: "hidden" }}
            >
              <Sidebar />
            </div>
            <div className="col-9 mt-5 pt-5 ">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
};

export default ReviewerWelcome;