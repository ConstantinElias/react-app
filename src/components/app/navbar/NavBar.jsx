import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class Navbar extends Component {
  state = { activePage: 0 };

  getNavRoute(navOptionIndex) {
    switch (navOptionIndex) {
      case 0:
        return "/home";
      case 1:
        return "/page2";
      default:
        return "/home";
    }
  }

  handleNavOptionClick(optionIndex) {
    this.setState({ activePage: optionIndex });
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          {this.props.options.map((option, index) => {
            return (
              <li
                className="navbar-option"
                key={"navOption" + index}
                onClick={() => {
                  this.handleNavOptionClick(index);
                }}
              >
                <NavLink to={this.getNavRoute(index)}>
                  {option.title}
                  {this.state.activePage === index ? (
                    <div className="navbar-option-dot"></div>
                  ) : null}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
