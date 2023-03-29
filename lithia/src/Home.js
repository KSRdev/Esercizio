import React from "react";
import { Link } from "react-router-dom";
import './home.css';

import logo from "./logo.png";

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="Title">Welcome to Lithia Motors Service!</p>
          <img src={logo} alt="Logo" />
          <p className="text">
            Lithia Motors wants to put you in full control of your car-owning
            experience by providing easy to book service appointments from the
            comfort of your own home!
          </p>
          <Link className="Button" to="/scheduler">
            Get Started
          </Link>
        </header>
      </div>
    );
  }
}
