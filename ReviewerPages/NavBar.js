import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Navbar.css";

const NavBar = () => {
  return (
    <div className="p-0 ms-0 w-100 position-fixed z-1">
      <div className="uper-nav bg-nav  ">
        {/* position-absolute top-0 start-0 z-n1 w-100 min-vh-10 pt-38*/}
        <div className="container">
          <div className="row d-flex justify-content-between align-content-center align-items-center">
            <div className="col-md-12">
              <div className="Head py-4 text-center">
                <h2 className="fs-3 ">
                  Journal of Computer And Artificial Intelligance
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
