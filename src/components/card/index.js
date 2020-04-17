import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
          onClick={() => {
            props.isClicked(props.clicked, props.id);
          }}
        />
      </div>
    </div>
  );
}

export default ImageCard;