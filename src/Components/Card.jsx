import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="card-img" />
      <p className="card-name">{props.name}</p>
      <p className="card-title">{props.title}</p>
      <p className="card-stars">
      </p>
    </div>
  );
}

export default Card;
