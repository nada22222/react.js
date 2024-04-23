import React, { useState } from 'react';
import { Modal, Table, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaRegFile } from 'react-icons/fa';
import CloseButton from 'react-bootstrap/CloseButton';

const Home = () => {
  const [showDiscussionModal, setShowDiscussionModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showModals, setShowModals] = useState(false);
  const [discussions, setDiscussions] = useState([]);

  const handleShowDiscussionModal = () => setShowDiscussionModal(true);
  const handleCloseDiscussionModal = () => setShowDiscussionModal(false);

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

  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;
    const allUploadedFiles = [...uploadedFiles];
    setFiles([...files, ...allUploadedFiles]);
    setUploadedFiles(allUploadedFiles);
  };

  const handleDiscussionClick = (discussion) => {
    setSubject(discussion.subject);
    setMessage(discussion.message);
    setUploadedFiles(discussion.uploadedFiles || []);
    setShowModals(true);
  };

  

  const handleClose = () => {
    setShowModals(false);
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
    <div className='px-3 d-flex justify-content-center align-items-center'>
      <Card border="light" className="discussion">
        <Card.Header className="d-flex justify-content-between">
          <h2 className="h4">Review Discussion</h2>
          <Button
            variant="outline-secondary"
            onClick={handleShowDiscussionModal}
          >
            Add Discussion
          </Button>
        </Card.Header>
        <Card.Body>
          <Card border="light" className="w-100 mx-1 shadow">
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
                          {discussion.subject}
                        </Card.Link>
                        <Modal show={showModals} onHide={() => setShowModals(false)}>
                          <Modal.Header closeButton>
                            <Modal.Title className='subj'>Subject</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <h6>message*</h6>
                            <p className='mess'>{discussion.message}</p>
                            <h6> Files:</h6>
                            <ul>
                              {files.map((file, index) => (
                                <li key={index}>
                                  <FaRegFile /> {file.name} <CloseButton onClick={() => handleFileRemove(index)} />
                                </li>
                              ))}
                            </ul>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
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
        <Modal show={showDiscussionModal} onHide={handleCloseDiscussionModal}>
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
              <br />
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
              <br />
              <Form.Group controlId="formFileMultiple" className="uplod">
                <Form.Label>Upload Files</Form.Label>
                <Form.Control type="file" multiple onChange={handleFileUpload} />
              </Form.Group>
              {/* Display the uploaded files */}
            {files.length > 0 && (
                <div>
                  <h6> Files:</h6>
                  <ul>
                    {files.map((file, index) => (
                      <li key={index}>
                        <FaRegFile /> {file.name} <CloseButton onClick={() => handleFileRemove(index)} />

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
  );
};

export default Home;
