import React, { Component } from "react";
import "./Header.css";
import NavBar from "../navbar/NavBar";
import SearchIcon from "./white-search-icon.jpg";

class Header extends Component {
  state = { activeSlide: 0 };

  handleSliderDotClick(e, dotIndex) {
    this.setState({ activeSlide: dotIndex });
  }

  getSliderDotCls(dotIndex) {
    let sliderDotCls = "slider-dot";

    return dotIndex === this.state.activeSlide
      ? sliderDotCls + " slider-dot-active"
      : sliderDotCls;
  }

  render() {
    const state = this.state,
      props = this.props,
      slides = props.slides;

    return (
      <div
        className="header"
        style={{
          backgroundImage: `url("${
            this.props.slides.length
              ? this.props.slides[this.state.activeSlide].image
              : null
          }")`
        }}
      >
        <div className="navbar-container">
          <NavBar options={props.menuOptions} />
          <img
            className="navbar-search-icon"
            height="23"
            width="23"
            alt="search"
            src={SearchIcon}
          ></img>
        </div>
        <span className="slider-title">
          {slides.length ? slides[state.activeSlide].title : ""}
        </span>
        <span className="slider-subtitle">
          {slides.length ? slides[state.activeSlide].subtitle : ""}
        </span>
        <div className="slider-dot-holder">
          {slides.length
            ? slides.map((slide, index) => {
                return (
                  <div
                    className={this.getSliderDotCls(index)}
                    key={"slider-dot-" + index}
                    onClick={e => {
                      this.handleSliderDotClick(e, index);
                    }}
                  ></div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Header;
