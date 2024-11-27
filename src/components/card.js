import React from 'react';
import './card.module.css'; 

const Card = ({ title, description, thumbnail, onClick }) => (
  <div >
    <div >
      {/* <h1>{title}</h1> */}
      <button
        onClick={onClick}
      >
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
      </button>
      <p>{description}</p>
    </div>
  </div>
);
export default Card;