import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi am a React app</h1>
        <Person name="HAHA" age="20"></Person>
        <Person name="Xddd" age="21">
          My hobbies: Racing
        </Person>
        <Person name="asda" age="22"></Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "text")
    // );
  }
}

export default App;
