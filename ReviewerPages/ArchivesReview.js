import React, { useState } from 'react';
import { Table, Button, Form, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../ReviewerPages/Style/Review.css";

let isCompleted = true;
let isRejected=true;

const ReviewTable = () => {
    
    const [data ,setData] = useState([
       
        {
            Articletitle: "INTRODUCTION TO DECISION MAKING",
            isCompleted: true
            
           
        },
        {
            
            Articletitle: "INTRODUCTION TO DECISION ",
            isRejected: true
            
            
        },
        {
            Articletitle: "INTRODUCTION TO DECISION MAKING",
            isCompleted: true
            
           
        },
        {
            
            Articletitle: "INTRODUCTION TO DECISION ",
            isRejected: true
            
            
        }
      ]);

    return (
    <>
    <Table striped bordered hover className="TB">
    <thead>
     <tr className="tr1">
      <th> 
           <Form.Control type="search" placeholder="Search" className="bt" />  </th>
     </tr>
    </thead>
   <tbody>
    {data.map(item => (
      <tr key={item.id}>
       <td className="tx1"> 
                            {item.Articletitle} 
                            {item.isCompleted && (
                                
                            <Container className="cp"><row>complete </row></Container>
                            )}
                            {item.isRejected && (
                                
                                <Container className="rej"><row>reject  </row></Container>
                                )}
                                </td>
                        </tr>
                    ))}
                   
                </tbody>
            </Table>
        </>
    );
};

export default ReviewTable;
