// src/POPOSSpace.js
import React from "react";
import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props;
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
      <h1 className="Address">{name}</h1>
      </Link>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
            width="300"
            height="300"
            alt="Hello"
        />
      </Link>
      <div>{address}</div>
      <div className="Hours">{hours}</div>
    </div>
  )
}
export default POPOSSpace;