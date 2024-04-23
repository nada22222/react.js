import React , {useState } from 'react';
import { Tabs, Tab, Button, InputGroup  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ReviewerPages/Style/Request.css";
import {  Modal , Table , Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaRegFile } from "react-icons/fa6";
import CloseButton from 'react-bootstrap/CloseButton';
import { IoCloseSharp } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";




let isMessage = true;
export default function RequestPage({ itemId }) {
  const [data , setData] = useState([
    {
      
      Articletitle: "INTRODUCTION TO DECISION MAKING ",
      Abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
      keyword: "nothing sit tempor",
      editorDate: "16-6-2023",
      requestDate: "26-6-2023",
      reviewDate: "16-7-2023",
      Articletype: " Article Text",
      subtitle: "decision making",
      submissionDate: "16-6-2023",
      relatedSubject: "nothing",
      reviewFiles:"Author-Manuscript: INTRODUCTION TO DECISION MAKING.doc",
      fileType:"article text",
      isMessage : true,
    },
    {
      
      Articletitle: "INTRODUCTION TO DECISION  ",
      Abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
      keyword: "nothing sit tempor",
      editorDate: "16-6-2023",
      requestDate: "26-6-2023",
      reviewDate: "16-7-2023",
      Articletype: " Article Text",
      subtitle: "decision making",
      submissionDate: "16-6-2023",
      relatedSubject: "nothing",
      reviewFiles:" Author-Manuscript: INTRODUCTION TO DECISION MAKING.doc",
      fileType:"article text",
    },
    
   
  ]);
  
 
  const selectedItem = data.find((item) => item.Articletitle ==="INTRODUCTION TO DECISION MAKING ");
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  const [key, setKey] = useState('Request');
  const [reviewInputValue, setReviewInputValue] = useState('');
  const [editorInputValue, setEditorInputValue] = useState('');
  const [files, setFiles] = useState([]);
  const [showDiscussionModal, setShowDiscussionModal] = useState(false);
  const handleCloseDiscussionModal = () => setShowDiscussionModal(false);
  const handleShowDiscussionModal = () => setShowDiscussionModal(true);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [editorHtml, setEditorHtml] = useState('');
  const [SelectedDiscussion, setSelectedDiscussion] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const handleSaveChanges = () => {
    const newDiscussion = {
      subject: subject,
      message: message,
      date: new Date().toLocaleString(),
      uploadedFiles: uploadedFiles
    };
    setDiscussions([...discussions, newDiscussion]);
    handleCloseDiscussionModal();
  };
  
  
  
  const handleClose = () => {
    setShowAcceptModal(false);
    setShowRejectModal(false);
    setShowModal(false);
    setShowModals(false);
  };

  const handleAccept = () => {
    console.log("Accepted");
    handleClose();
  };

  const handleReject = () => {
    console.log("Rejected");
    handleClose();
  };

  const handleNextTab = () => {
    if (key === 'Request') {
      setKey('Guidelines');
    } else if (key === 'Guidelines') {
      setKey('Review');
    } else if (key === 'Review') {
      setKey('Completion');
    }
  };

  const handlePreviousTab = () => {
    if (key === 'Guidelines') {
      setKey('Request');
    } else if (key === 'Review') {
      setKey('Guidelines');
    } else if (key === 'Completion') {
      setKey('Review');
    }
  };

  const handleReviewInputChange = (event) => {
    setReviewInputValue(event.target.value);
  };

  const handleEditorInputChange = (event) => {
    setEditorInputValue(event.target.value);
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;
    const allUploadedFiles = [ ...uploadedFiles];
    setFiles([...files, ...allUploadedFiles]);
    setUploadedFiles(allUploadedFiles); // Update uploadedFiles state with all files
  };
  

  const downloadFile = (file, fileName) => {
    const fileUrl = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(fileUrl);
  };
  
  const downloadFiles = (event, filePath) => {
    if (event && event.preventDefault) {
      event.preventDefault(); // Prevent default link behavior if event object is valid
    }
  
    // Check if filePath is defined
    if (filePath) {
      // Implement file download logic here
      const link = document.createElement('a');
      link.href = filePath;
      // Split the file path if it contains a directory structure
      const fileName = filePath.split('\\').pop();
      link.setAttribute('download', fileName); // Set the file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error('File path is undefined');
    }
  };
  
 
  const handleChange = (html) => {
      setEditorHtml(html);
    };
    

const handleShowModal = () => {
  setShowModal(true);
  
};
const handleShowModals = () => {
  setShowModals(true);
  
};
const DiscussionsTable = ({ discussions }) => {
  const [showModals, setShowModals] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [message, setMessage] = useState("");
  const [uploadedFiles, setuploadedFiles] = useState("");
};
const handleDiscussionClick = (discussion) => {
  setSubject(discussion.subject);
  setMessage(discussion.message);
  setUploadedFiles(discussion.uploadedFiles || []);
  setShowModals(true);
};
const handleFileRemove = (indexToRemove) => {
  setUploadedFiles((prevFiles) =>
    prevFiles.filter((_, index) => index !== indexToRemove)
  );
  setFiles((prevFiles) =>
    prevFiles.filter((_, index) => index !== indexToRemove)
  );
};

 
 
    
    
    


  return (
     selectedItem &&(
    <Tabs className='reviewertabs' activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="Request" title="Request">
        
        <div className='request'>
          <h4>Request for Review</h4>
          <p>you have been selected as a potential reviewer</p>
          <br />
          <br />
          <h4>Article Title</h4>
          <p>{selectedItem.Articletitle}</p>
          <h4>Abstract</h4>
          <p> {selectedItem.Abstract}</p>
          <h4>Keywords</h4>
          <p>{selectedItem.keyword}</p>
          <br />
          <Card.Link href='#'   onClick={() => setShowModal(true)}>
            View All Submission Details
          </Card.Link>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body >
              <h6 className='md'>Article Type</h6>
              <p className=' Details'>{selectedItem.Articletype}</p>
              <h6 className='md'> Title</h6>
              <p className=' Details'>{selectedItem.Articletitle}</p>
              <h6 className='md'>Subtitle</h6>
              <p className=' Details'>{selectedItem.subtitle}</p>
              <h6 className='md'>Abstract</h6>
              <p className=' Details'>{selectedItem.Abstract}</p>
              <h6 className='md'>Keywords</h6>
              <p className=' Details'>{selectedItem.keyword}</p>
              <h6 className='md'>Submission Date</h6>
              <p className=' Details'>{selectedItem.submissionDate}</p>
              <h6 className='md'>Related Subject</h6>
              <p className=' Details'>{selectedItem.relatedSubject}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {/* Add Accept button action */}
              <Button variant="primary" onClick={handleClose}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>

          <h4 className='ww'>Review Schedule</h4>
          <p>
            <span className='date'>{selectedItem.editorDate} </span>
            <span className='date1'>{selectedItem.requestDate}</span>
            <span className='date2'>{selectedItem.reviewDate}</span>
          </p>
          <p>
            <span className='text1'>Editor's Request </span>
            <span className='text2'>Response Due Date</span>
            <span className='text3'>Review Due Date</span>
          </p>
          <Button className='accept' variant="success" onClick={() => setShowAcceptModal(true)}>
            Accept
          </Button>
          <Modal show={showAcceptModal} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className='accepttext'>Are you sure you want to accept to review this article?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {/* Add Accept button action */}
              <Button variant="primary" onClick={() => {
                handleNextTab();
                handleClose();
              } }>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
          <Button className='reject' variant="danger" onClick={() => setShowRejectModal(true)}>
            Reject
          </Button>
          <Modal show={showRejectModal} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className='accepttext'>Are you sure you want to reject to review this article?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {/* Add Accept button action */}
              <Button variant="secondary"  className='rejectok'>
                <Link to='/Reviewer'>
                 ok
                </Link>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Tab>
  

      <Tab eventKey="Guidelines" title="Guidelines">
        <div className='Completion'>
          <h4>Reviewer Guidelines</h4>
          <p>In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with the most notable passage excerpted below </p>
          <Button className='continue' variant="primary" onClick={handleNextTab}>
            Continue
          </Button>
          <Button className='back' variant="secondary" onClick={handlePreviousTab}>
            Back
          </Button>
        </div>
      </Tab>



      <Tab eventKey="Review" title="Review">
      <Table striped bordered hover className='rv'>
      <thead>
       <tr>
        <th>Review Files</th>
       </tr>
     </thead>
     <tbody>
     {data.map(item =>(
            <tr key={item.Articletitle}>
              <td>
              <p onClick={(event) => downloadFiles(event, '')}>
                 <span className='sp0'>
                   <a href={item.reviewFiles} download>
                     {item.reviewFiles}
                   </a>
                 </span>
                 <span className='sp'>{item.fileType}</span>
             </p>

              </td>

            </tr>
            ))}
  </tbody>
</Table>

      
        <h6 >Review</h6>
        <p> Enter you Review of this submission into the form below</p>
        <br />
        <Form>
      <Form.Group   controlId="For Author and Editor">
        <Form.Label>For Author and Editor</Form.Label>
        <Form.Control as="textarea"  rows={3} className='input' value={reviewInputValue} onChange={handleReviewInputChange}/>
      </Form.Group>
      <br/>
      <br/>
      <Form.Group   controlId="For Editor Only" >
        <Form.Label>For Editor Only</Form.Label>
        <Form.Control as="textarea"  rows={3} className=" input"  value={editorInputValue} onChange={handleEditorInputChange}/>
      </Form.Group>
    </Form>
    
       
        <br />
        <br />
        <Form.Group controlId="formFile" className="UploadFile ">
          <Form.Label>Upload File</Form.Label>
          <Form.Control type="file" onChange={handleFileUpload} />
        </Form.Group>
        <br/>
        <br/>

        <div className='px-3 d-flex justify-content-center align-items-center' >
        <Card border="light" className="discussion">
          <Card.Header className="d-flex justify-content-between">
            <h2 className="h4"> Review Discussion</h2>
            <Button
              variant="outline-secondary"
              onClick={handleShowDiscussionModal}
            >
              Add Discussion
            </Button>
          </Card.Header>
          <Card.Body>
            <Card border="light" className="w-100 mx-1 shadow ">
              <Card.Body>
                <Table>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>From</th>
                      <th>to</th>
                      <th>Date</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                     {discussions.map((discussion, index) => (
                         <tr key={index}>
                            <td>
                            <Card.Link href='#' onClick={() => handleDiscussionClick(discussion)}>
                               {discussion.subject}  </Card.Link>
                               <Modal show={showModals} onHide={() => setShowModals(false)}>
                             <Modal.Header closeButton>
                             <Modal.Title className='subj'>Subject</Modal.Title>
                             </Modal.Header>

                             <Modal.Body >
                               <h6>message*</h6>
                               <p className='mess'> {discussion.message}</p>
                               <h6> Files:</h6>
                                  {files.map((file, index) => (
                                    <div>
                                    <p className='files' key={index} onClick={() => downloadFile(file, file.name)}>
                                      <FaRegFile /> {file.name} 
                                    </p> <IoCloseSharp  className='remove' onClick={() => handleFileRemove(index)} />
                                   
                                    
                                    </div>
                                     ))}
                                 
                              

                             </Modal.Body>

                             <Modal.Footer>
                             <Button variant="secondary" onClick={handleClose}>
                                Close
                             </Button>
                              {/* Add Accept button action */}
                             <Button variant="primary" onClick={handleClose}>
                                Ok
                             </Button>
                             </Modal.Footer>
                            </Modal>
                               
                                 </td>
                            
                            <td>{discussion.from}</td>
                            <td>{discussion.to}</td>
                            <td>{discussion.date}</td>
                          </tr>
                        ))}
                      </tbody>

                </Table>
              </Card.Body>
            </Card>
          </Card.Body>

          <Modal show={showDiscussionModal} onHide={handleCloseDiscussionModal} >
            <Modal.Header closeButton>
              <Modal.Title>Add Discussion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
               

                <Form.Group className="subject" controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                
                    type="text"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </Form.Group>
                <br/>
                <Form.Group className="message" controlId="message">
                  <Form.Label>Message</Form.Label>
                 
                  <ReactQuill
                     theme="snow"
                     value={message}
                     onChange={(value) => setMessage(value)}
                     className='message2'
                     placeholder="Enter message"
                     
                 />
                 
                </Form.Group>
                <br/>
                <Form.Group controlId="formFileMultiple" className="uplod">
                <Form.Label>Upload Files</Form.Label>
                 <Form.Control type="file" multiple onChange={handleFileUpload} />
                </Form.Group>
                  {/* Display the uploaded files */}
               {uploadedFiles.length > 0 && (
                <div>
                   <h6 > Files:</h6>
                   <ul>
                     
                    {files.map((file, index) => (
                       <li key={index} onClick={() => downloadFile(file, file.name)}>
                       <FaRegFile /> {file.name} 
                        <IoCloseSharp  className='removefile' onClick={() => handleFileRemove(index)} />
                       </li>
                     ))}
                   </ul>
              
                </div>
                )}

              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDiscussionModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>
        </div>
        <br/>
        <h6 > Recommendation</h6>
        <p> select a recommendation and submit</p>
        <Form.Select aria-label="Default select example" className=' recommendationchoose'>
          <option>Choose One</option>
          <option value="1">accept</option>
          <option value="2"> major revision</option>
          <option value="3"> minor revesion</option>
          <option value="4"> reject</option>
        </Form.Select>
        <Button className='Submitreview' variant="primary" onClick={handleNextTab}>
          Submit review
        </Button>
        <Button className='back2' variant="secondary" onClick={handlePreviousTab}>
          Back
        </Button>
      </Tab>


    
      <Tab eventKey="Completion" title="Completion">
        <div className='Completion'>
          <h4>Review Submitted</h4>
          <p>thank you for the  completing the review of this submission
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <br/>
          <Card.Link href='/Reviewer' >Return to your dashboard </Card.Link>
        </div>
      </Tab>

    </Tabs>
     )
  );
}

