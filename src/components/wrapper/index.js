import React from "react";
import "./style.css";
const Logo = require('./nintendo-logo.png');

function Wrapper(props) {
  return (
    <>
      <div className="container-fluid game">
        <div className="navbar fixed-top gamenav">
          <a className="title" href="/">
          <img className="logo" src={Logo}/>
          </a>
          <div className={props.class} onAnimationEnd={props.anim}>
            {props.text}
          </div>
          <div>
            <span>Score: {props.score}</span> |
            <span> Top score: {props.topScore}</span>
          </div>
        </div>
        {/* <div className="bg">
          <h2>Clicky Game!</h2> Click on an image to earn points, but don't
          click on an image twice!
        </div> */}
        <div className={`wrapper ${props.class}`}>{props.children}</div>
      </div>
      <div className="footer">
      <img className="logo" src={Logo}/>
      </div>
    </>
  );
}

export default Wrapper;