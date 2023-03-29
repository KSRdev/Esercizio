import React from "react";
import Home from "./Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scheduler from "./Scheduler.js";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/scheduler" exact element={<Scheduler />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
