import React, { useState } from 'react';

const HornedBeast = ({ title, image, description }) => {
  const [favorites, setFavorites] = useState(0);

  const handleFavoriteClick = () => {
    setFavorites(favorites + 1);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <button onClick={handleFavoriteClick} className="btn btn-primary">
          ❤️ Favorite <span className="badge bg-secondary">{favorites}</span>
        </button>
      </div>
    </div>
  );
};

export default HornedBeast;