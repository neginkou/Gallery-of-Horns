import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

const HornedBeast = (props) => {
  const [favorites, setFavorites] = useState(0);
  const [show, setShow] = useState(false);

  const handleFavoriteClick = () => {
    setFavorites(favorites + 1);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col key={props._id} style={{ marginBottom: '10px', justifyContent: 'center', gap: '30px', display: 'flex' }}>
        <Card onClick={handleShow}>
          <Card.Body>
            <h3>{props.title}</h3>
            <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src={props.imageUrl} alt={props.title} />
            <p>{props.description}</p>
            <p>Keyword: {props.keyword}</p>
            <p>Horns: {props.horns}</p>
            <p>Favorites: {favorites}</p>
            <Button onClick={handleFavoriteClick} variant="primary">
              ❤️ Favorite <span className="badge bg-secondary">{favorites}</span>
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{ width: '100%' }} src={props.imageUrl} alt={props.title} />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>Keyword: {props.keyword}</p>
          <p>Horns: {props.horns}</p>
          <p>Favorites: {favorites}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="top" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HornedBeast;