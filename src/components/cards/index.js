import React, { useState } from 'react';
import './style.css';

const Cards = ({
  className = '',
  id = '',
  value = '',
  dangerouslySetInnerHTML = {},
  additionalInfo = [],
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
      className={`card ${className}`}
      id={id}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="emoji" dangerouslySetInnerHTML={dangerouslySetInnerHTML}></div>
      {isHovered && (
        <div className="card-info">
          <div className="name">{value}</div>
          <div className="additional-info">{additionalInfo.join(' + ')}</div>
        </div>
      )}
    </div>
  );
};

export default Cards;
