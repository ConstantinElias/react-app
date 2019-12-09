import React, { Component } from "react";
import "./Img.css";
import whiteEyeIcon from "./white-eye-icon.jpg";

class Img extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="content-overlay"></div>
          <img
            className="content-image"
            alt={this.props.title}
            src={this.props.image}
          ></img>
          <div className="content-details fadeIn-top">
            <img className="eye-icon" alt="white-eye" src={whiteEyeIcon}></img>
            <h3>{this.props.title}</h3>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Img;
