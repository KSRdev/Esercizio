import React from "react";
import "./home.css";
import  Oil  from "./oilchange";
import  Inspection  from "./inspection";
import  Auto  from "./autodet";

export default class Scheduler extends React.Component {
  state = {
    data: null
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="service">Select a Service</p>
          <Oil />
          <Inspection />
          <Auto />
        </header>
      </div>
    );
  }
}
