import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/app/header/Header";
import Home from "./components/app/home/Home";
import Page2 from "./components/app/page_2/Page2";
import "./App.css";

class App extends Component {
  state = {
    home: false,
    page2: false,
    slides: [],
    filters: [{ title: "Section 1" }, { title: "Section 2" }],
    menuOptions: [],
    activePage: 0
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let responses = [],
      homeUrl = "https://voda-react-assessment.herokuapp.com/home",
      sliderUrl = "https://voda-react-assessment.herokuapp.com/slider",
      menuUrl = "https://voda-react-assessment.herokuapp.com/menu",
      page2Url = "https://voda-react-assessment.herokuapp.com/page";

    const requestHome = axios.get(homeUrl);
    const requestSlider = axios.get(sliderUrl);
    const requestMenu = axios.get(menuUrl);
    const requestPage2 = axios.get(page2Url);

    try {
      responses = await axios.all([
        requestHome,
        requestSlider,
        requestMenu,
        requestPage2
      ]);

      this.setState({ home: responses[0].data[0] });
      this.setState({ slides: responses[1].data });
      this.setState({ menuOptions: responses[2].data });
      this.setState({ page2: responses[3].data[0] });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const state = this.state;

    return (
      <Router>
        <div className="App">
          <Header slides={state.slides} menuOptions={state.menuOptions} />
          <Switch>
            <Route path="/home">
              <Home home={state.home} filters={state.filters} />
            </Route>
            <Route path="/page2">
              <Page2 page2={state.page2} />
            </Route>
            <Route path="/">
              <Home home={state.home} filters={state.filters} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
