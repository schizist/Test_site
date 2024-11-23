import React from 'react';
import './card.module.css'; 

const Card = ({ title, description, thumbnail, onClick }) => (
  <div >
    <div >
      <h1 style={{ 
        margin: 0, 
        padding: 0 
        }}>{title}</h1>
      <button
        onClick={onClick}
      >
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          
          style={{ 
            borderRadius: 50,
            width: '32rem',
            height: '18rem',
            margin: 0,
            padding: 0,
            
          }}
        />
      </button>
      <p>{description}</p>
    </div>
  </div>
);


export default Card;