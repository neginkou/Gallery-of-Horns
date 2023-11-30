import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from "./SelectedBeasts.module.css"; 
import PropTypes from "prop-types";

const SelectedBeast = ({ selectedBeast }) => {
  const [showModal, setShowModal] = useState(!!selectedBeast);
  const [rotation, setRotation] = useState(0); // Added rotation state

  const rotateImg = () => {
    setRotation(rotation + 45);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedBeast?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={selectedBeast?.imageUrl}
          alt={selectedBeast?.description}
          className={`${styles.cardImgTop} ${rotation ? styles.rotate : ''}`} 
        />
        <p>{selectedBeast?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

SelectedBeast.propTypes = {
  selectedBeast: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default SelectedBeast;