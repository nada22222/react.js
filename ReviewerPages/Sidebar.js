import React from "react";
import { Link } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "../ReviewerPages/Style/Sidebar.css";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        position: "fixed",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#003c70">
        <CDBSidebarHeader>
          {/* Button code removed */}
          <Link className="nav-link fs-small fs-4 nav-white pb-2" to={""}>
            DashBoard
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Reviewer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" >
                <Link
                  className="nav-link fs-small fs-6 nav-white"
                  to={"/Reviewer"}
                >
                  Submission
                </Link>
              </CDBSidebarMenuItem>
            </NavLink>
            
              
          
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            <CDBSidebarMenuItem
              icon="user-alt"
              className="d-flex justify-content-start fw-bolder "
            >
              Admin Name
            </CDBSidebarMenuItem>{" "}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
