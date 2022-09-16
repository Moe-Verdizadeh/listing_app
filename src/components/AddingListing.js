import React, { useState } from 'react';
import { Row, Col, Button, Form, InputGroup, Modal} from 'react-bootstrap';

export default function AddingListing() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return ( 
    <span>
        <Button variant="light" onClick={handleShow}>
            Add Listing
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Listing</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form> 
                    <Col>
                        <Row>
                            {['radio'].map((type) => (
                                <Col key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="For Sell"
                                        name="selling"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="For Rent"
                                        name="selling"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    /> 
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Price</InputGroup.Text>
                            <Form.Control
                                placeholder="Price"
                                aria-label="Price"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>  
                    <Col>
                        <Row>
                            {['radio'].map((type) => (
                                <Col key={`${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Monthly"
                                        name="payment"
                                        type={type}
                                        id={`${type}-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Bi-Weekly"
                                        name="payment"
                                        type={type}
                                        id={`${type}-4`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Weekly"
                                        name="payment"
                                        type={type}
                                        id={`${type}-5`}
                                    /> 
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            {['radio'].map((type) => (
                                <Col key={`${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Detach"
                                        name="style"
                                        type={type}
                                        id={`${type}-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Townhouse"
                                        name="style"
                                        type={type}
                                        id={`${type}-4`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Condo"
                                        name="style"
                                        type={type}
                                        id={`${type}-5`}
                                    /> 
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
                            <Form.Control
                                placeholder="Location"
                                aria-label="Location"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col> 
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">SQFT</InputGroup.Text>
                            <Form.Control
                                placeholder="SQFT"
                                aria-label="SQFT"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Story</InputGroup.Text>
                            <Form.Control
                                placeholder="Story"
                                aria-label="Story"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Bedroom</InputGroup.Text>
                            <Form.Control
                                placeholder="Bedroom"
                                aria-label="Bedroom"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Bathroom</InputGroup.Text>
                            <Form.Control
                                placeholder="Bathroom"
                                aria-label="Bathroom"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    <Col> 
                        Finish Basement?
                        <Form.Check 
                            label=""
                            type="switch"
                            id="custom-switch"
                        />
                    </Col>
                    <Col>
                        Walk Out
                        <Row>
                            {['radio'].map((type) => (
                                <Col key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        name="basement"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        name="basement"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    /> 
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col>
                        Pictures and video
                        <Button>Insert</Button>
                    </Col>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add Listing
                </Button>
            </Modal.Footer>
        </Modal>
    </span>
  )
}
