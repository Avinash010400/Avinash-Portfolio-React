import React from 'react';
import "./Image.css"

const Image = ({ title, text, img, style }) => {
  return (
    <>
      <div className="bg-image">
        <img src={img} alt="img" />
      </div>
      <div className="bg-text">
        <h1 style={style}>{title}</h1>
        <p style={style}>{text}</p>
      </div>
    </>
  )
}

export default Image