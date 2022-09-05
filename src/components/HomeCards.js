import React from 'react'
import {Col, Button,  Card, ListGroup  } from 'react-bootstrap';
import House from '../assets/house.png'; 


export default function HomeCards() {
  return (  
    <Col className="justify-content-md-center">
        <Card className="mt-5" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={House} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item> 
                    Washroom: 
                </ListGroup.Item>
                <ListGroup.Item>Rooms: </ListGroup.Item>
                <ListGroup.Item>Stories: </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">More Deatils</Card.Link>
                <Card.Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg>
                </Card.Link>
            </Card.Body>
        </Card> 
    </Col>   
  )
}
