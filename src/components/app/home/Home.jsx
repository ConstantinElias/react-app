import React, { Component } from "react";
import "./Home.css";
import Filters from "./filters/Filters";
import FirstSection from "./first_section/FirstSection";
import SecondSection from "./second_section/SecondSection";

class Home extends Component {
  state = { activeSection: 0 };

  handleFilterClick = (e, filterId) => {
    this.setState({ activeSection: filterId });
  };

  getActiveSection() {
    let state = this.state,
      props = this.props,
      home = props.home,
      activeSection = state.activeSection;

    switch (activeSection) {
      case 0:
        return <FirstSection images={home ? home.sections[0].images : []} />;
      case 1:
        return <SecondSection secondSection={home.sections[1]} />;
      default:
        return <FirstSection images={home ? home.sections[0].images : []} />;
    }
  }

  render() {
    const props = this.props;

    return (
      <div className="home">
        <div className="home-content">
          <span className="home-description">{props.home.description}</span>
          <Filters
            onFilterClick={this.handleFilterClick}
            options={props.filters}
          />
          {this.getActiveSection()}
        </div>
      </div>
    );
  }
}

export default Home;
