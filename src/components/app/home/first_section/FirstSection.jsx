import React, { Component } from "react";
import Img from "./img/Img";
import "./FirstSection.css";

class FirstSection extends Component {
  state = {};

  render() {
    return (
      <div className="first-section">
        {this.props.images.map(image => {
          return (
            <Img image={image.img} title={image.title} key={image.title} />
          );
        })}
      </div>
    );
  }
}

export default FirstSection;
