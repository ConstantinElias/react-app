import React, { Component } from "react";
import Tile from "./tile/Tile";
import "./Page2.css";

class Page2 extends Component {
  state = {};

  render() {
    return (
      <div className="page2">
        <p className="page2-description">{this.props.page2.description}</p>
        <div className="page2-tilesCt">
          {this.props.page2
            ? this.props.page2.tiles.map(tile => {
                return (
                  <Tile
                    title={tile.title}
                    icon={tile.icon}
                    description={tile.description}
                    link={tile.link}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Page2;
