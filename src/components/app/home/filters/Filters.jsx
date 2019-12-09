import React, { Component } from "react";
import "./Filters.css";

class Filters extends Component {
  state = { activeOption: 0 };

  onOptionClick(e, optionId) {
    this.setState({ activeOption: optionId });
    this.props.onFilterClick(e, optionId);
  }

  render() {
    return (
      <nav className="filters">
        <ul>
          {this.props.options.map((option, index) => {
            return (
              <li
                className="filters-option"
                key={"filter" + index}
                onClick={e => this.onOptionClick(e, index)}
              >
                {option.title}
                {this.state.activeOption === index ? (
                  <div className="filters-option-dot"></div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Filters;
