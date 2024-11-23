import React from 'react';
import './card.module.css'; 




const Card = ({ title, description, thumbnail, onClick }) => (
  <div className="card">
    <div className="card-content">
      <h1 style={{ 
        margin: 0, 
        padding: 0 
        }}>{title}</h1>
      <button
        onClick={onClick}
        style={{ 
          margin: 0, 
          padding: 0, 
          // borderRadius: 50 
        }}
      >
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="card-thumbnail"
          style={{ 
            // borderRadius: 50 
          }}
        />
      </button>
      <p>{description}</p>
    </div>
  </div>
);


export default Card;