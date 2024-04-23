import React from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../ReviewerPages/Style/Review.css";
//import Archives from "./Archives";
import { Outlet } from "react-router-dom";
import ArchivesReview from './ArchivesReview';

const Reviewpage = () => {
    return (
        <>
        <h2 className="mt-3 h3 mb-0 w-100 "> Submission </h2>
        
        <div className="mt-3 bg-light w-100">
          <Tabs
            defaultActiveKey="My-Queue"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="My-Queue" title="My Queue" className="bg-light px-1 ">
              <Outlet />
            </Tab>
            { <Tab eventKey="Archives" title="Archives" className="text-color">
              <ArchivesReview />
    </Tab>}
          </Tabs>
        </div>
      </>
    );
};

export default Reviewpage;