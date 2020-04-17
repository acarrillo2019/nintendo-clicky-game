import React, { Component } from "react";
import images from "./images.json";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
shuffle(images);

class App extends Component {

  state = {
    images: images,
    score: 0,
    topScore: 0,
    text: "Click an image to begin!",
    class: ""
  };

  animEnd = () => {
    this.setState({
      class: ""
    });
  };

  isClicked = (boolean, id) => {
    if (boolean) {
      this.state.images.map(element => {
        return (element.clicked = false);
      });
      shuffle(this.state.images);
      this.setState({
        images: images,
        score: 0,
        topScore: this.state.score,
        text: "You guessed incorrectly!",
        class: "incorrect"
      });
    } else {
      this.state.images.map(element => {
        if (element.id === id) {
          element.clicked = true;
        }
        return element;
      });
      shuffle(this.state.images);
      this.setState({
        images: images,
        score: this.state.score + 1,
        text: "You guessed correctly!",
        class: "correct"
      });
    }
  };


}

export default App;
