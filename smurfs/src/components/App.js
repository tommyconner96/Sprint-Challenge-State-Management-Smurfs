import React, { Component } from "react";
import "./App.css";
import SmurfCard from './SmurfCard'
import SmurfForm from './SmurfForm'
class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfCard />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
