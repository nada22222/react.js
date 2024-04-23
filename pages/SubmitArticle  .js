import React , {useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import "../components/Header";
import '../style/Submit.css';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from "react-bootstrap/Modal";
import { RiDeleteBin5Line } from "react-icons/ri";



const SubmitArticle  = () => {
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    lastName: '',
    emailAddress: '',
    institution: '',
    countryRegion: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setInputValue(e.target.value);
  };

  const [key, setKey] = useState('profile');
  const [InputValue, setInputValue] = useState('');
  const handleTabChange = (k) => setKey(k);
  const [showContributorModal, setShowContributorModal] = useState(false);
  const handleCloseContributorModal = () => setShowContributorModal(false);
  const handleShowContributorModal = () => setShowContributorModal(true);
  const [contributorData, setContributorData] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [orcid, setOrcid] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [affiliation, setAffiliation] = useState("");

  const handleSaveChanges = () => {
    const newContributor = {
      firstName,
      middleName,
      lastName,
      orcid,
      phone,
      country,
      affiliation
    };
    setContributorData([...contributorData, newContributor]);
    handleCloseContributorModal();
    // Reset input fields after saving
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setOrcid("");
    setPhone("");
    setCountry("");
    setAffiliation("");
  };
 

  const handleFileInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNextTab = () => {
    if (key === 'manuscript information') {
      setKey('Suggested reviewer');
    } else if (key === 'Suggested reviewer') {
      setKey('upload files');
    } else if (key === 'upload files') {
      setKey('cover letters');
    } else if (key === 'cover letters') {
      setKey('finish submission');
    }
  };

  const handlePreviousTab = () => {
    if (key === 'Suggested reviewer') {
      setKey('manuscript information');
    } else if (key === 'upload files') {
      setKey('Suggested reviewer');
    } else if (key === 'cover letters') {
      setKey('upload files');
    } else if (key === 'finish submission') {
      setKey('cover letters');
    }
  };
  const handleSave = () => {
    // Handle save action here
    console.log("Save button clicked");
  };

  const handleCancel = () => {
    // Handle cancel action here
  };
  
    const handleClick = ({ onDelete }) => {
      // Call the onDelete function when the button is clicked
      onDelete();
    };


    return (
        <div>
           <h5 className='sba' > Submit an Article</h5>
           <Tabs defaultActiveKey="profile"  className="mb" activeKey={key} onSelect={(k) => setKey(k)} >
              <Tab eventKey="manuscript information" title="Manuscript Information">
                <div className='mi'>
                 <h6  >Article Type :</h6>
                 <Form.Select aria-label="Default select example " className='arttype'>
                     <option>choose</option>
                     <option value="1">source file</option>
                     <option value="2">text file</option>
                     <option value="3">Three </option>
                 </Form.Select>
                 
                 <br/>
                 <h6>Title* :</h6>
                 <Form.Control type="text" className='fl' onChange={handleInputChange} />
                 <br/>
                 <h6>SubTitle :</h6>
                 <Form.Control type="text" className='fl' onChange={handleInputChange} />
                 <br/>
                 <h6>Abstract* :</h6>
                 <Form.Control as="textarea" row={3} className='abst' onChange={handleInputChange}  />
                 <br/>
                 <h6>Cover Letters* :</h6>
                 <Form.Control as="textarea" row={3} className='cl' onChange={handleInputChange}  />
                 <br/>
                 <h6>Keywords* :</h6>
                  <p className='p'> Add additional information for your submission,press 'enter' after each term</p>
                 <Form.Control type="text" className='ky' onChange={handleInputChange} />
                 <br/>
                 <br/>
                 <div className="  d-flex justify-content-center align-items-center " >
                 <Card border="light" className=" ad     ">
                  <Card.Header className="d-flex justify-content-between">
                   <h2 className="h4">List of contributor</h2>
                      <Button  variant="outline-secondary" onClick={handleShowContributorModal} >
                          Add Contributor
                      </Button>
                  </Card.Header>
                 <Card.Body>
                 <Card border="light" className="w-100 mx-1 shadow ">
                 <Card.Body>
                   <Table>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>phone</th>
                      <th>Country</th>
                      <th>Affiliation</th>
                    </tr>
                  </thead>
                  <tbody>
                  {contributorData.map((contributor, index) => (
                      <tr key={index}>
                        <td>{`${contributor.firstName} ${contributor.middleName} ${contributor.lastName}`}</td>
                        <td>{contributor.orcid}</td>
                        <td>{contributor.phone}</td>
                        <td>{contributor.country}</td>
                        <td>{contributor.affiliation}</td>
                      </tr>
                    ))}
                    
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Card.Body>
          </Card>

          <Modal show={showContributorModal} onHide={handleCloseContributorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contributor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h6>Title:</h6>
            <Form.Select aria-label="Default select example" className='cont'>
              <option>choose</option>
              <option value="1">source file</option>
              <option value="2">text file</option>
              <option value="3">Three</option>
            </Form.Select>
            <br />
            <h6>First Name:</h6>
            <Form.Control type="text"  className='cont' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <br/>
            <h6>Middle Name:</h6>
            <Form.Control type="text" className='cont' value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            <br/>
            <h6>Last Name:</h6>
            <Form.Control type="text" className='cont' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <br/>
            <h6>ORCID:</h6>
            <Form.Control type="text" className='cont' placeholder="0000-0000-0000-0000" value={orcid} onChange={(e) => setOrcid(e.target.value)} />
            <br/>
            <h6>Phone:</h6>
            <Form.Control type="tel" className='cont' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <br/>
            <h6>Country:</h6>
            <Form.Control type="text" className='cont' value={country} onChange={(e) => setCountry(e.target.value)} />
            <br/>
            <h6>Affiliation:</h6>
            <Form.Control as="textarea" className='cont' value={affiliation} onChange={(e) => setAffiliation(e.target.value)} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseContributorModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
          </Modal.Footer>
      </Modal>
    </div>
          <br/>
       <NavDropdown  className='scroll' title="Section" id='navbarScrollingDropdown'>
        <Form.Select aria-label="Default select example" className='sec'>
              <option>select related subject</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <br />
            <br />
            <h6 className='mm'>more subject if you want one or more :</h6>
            <Form.Control type="text" className="fm" onChange={handleInputChange}  />
       </NavDropdown>
           <br/>
         <h6  className='com'>comment :</h6>
         <Form.Control type="text" className='comment' onChange={handleInputChange} />
         <br/>
         <Button className='nex' variant="primary" onClick={handleNextTab}>
            Next
          </Button>
       </div>
      </Tab>


      <Tab eventKey="Suggested reviewer" title="Suggested reviewer">
       <div className=' suggest'>
        <h5>Please suggest 3 potential  reviewers for this manuscript</h5>
        <h5>Enter contact information for each suggested reviewer in the fields below(required fields are marked with an *) the editorial may not use our suggestion, but they are greaty accepiated</h5>
        <div className="  d-flex justify-content-center align-items-center " >
                 <Card border="light" className="   addrev  ">
                  <Card.Header className="d-flex justify-content-between">
                   <h4 className="h">Add Reviewer</h4>
                  </Card.Header>
                 <Card.Body>
                 <Card border="light" className="w-100 mx-1 shadow ">
                 <Card.Body className='body'>
                 <h5 className='h ' >Title* :</h5> 
                 <Form.Select aria-label="Default select example " className='tl' >
                     <option>choose</option>
                     <option value="1">source file</option>
                     <option value="2">text file</option>
                     <option value="3">Three</option>
                 </Form.Select>
                 <br/>
                 <h5 className='h' >Full Name* :</h5> 
                 <Form.Control type="text" className="name" onChange={handleInputChange}  />
                 <br/>
                 <h5 className='h' >Last Name* :</h5> 
                 <Form.Control type="text" className="last" onChange={handleInputChange}  />
                 <br/>
                 <h5 className='h' >Email Address* :</h5> 
                 <Form.Control type="email" className="email" onChange={handleInputChange}  />
                 <br/>
                 <h5 className='h' >Institution :</h5> 
                 <Form.Control type="text " className="inst" onChange={handleInputChange}  />
                  <br/>
                  <h5 className='h ' >Country Region :</h5> 
                 <Form.Select aria-label="Default select example " className='cr' >
                     <option>choose</option>
                     <option value="1">source file</option>
                     <option value="2">text file</option>
                     <option value="3">Three</option>
                 </Form.Select>
                 <br/>
                 <h5 className='h' >Reason :</h5> 
                 <Form.Control as="textarea"   className="reason" onChange={handleInputChange}  />
                 <br/>
                 <Button variant="primary"  className='sv' onClick={handleSave}>Save</Button>
                 <Button variant="secondary"  className='cancel' onClick={handleCancel}>Cancel</Button>
              
              </Card.Body>
            </Card>
          </Card.Body>
          </Card>
          </div>
          <br/>
          <div className='add'>
          <Table  striped bordered hover className='sr'>
            <thead>
            <tr>
                 <th>Delete</th>
                 <th>Reviewer details</th>
            </tr>
            </thead>
           <tbody>
             
                <tr >
                 <td> <button   onClick={handleClick} style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '10px' }}>
                  <RiDeleteBin5Line  size={30} /></button></td>
                 <td>{}</td>
            </tr>
          
           </tbody>
          </Table>
          </div>
       </div>
      </Tab>


      <Tab eventKey="upload files" title="upload files" >
        <div className='upload'>
          <h5 className='  m-3' >please download the copyright and sign in it( please  note that the copyright form must be signed by all authors )</h5>
          <h5 className='ft' >File Type* :</h5> 
                 <Form.Select aria-label="Default select example " className='file' >
                     <option>choose</option>
                     <option value="1">source file</option>
                     <option value="2">text file</option>
                     <option value="3">Three</option>
                 </Form.Select>  
            <h5 className='fn'> File Name:</h5>
            <Form.Group controlId="formFileMultiple" className="choosefile">
            <Form.Control type="file" multiple />
           </Form.Group>
           <br/>
           <Table stripped bordered hover className='u m-3'>
          <thead>
            <tr>
              <th>#</th>
              <th>File Type</th>
              <th>File Name</th>
              <th>Size</th>
              <th>Upload Data</th>
              <th>Download</th>
              <th></th>
              <th>Save</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
           
          </tbody>
        </Table>
        <Button className='nx' variant="primary" onClick={handleNextTab}>
            Next
          </Button>
          <Button  className='pv' variant="secondary" onClick={handlePreviousTab}>
           Previous
          </Button>
        </div>
      </Tab>



      <Tab eventKey="cover letters" title="cover letters" >
        <div className='cover'>
          <h5 className='ecl'> Enter Cover Letters:</h5>
          <Form.Control as="textarea" row={3} className='cl' onChange={handleInputChange}  />
          <Button className='nx' variant="primary" onClick={handleNextTab}>
            Next
          </Button>
          <Button className='pv' variant="secondary" onClick={handlePreviousTab}>
           Previous
          </Button>
        </div>
      </Tab>


      <Tab eventKey="finish submission" title="finish submission" >
        Tab content for Contact
      </Tab>
      
    </Tabs>
        </div>
    );
};

export default SubmitArticle ;