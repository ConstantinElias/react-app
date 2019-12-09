import React, { Component } from "react";
import "./SecondSection.css";

class SecondSection extends Component {
  state = {};

  render() {
    let secondSectionData = this.props.secondSection;

    return (
      <div className="second-section">
        <div>{secondSectionData.title}</div>
        <div className="second-section-content">
          <div className="second-section-content-container">
            {secondSectionData.graphText}
            {secondSectionData.stats.map(stat => {
              return <div>{stat.title} </div>;
            })}
          </div>
          <div className="second-section-content-container flex-center">
            {secondSectionData.formText}

            <p className="aligned-center">
              We work with ecosystem leaders, corporations and startups
              worldwide. How can we help you?
            </p>
            {secondSectionData.formLabels.map(label => {
              return <input value={label}></input>;
            })}
            <button>{secondSectionData.buttonText}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondSection;
