import React, { useState } from 'react';
import './style.css';

const Cards = ({
  className = '',
  id = '',
  value = '',
  dangerouslySetInnerHTML = {},
  group = '',
  category = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="emoji" dangerouslySetInnerHTML={dangerouslySetInnerHTML}></div>
      <div className={`card-info ${isHovered ? 'visible' : ''}`}>
        <div className="name">Name: {value}</div>
        <div className="category">{category}</div>
        <div className="group">{group}</div>
      </div>
    </div>
  );
};

export default Cards;
