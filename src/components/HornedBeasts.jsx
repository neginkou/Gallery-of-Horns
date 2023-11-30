import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import style from './hornedBeasts.module.css';
const HornedBeast = (props) => {
  const [favorites, setFavorites] = useState(0);
  const [votes, setVotes] = useState(0);
  const [rotation, setRotation] = useState(0);
  const handleFavoriteClick = () => {
    setFavorites(favorites + 1);
  }
  function rotateImg(){
    setRotation(rotation + 50)
  }

  function favorite(){
    setVotes(votes+1)
    setRotation(360)
  }
  return (
    <Col key={props._id} style={{ marginBottom: '10px', justifyContent: 'center' }}>
      <Card style={{ width: '10rem', height: '25rem', justifyContent: 'center', verticalAlign: 'center', border: 'solid black' }}>
        <div className="card">
          <img src={props.imageUrl} alt={props.title} className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.description}</p>
            <Button onClick={handleFavoriteClick} variant="primary">
              ❤️ Favorite <span className="badge bg-secondary">{favorites}</span>
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};


export default HornedBeast;