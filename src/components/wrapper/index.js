import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <>
      <div className="container-fluid">
        <nav class="navbar fixed-top navbar-light bg-light">
          <a className="title" href="/">
            <i className="fas fa-dice" />
            &nbsp; Nintendo Clicky Game!
          </a>
          <div className={props.class} onAnimationEnd={props.anim}>
            {props.text}
          </div>
          <div>
            <span>Score: {props.score}</span> |
            <span> Top score: {props.topScore}</span>
          </div>
        </nav>
        <div className="bg">
          <h2>Clicky Game!</h2> Click on an image to earn points, but don't
          click on an image twice!
        </div>
        <div className={`wrapper ${props.class}`}>{props.children}</div>
      </div>
      <div className="footer">
        <a href="https://github.com/acarrillo2019/nintendo-clicky-game">
          <i className="fab fa-github-square" />
        </a>
      </div>
    </>
  );
}

export default Wrapper;