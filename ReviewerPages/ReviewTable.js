import React, { useState } from 'react';
import { Table, Button, Form, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../ReviewerPages/Style/Review.css";
import { FaRegCircle } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

let isReviewed = true;
let isPending = true;
let isMessage = true;
const ReviewTable = () => {
    
    const [data , setData] = useState([
       
        {
            Articletitle: "INTRODUCTION TO DECISION MAKING",
            reviewname:"Review Assignment",
            isReviewed: true,
            isMessage : true,
            noofmessage :4,
           
        },
        {
            Articletitle: "INTRODUCTION TO DECISION ",
            reviewname:"Review Assignment",
            reviewwaited:" Test: Test ",
            Response: "22-4-2024",
            Review: "26-5-2024",
            isPending: true,
            isMessage : true,
            noofmessage :3,
           
        },
        {
            Articletitle: "INTRODUCTION TO DECISION MAKING",
            reviewname:"Review Assignment",
            reviewwaited:" Test: Test ",
            Response: "22-4-2024",
            Review: "26-5-2024",
            isPending: true
           
        },
        {
            Articletitle: "INTRODUCTION TO DECISION ",
            reviewname:"Review Assignment",
            isReviewed: true
           
        },
       
      
      ]);
     
    return (
    <>
    <Table striped bordered hover className="TB">
    <thead>
     <tr className="tr1">
      <th> <h4>My Assigned</h4>
           <Form.Control type="search" placeholder="Search" className="bt" />  </th>
     </tr>
    </thead>
   <tbody>
    {data.map(item => (
      <tr >
       <td className="tx1"> {item.reviewname} <br/>
                            {item.Articletitle} <br/>
                            {item.reviewwaited} <br/>
                            {item.Response} <br/>
                            {item.Review}
                            {item.isReviewed && (
                                <div>
                            <Container className="re"><row> review <FaRegCircle  className='circle'/></row></Container>
                            <Button variant="outline-secondary" className=" vw2">
                                        <Link to= 'RequestPage'>
                                            View
                                        </Link>
                                    </Button> 
                                    
                                    
                                    
                            </div>
                               )}
                                  
                                {/* Render button if isReviewed is false */}
                            {item.isPending && (
                                <div>
                                <Container className="oo"><row> pending <FaRegCircle   /></row></Container>
                                <Button variant="outline-secondary" className=" vw2">
                                        <Link to= 'RequestPage'>
                                            View
                                        </Link>
                                    </Button>
                                    </div>
                                )}
                                { item.isMessage&&(
                                <div className='messageicon'>
                                    <FiMessageCircle /> 
                                    <h6 className='messagenum'> {item.noofmessage} </h6>
                                    </div>)}
                                </td>
                                
                        </tr>
 
                    ))}
                   
                </tbody>
            </Table>
        </>
    );
};

export default ReviewTable;
