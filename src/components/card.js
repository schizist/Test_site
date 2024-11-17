import React from 'react';
// import './Card.css'; // Assume you have some basic styling here
import styles from "./card.module.css"



const Card = ({ title, description, thumbnail, onClick }) => (
  <div className="card">
    <img src={thumbnail} alt={`${title} thumbnail`} className="card-thumbnail" />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClick}>View Model</button>
    </div>
  </div>
);

export default Card;