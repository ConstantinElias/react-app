import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component {
  state = {};
  render() {
    return (
      <div className="tile-container">
        <span>{this.props.icon}</span>
        <span>{this.props.title}</span>
        <span>{this.props.description}</span>
        <span>{this.props.link}</span>
      </div>
    );
  }
}

export default Tile;
