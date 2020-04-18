import React, { Component } from "react";
import images from "./images.json";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import UIfx from 'uifx';
import coin from './sounds/smb_coin.mp3';
import oops from './smb_jump-small.mp3';

const coin = new UIFx({asset: coin});
const oops = new UIfx({asset: oops});

shuffle(images);
class App extends Component {
  state = {
    images: images,
    score: 0,
    topScore: 0,
    text: "Click an image only once!",
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
        text: "Too bad! Try again.",
        class: "incorrect"
      }
      );
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
        text: "Keep going!",
        class: "correct"
      });
    }
  };
  render() {
    return (
      <Wrapper
        score={this.state.score}
        topScore={this.state.topScore}
        text={this.state.text}
        class={this.state.class}
        anim={this.animEnd}
      >
        {this.state.images.map(image => {
          return (
            <Card
              key={image.id}
              id={image.id}
              image={image.imageSrc}
              name={image.name}
              clicked={image.clicked}
              isClicked={this.isClicked}
            />
          );
        })}
      </Wrapper>
    );
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default App;
