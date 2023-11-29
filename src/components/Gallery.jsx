import React from 'react';
import HornedBeast from './HornedBeasts.jsx';
import beastsData from './beasts.json'; 
const Gallery = () => {
  return (
    <div className="container">
    <div className="row">
      {beastsData.map((beast, index) => (
        <div key={index} className="col-md-4">
          <HornedBeast
            title={beast.title}
            image={beast.image}
            description={beast.description}
          />
        </div>
      ))}
    </div>
  </div>
);
};

export default Gallery;